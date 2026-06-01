// Dump an exact, readable outline of the v1 frame: every node's geometry,
// text, font and colour — relative to the frame origin. Also saves raw JSON.
import { writeFile } from "node:fs/promises";
import path from "node:path";

const TOKEN = process.env.FIGMA_TOKEN;
const KEY = "IsQtFvPj34mQPjB6mC2esp";
const V1 = "287:273";
const h = { "X-Figma-Token": TOKEN };

const hex = (c) =>
  c ? "#" + [c.r, c.g, c.b].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("") : "";

function solid(fills) {
  const f = (fills || []).find((x) => x.type === "SOLID" && x.visible !== false);
  return f ? hex(f.color) : (fills || []).some((x) => x.type === "IMAGE") ? "IMG" : "";
}

let OX = 0, OY = 0;
const lines = [];

function walk(n, depth) {
  const b = n.absoluteBoundingBox;
  const pos = b ? `(${Math.round(b.x - OX)},${Math.round(b.y - OY)} ${Math.round(b.width)}x${Math.round(b.height)})` : "";
  let extra = "";
  if (n.type === "TEXT") {
    const s = n.style || {};
    extra = ` font:${s.fontFamily || "?"}/${Math.round(s.fontSize || 0)}/${s.fontWeight || ""} color:${solid(n.fills)} text:"${(n.characters || "").replace(/\s+/g, " ").slice(0, 80)}"`;
  } else {
    const c = solid(n.fills);
    if (c) extra = ` fill:${c}`;
    if (n.cornerRadius) extra += ` r:${n.cornerRadius}`;
    if (n.layoutMode) extra += ` AL:${n.layoutMode}/gap${n.itemSpacing || 0}`;
  }
  lines.push(`${"  ".repeat(depth)}${n.name} [${n.type}] ${pos}${extra}`);
  for (const c of n.children || []) walk(c, depth + 1);
}

async function main() {
  const res = await fetch(`https://api.figma.com/v1/files/${KEY}/nodes?ids=${V1}`, { headers: h });
  if (!res.ok) throw new Error("nodes " + res.status);
  const json = await res.json();
  const root = json.nodes[V1].document;
  const bb = root.absoluteBoundingBox;
  OX = bb.x; OY = bb.y;
  walk(root, 0);
  await writeFile(path.resolve("scripts/figma-outline.txt"), lines.join("\n"));
  await writeFile(path.resolve("scripts/figma-v1.json"), JSON.stringify(root));
  console.log(`outline: ${lines.length} nodes -> scripts/figma-outline.txt (frame ${Math.round(bb.width)}x${Math.round(bb.height)})`);
}
main().catch((e) => { console.error("ERR", e.message); process.exit(1); });
