import type { APIRoute } from 'astro';
import { FEDERAL } from '~/data/federal';
import { TECH } from '~/data/tech';
import { STATES } from '~/data/states';
import { GUIDES } from '~/data/guides';
import { STATE_TECH } from '~/data/state-tech';

export const prerender = true;

const SITE = 'https://claimwatt.com';

export const GET: APIRoute = () => {
  const lines: string[] = [];
  lines.push('# ClaimWatt');
  lines.push('');
  lines.push('> ClaimWatt is independent rebate research mapping every US federal, state, county, city, and utility renewable-energy incentive — solar, heat pump, EV, battery, geothermal — with the actual stacking math for 2026 IRS guidance, IRA programs, and utility rebates.');
  lines.push('');
  lines.push('## About');
  lines.push(`- [How ClaimWatt works](${SITE}/how-it-works/): The four-layer rebate stack and order of operations.`);
  lines.push(`- [About ClaimWatt](${SITE}/about/): Independent rebate research, not a government agency or installer.`);
  lines.push(`- [Affiliate disclosure](${SITE}/disclosure/): Editorial independence and partner relationships.`);
  lines.push(`- [Glossary](${SITE}/glossary/): Plain-English definitions of every credit code, tariff, and term.`);
  lines.push('');
  lines.push('## Federal energy credits and IRA rebates');
  for (const f of FEDERAL) {
    lines.push(`- [${f.code}: ${f.name}](${SITE}/federal/${f.slug}/): ${f.amount}. ${f.amountDetail}`);
  }
  lines.push('');
  lines.push('## Technologies');
  for (const t of TECH) {
    lines.push(`- [${t.name} rebates](${SITE}/technology/${t.slug}/): Federal ${t.federalAmount}. ${t.description.slice(0, 200)}`);
  }
  lines.push('');
  lines.push('## State hubs (50)');
  for (const s of STATES) {
    lines.push(`- [${s.name} energy rebates](${SITE}/state/${s.slug}/): Top program ${s.topProgram}. Top utility ${s.topUtility}.`);
  }
  lines.push('');
  lines.push('## State × technology deep guides');
  for (const st of STATE_TECH) {
    const state = STATES.find((s) => s.slug === st.stateSlug)!;
    const tech = TECH.find((t) => t.slug === st.techSlug)!;
    lines.push(`- [${tech.shortName} rebates in ${state.name}](${SITE}/state/${state.slug}/${tech.slug}/): ${st.totalAvailable}. Top program ${st.topProgram}.`);
  }
  lines.push('');
  lines.push('## Guides');
  for (const g of GUIDES) {
    lines.push(`- [${g.title}](${SITE}/guide/${g.slug}/): ${g.description.slice(0, 200)}`);
  }
  lines.push('');
  lines.push('## Optional');
  lines.push(`- [Find your rebates by state and technology](${SITE}/find-rebates/)`);
  lines.push(`- [Browse rebate program directory](${SITE}/program/)`);
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
