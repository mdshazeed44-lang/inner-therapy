// Render the needed Figma nodes as JPG (and copy the transparent cutouts),
// writing final files straight into public/images/.
import { copyFile, writeFile } from "node:fs/promises";
import path from "node:path";

const TOKEN = process.env.FIGMA_TOKEN;
const KEY = "IsQtFvPj34mQPjB6mC2esp";
const OUT = path.resolve("public/images");
const RAW = path.resolve("public/images/_raw");
const h = { "X-Figma-Token": TOKEN };

// node id -> final jpg filename (rendered at 2x as JPG)
const renders = {
  "350:1545": "program-longevity.jpg",   // man, eyes closed
  "350:1548": "program-hormone.jpg",      // muscular crouch
  "350:1547": "program-performance.jpg",  // jumping
  "350:1546": "program-weightloss.jpg",   // woman profile
  "361:2038": "structured-1.jpg",         // water pour
  "361:2039": "structured-2.jpg",         // water bubbles
  "361:2037": "structured-3.jpg",         // gold/skin (left half)
  "361:2040": "structured-4.jpg",         // gold/skin (right half) — 4th unique therapy card
  "361:2144": "facility-room.jpg",        // treatment room
  "361:2142": "facility-reception.jpg",   // reception desk
  "361:2125": "difference.jpg",           // two faces, wide
  "310:374": "map.jpg",                   // styled location map
};

// transparent cutouts -> keep as PNG
const cutouts = {
  "00_y619_1cf7bf0e.png": "hero.png",
  "09_y8787_f6a52667.png": "contact-figure.png",
};

// reuse for journal / stories
const dupes = {
  "structured-2.jpg": "journal-1.jpg",
  "difference.jpg": "journal-2.jpg",
  "structured-3.jpg": "journal-3.jpg",
  "program-longevity.jpg": "story-1.jpg",
  "program-weightloss.jpg": "story-2.jpg",
};

async function main() {
  const ids = Object.keys(renders);
  const url = `https://api.figma.com/v1/images/${KEY}?ids=${encodeURIComponent(ids.join(","))}&format=jpg&scale=2`;
  const res = await fetch(url, { headers: h });
  if (!res.ok) throw new Error("images " + res.status + " " + (await res.text()).slice(0, 200));
  const { images, err } = await res.json();
  if (err) throw new Error("render err " + err);

  for (const [id, name] of Object.entries(renders)) {
    const u = images[id];
    if (!u) { console.log("  !! no render for", id, name); continue; }
    const r = await fetch(u);
    const buf = Buffer.from(await r.arrayBuffer());
    await writeFile(path.join(OUT, name), buf);
    console.log(`render ${name}  (${(buf.length / 1024).toFixed(0)}KB)`);
  }

  for (const [src, dst] of Object.entries(cutouts)) {
    await copyFile(path.join(RAW, src), path.join(OUT, dst));
    console.log(`cutout ${dst}`);
  }

  for (const [src, dst] of Object.entries(dupes)) {
    await copyFile(path.join(OUT, src), path.join(OUT, dst));
    console.log(`dupe   ${dst} <- ${src}`);
  }

  console.log("\nDone. Final images in public/images/");
}

main().catch((e) => { console.error("ERROR:", e.message); process.exit(1); });
