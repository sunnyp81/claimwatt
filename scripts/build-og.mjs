// Convert OG default SVG → PNG (1200x630) using @resvg/resvg-js
// Run via: npm run build:og
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const svgPath = resolve('public/og-default.svg');
const outPath = resolve('public/og-default.png');

const svg = readFileSync(svgPath, 'utf-8');
const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  background: '#f0fdf4',
});
const png = resvg.render().asPng();
writeFileSync(outPath, png);
console.log('OG default rendered:', outPath, png.length, 'bytes');
