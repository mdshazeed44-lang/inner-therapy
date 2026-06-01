// One-off: pull every image fill from the Inner Theory v1 frame via the Figma API.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const TOKEN = process.env.FIGMA_TOKEN;
const KEY = "IsQtFvPj34mQPjB6mC2esp";
const V1 = "287:273";
const RAW = path.resolve("public/images/_raw");

const h = { "X-Figma-Token": TOKEN };

function collect(node, out) {
  const fills = node.fills || [];
  const img = fills.find((f) => f.type === "IMAGE" && f.imageRef);
  if (img && node.absoluteBoundingBox) {
    const b = node.absoluteBoundingBox;
    out.push({
      id: node.id,
      name: node.name,
      x: Math.round(b.x),
      y: Math.round(b.y),
      w: Math.round(b.width),
      h: Math.round(b.height),
      ref: img.imageRef,
    });
  }
  for (const c of node.children || []) collect(c, out);
}

const ext = (ct) =>
  ct.includes("png") ? "png" : ct.includes("jpeg") || ct.includes("jpg") ? "jpg" : ct.includes("gif") ? "gif" : "img";

async function main() {
  await mkdir(RAW, { recursive: true });

  // 1) v1 subtree -> image nodes
  const treeRes = await fetch(`https://api.figma.com/v1/files/${KEY}/nodes?ids=${V1}`, { headers: h });
  if (!treeRes.ok) throw new Error("nodes " + treeRes.status + " " + (await treeRes.text()).slice(0, 200));
  const tree = await treeRes.json();
  const root = tree.nodes[V1].document;
  const nodes = [];
  collect(root, nodes);
  nodes.sort((a, b) => a.y - b.y);

  console.log(`\nIMAGE NODES IN v1 (${nodes.length}), top→bottom:`);
  for (const n of nodes)
    console.log(`y=${String(n.y).padStart(5)} ${String(n.w)}x${n.h}  ref=${n.ref.slice(0, 10)}…  "${n.name}"`);

  // 2) imageRef -> original S3 url
  const imgRes = await fetch(`https://api.figma.com/v1/files/${KEY}/images`, { headers: h });
  if (!imgRes.ok) throw new Error("images " + imgRes.status);
  const { meta } = await imgRes.json();
  const refMap = meta.images;

  // 3) download each UNIQUE ref once, filename = ref + index for readability
  const seen = new Map();
  let i = 0;
  for (const n of nodes) {
    if (seen.has(n.ref)) continue;
    const url = refMap[n.ref];
    if (!url) {
      console.log("  (no url for ref " + n.ref.slice(0, 10) + ")");
      continue;
    }
    const r = await fetch(url);
    const ct = r.headers.get("content-type") || "image/png";
    const buf = Buffer.from(await r.arrayBuffer());
    const fname = `${String(i).padStart(2, "0")}_y${n.y}_${n.ref.slice(0, 8)}.${ext(ct)}`;
    await writeFile(path.join(RAW, fname), buf);
    seen.set(n.ref, fname);
    console.log(`  saved ${fname}  (${(buf.length / 1024).toFixed(0)}KB, ${ct})  for "${n.name}"`);
    i++;
  }

  // write a manifest mapping every node -> raw file
  const manifest = nodes.map((n) => ({ ...n, file: seen.get(n.ref) || null }));
  await writeFile(path.join(RAW, "manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(`\n${seen.size} unique images saved to ${RAW}`);
}

main().catch((e) => {
  console.error("ERROR:", e.message);
  process.exit(1);
});
