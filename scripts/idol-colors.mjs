// Computes the average color of every idol card image and writes
// src/containers/idols/idolColors.json ({ "<idol id>": "#rrggbb" }).
// The card shows this color until its image loads, so the page does not look empty.
//
// Usage: yarn idols:colors   (run again after new idols are added)
// Idols that are not in the file get a neutral gray in the card.
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp'; // installed with next (optional dependency)

const API = process.env.IDOLS_API ?? 'https://server.miriya.net/api/idols';
const IMAGE = (id) => `https://ik.imagekit.io/miriya/idols/${id}.jpg/tr:w-32,c-at_max`; // small is enough
const OUT = path.join(path.dirname(new URL(import.meta.url).pathname), '../src/containers/idols/idolColors.json');
const CONCURRENCY = 8;

const toHex = ({ r, g, b }) => `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`;

const colorOf = async (id) => {
  const res = await fetch(IMAGE(id));
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  // Average, not sharp's `dominant`: dominant often picks a black or white background,
  // while the average looks like the picture.
  const { channels } = await sharp(Buffer.from(await res.arrayBuffer())).stats();
  const [r, g, b] = channels.map((c) => Math.round(c.mean));
  return toHex({ r, g, b });
};

const idols = await (await fetch(API)).json();
const ids = idols.map((idol) => idol.id).sort();
const colors = {};
const failed = [];

let next = 0;
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (next < ids.length) {
      const id = ids[next++];
      try {
        colors[id] = await colorOf(id);
      } catch (error) {
        failed.push(`${id} (${error.message})`);
      }
    }
  }),
);

const sorted = Object.fromEntries(
  Object.keys(colors)
    .sort()
    .map((id) => [id, colors[id]]),
);
await fs.writeFile(OUT, `${JSON.stringify(sorted, null, 0).replace(/,"/g, ',\n"')}\n`);
console.log(`colors: ${Object.keys(sorted).length} / ${ids.length}, failed: ${failed.length}`);
if (failed.length) console.log(failed.slice(0, 20).join('\n'));
