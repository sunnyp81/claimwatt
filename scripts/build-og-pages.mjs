// Per-page OG image generation via satori + resvg.
// Generates ~250 unique 1200x630 PNG OG images for federal credits, state hubs,
// state×tech, technology hubs, guides, programs, and city overlays.
// Run before `npm run build` to populate public/og/.

import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';

const OUT = resolve('public/og');
mkdirSync(OUT, { recursive: true });

const FEDERAL = (await import('../src/data/federal.ts').catch(() => null))?.FEDERAL;
const STATES = (await import('../src/data/states.ts').catch(() => null))?.STATES;
const TECH = (await import('../src/data/tech.ts').catch(() => null))?.TECH;
const STATE_TECH = (await import('../src/data/state-tech.ts').catch(() => null))?.STATE_TECH;
const GUIDES = (await import('../src/data/guides.ts').catch(() => null))?.GUIDES;
const PROGRAMS = (await import('../src/data/programs.ts').catch(() => null))?.PROGRAMS;
const CITY_TECH = (await import('../src/data/cities.ts').catch(() => null))?.CITY_TECH;

if (!FEDERAL || !STATES || !TECH) {
  console.error('Cannot import data files via top-level await — using a Node loader instead.');
  console.error('This script must be run with the proper TypeScript loader, e.g. `node --loader tsx scripts/build-og-pages.mjs`.');
  console.error('Falling back to a simpler approach: generate from a static manifest emitted by Astro build.');
  process.exit(2);
}

// ============ FONT LOADING ============
console.log('Loading fonts from @fontsource (local)...');

const interRegular = readFileSync(resolve('node_modules/@fontsource/inter/files/inter-latin-400-normal.woff'));
const interBold = readFileSync(resolve('node_modules/@fontsource/inter/files/inter-latin-700-normal.woff'));
const fraunces = readFileSync(resolve('node_modules/@fontsource/fraunces/files/fraunces-latin-600-normal.woff'));

const fonts = [
  { name: 'Inter', data: interRegular, weight: 400, style: 'normal' },
  { name: 'Inter', data: interBold, weight: 700, style: 'normal' },
  { name: 'Fraunces', data: fraunces, weight: 600, style: 'normal' },
];

// ============ TEMPLATE ============
function ogTemplate({ kicker, title, sub, accent = '#15803d' }) {
  return {
    type: 'div',
    props: {
      style: {
        width: 1200,
        height: 630,
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
        padding: 64,
        fontFamily: 'Inter',
        color: '#0b1f17',
        position: 'relative',
      },
      children: [
        {
          type: 'div',
          props: {
            style: { display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    background: accent,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 26,
                    fontWeight: 700,
                  },
                  children: '✓',
                },
              },
              {
                type: 'div',
                props: {
                  style: { fontSize: 28, fontWeight: 600, fontFamily: 'Fraunces' },
                  children: 'ClaimWatt',
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: {
              fontSize: 18,
              textTransform: 'uppercase',
              letterSpacing: 2,
              color: accent,
              fontWeight: 700,
              marginBottom: 16,
            },
            children: kicker,
          },
        },
        {
          type: 'div',
          props: {
            style: {
              fontSize: 60,
              fontWeight: 600,
              fontFamily: 'Fraunces',
              lineHeight: 1.08,
              maxWidth: 1000,
              marginBottom: 24,
            },
            children: title,
          },
        },
        ...(sub
          ? [{
              type: 'div',
              props: {
                style: {
                  fontSize: 28,
                  color: '#15803d',
                  fontWeight: 600,
                  fontFamily: 'Fraunces',
                  marginBottom: 'auto',
                },
                children: sub,
              },
            }]
          : []),
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              bottom: 64,
              left: 64,
              fontSize: 20,
              color: '#0b1f17',
              opacity: 0.55,
            },
            children: 'Federal · State · Utility · IRA — 2026',
          },
        },
      ],
    },
  };
}

async function renderPng(node) {
  const svg = await satori(node, { width: 1200, height: 630, fonts });
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  return resvg.render().asPng();
}

