// IndexNow ping — submits sitemap URLs to Bing/Yandex/Naver/Seznam
// Run after deploy: node scripts/indexnow-ping.mjs
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const KEY = '730da0f88a8dc3d7dd475da2413707b7';
const HOST = 'claimwatt.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const sitemapPath = resolve('dist/sitemap-0.xml');
let urls = [];
try {
  const xml = readFileSync(sitemapPath, 'utf-8');
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
} catch (e) {
  console.error('Sitemap not found at', sitemapPath, '— run `npm run build` first');
  process.exit(1);
}

console.log(`Pinging IndexNow with ${urls.length} URLs…`);

const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls,
};

const res = await fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});

console.log('IndexNow response:', res.status, res.statusText);
if (!res.ok) {
  const txt = await res.text().catch(() => '');
  console.error(txt);
  process.exit(1);
}
console.log('Submitted to IndexNow successfully.');