function writePng(path, buf) {
  const full = resolve(OUT, path);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, buf);
}

// ============ GENERATE ============
const manifest = {};
let count = 0;

async function gen(slug, kicker, title, sub) {
  const png = await renderPng(ogTemplate({ kicker, title, sub }));
  writePng(`${slug}.png`, png);
  manifest[slug] = `/og/${slug}.png`;
  count++;
  if (count % 25 === 0) console.log(`  ${count} images generated...`);
}

console.log('Generating per-page OG images...');

// Home + utility pages
await gen('home', 'Independent rebate research', 'Every US energy rebate, stacked', 'Federal · State · Utility · IRA');
await gen('how-it-works', 'How ClaimWatt works', 'The four-layer rebate stack', 'Federal credits + IRA + state + utility');
await gen('federal-index', 'Federal credits hub', 'Federal energy tax credits & IRA rebates 2026', '8 pathways through 2032');
await gen('state-index', 'State directory', 'Energy rebates in all 50 states', 'Federal + state + utility stacks mapped');
await gen('technology-index', 'By technology', 'Solar, heat pump, EV, battery, geothermal', '5 tech hubs · 50 state stacks each');
await gen('guide-index', 'All guides', 'Energy rebate guides 2026', 'Federal credits, stacking, eligibility');
await gen('program-index', 'Program directory', 'US rebate program directory', `${PROGRAMS.length}+ federal, state & utility programs`);
await gen('find-rebates', 'Find your rebates', 'Pick your state and technology', 'See the full incentive stack');
await gen('glossary', 'Glossary', '25C, 25D, 30D, HEEHRA, NEM explained', 'Plain-English definitions');
await gen('about', 'About', 'Independent rebate research', 'Not a government agency. Not an installer.');

// Federal credits
for (const f of FEDERAL) {
  await gen(`federal-${f.slug}`, `Federal ${f.code} · ${f.status}`, `${f.name} (2026)`, f.amount);
}

// Tech hubs
for (const t of TECH) {
  await gen(`technology-${t.slug}`, 'Technology', `${t.name} Rebates 2026`, t.federalAmount);
}

// State hubs
for (const s of STATES) {
  await gen(`state-${s.slug}`, `${s.name} · ${s.topUtility}`, `${s.name} energy rebates 2026`, s.topProgram);
}

// State × tech
for (const st of STATE_TECH) {
  const state = STATES.find((s) => s.slug === st.stateSlug);
  const tech = TECH.find((t) => t.slug === st.techSlug);
  if (!state || !tech) continue;
  await gen(`state-${st.stateSlug}-${st.techSlug}`, `${state.name} · ${tech.shortName}`, `${tech.shortName} rebates in ${state.name}`, st.topProgram);
}

// Guides
for (const g of GUIDES) {
  await gen(`guide-${g.slug}`, g.category, g.title.length > 70 ? g.title.slice(0, 67) + '…' : g.title, '');
}

// Programs
for (const p of PROGRAMS) {
  const state = p.stateSlug ? STATES.find((s) => s.slug === p.stateSlug) : null;
  const kicker = state ? `${state.name} · ${p.type}` : p.type;
  await gen(`program-${p.slug}`, kicker, p.shortName.length > 60 ? p.shortName : p.name, p.amount);
}

// City × tech
for (const ct of CITY_TECH) {
  const state = STATES.find((s) => s.slug === ct.stateSlug);
  const tech = TECH.find((t) => t.slug === ct.techSlug);
  if (!state || !tech) continue;
  await gen(
    `state-${ct.stateSlug}-${ct.citySlug}-${ct.techSlug}`,
    `${ct.cityName}, ${state.name}`,
    `${tech.shortName} rebates in ${ct.cityName}`,
    ct.utility,
  );
}

// Write manifest
writeFileSync(
  resolve('src/data/og-manifest.json'),
  JSON.stringify(manifest, null, 2),
);

console.log(`Done. ${count} OG images generated.`);
console.log(`Manifest written to src/data/og-manifest.json`);
