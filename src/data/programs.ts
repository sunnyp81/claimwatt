// Curated US energy rebate program directory — Wave 2.
// 60 high-value federal/state/utility programs across 5 technologies.
// Each entry generates its own /program/[slug]/ page with GovernmentService schema.

export type ProgramType = 'Rebate' | 'Tax credit' | 'Loan' | 'Net metering' | 'Performance payment' | 'Grant' | 'Sales tax exemption' | 'Property tax exemption';

export type Program = {
  slug: string;
  name: string;
  shortName: string;
  authority: string;
  authorityType: 'Federal' | 'State' | 'Utility' | 'Municipal' | 'Cooperative' | 'Nonprofit';
  stateSlug?: string; // omitted for nationwide
  techSlugs: string[]; // ['solar'], ['heat-pump'], ['ev'], etc.
  amount: string;
  type: ProgramType;
  expiry: string;
  url?: string;
  federalLink?: string; // slug of related federal credit
  description: string; // 250-350 words unique
  eligibility: { q: string; a: string }[];
  howToApply: { name: string; text: string }[];
  faq: { q: string; a: string }[];
  stackingNotes: string;
  updatedAt: string;
};

const updatedAt = '2026-01-15';

export const PROGRAMS: Program[] = [
  // ============ CALIFORNIA (12) ============
  {
    slug: 'sgip-equity-resiliency',
    name: 'SGIP Equity Resiliency Battery Rebate (California)',
    shortName: 'SGIP Equity Resiliency',
    authority: 'California Public Utilities Commission',
    authorityType: 'State',
    stateSlug: 'california',
    techSlugs: ['battery'],
    amount: 'Up to $1,000 per kWh of installed battery capacity',
    type: 'Rebate',
    expiry: 'Rolling reservation block — verify current step',
    url: 'https://www.selfgenca.com/',
    federalLink: '25d-residential-clean-energy',
    description:
      'The Self-Generation Incentive Program Equity Resiliency tier delivers California\'s most generous home battery storage rebate — up to $1,000 per kWh installed for residents in Public Safety Power Shutoff zones, medical baseline customers, and households living in Tier 2 or Tier 3 fire-threat districts under CalFire FHSZ. A typical Tesla Powerwall 3 installation (13.5 kWh usable) qualifies for up to $13,500 — frequently covering the entire installed cost. Equity Resiliency was created in response to the 2017–2019 wildfire seasons and the resulting PSPS events, recognizing that battery backup is a public-safety upgrade, not just a clean-energy upgrade. Funding is administered by PG&E, SCE, and SDG&E in their respective service territories under uniform CPUC rules. Reservations open in step blocks — when a block depletes, the per-kWh rate steps down and a new block opens. The reservation expires 12 months after approval, requiring install completion within that window.',
    eligibility: [
      { q: 'Who qualifies for Equity Resiliency?', a: 'Three pathways: (1) PG&E or SCE medical baseline allowance customers, (2) residents in Tier 2 or Tier 3 fire-threat districts per CalFire Fire Hazard Severity Zone maps, (3) customers in PSPS zones who experienced 2+ outages of 24+ hours in the prior 12 months.' },
      { q: 'Income limits?', a: 'No specific income cap on Equity Resiliency, but the standard Equity Budget tier (which pays $850/kWh) requires ≤80% Area Median Income or DAC (Disadvantaged Community) residency or CARE/FERA enrollment.' },
      { q: 'Standalone vs. paired with solar?', a: 'Both qualify. SGIP does not require pairing with new solar. The federal 25D credit also applies to standalone batteries 3 kWh or larger since tax year 2023.' },
    ],
    howToApply: [
      { name: 'Confirm tier eligibility', text: 'Verify medical baseline status, FHSZ zone, or PSPS outage history. Documentation: PG&E/SCE/SDG&E medical baseline letter, CalFire FHSZ map screenshot, or PSPS outage record from utility account.' },
      { name: 'Choose a participating installer', text: 'Use the SGIP Trade Professional Directory at selfgenca.com to find an enrolled installer. Most large California solar installers participate.' },
      { name: 'Reserve the rebate at contract', text: 'Installer files SGIP reservation paperwork with the program administrator (PG&E, SCE, or SDG&E depending on territory). Reservation locks in the per-kWh rate at the time of submission.' },
      { name: 'Install within 12 months', text: 'Reservations expire 12 months after approval. Permit, install, and pass utility interconnection inspection within the window.' },
      { name: 'Receive rebate post-commissioning', text: 'After utility interconnection sign-off, the installer or homeowner submits the Incentive Claim Form. Payment typically issues within 60–90 days.' },
    ],
    faq: [
      { q: 'How much does Equity Resiliency pay for a Tesla Powerwall 3?', a: 'Powerwall 3 has 13.5 kWh of usable capacity. At $1,000/kWh, the rebate is $13,500 — frequently exceeding installed cost. SGIP caps at install cost (no profit), so effective net is often $0 out of pocket for qualifying customers.' },
      { q: 'Does this stack with the federal 25D credit?', a: 'Yes. SGIP reduces the federal cost basis. Federal 25D = 30% × (cost − SGIP rebate). For Equity Resiliency customers where SGIP exceeds cost, the federal credit reduces to zero on basis but the homeowner still pockets the no-out-of-pocket benefit.' },
      { q: 'Can I qualify if I already have solar?', a: 'Yes. Adding battery to existing solar qualifies if you meet the Equity Resiliency criteria (medical baseline, FHSZ, or PSPS).' },
      { q: 'How is "fire-threat district" verified?', a: 'CalFire publishes Fire Hazard Severity Zone maps at fhsz.fire.ca.gov. Tier 2 (High) and Tier 3 (Very High) qualify for Equity Resiliency. Save a screenshot with date stamp.' },
      { q: 'What about the standard SGIP General Market tier?', a: 'General Market pays $150/kWh — much lower. Most homeowners not qualifying for Equity tiers receive the General Market rebate, which still pairs well with the federal 25D 30% credit.' },
    ],
    stackingNotes:
      'Stacks with federal 25D (30% uncapped) and TOU rate plans (PG&E EV2-A, SCE TOU-D-PRIME). Cannot stack with the General Market or Equity Budget tiers — pick the highest-eligible tier. Powerwall VPP enrollment (Tesla Virtual Power Plant) can pair with SGIP and adds ~$200–$600/year ongoing revenue.',
    updatedAt,
  },
  {
    slug: 'sgip-general-market',
    name: 'SGIP General Market Battery Rebate (California)',
    shortName: 'SGIP General Market',
    authority: 'California Public Utilities Commission',
    authorityType: 'State',
    stateSlug: 'california',
    techSlugs: ['battery'],
    amount: '$150 per kWh of installed battery capacity (current step block)',
    type: 'Rebate',
    expiry: 'Rolling reservation block — step-down by allocation',
    url: 'https://www.selfgenca.com/',
    federalLink: '25d-residential-clean-energy',
    description:
      'The Self-Generation Incentive Program General Market tier is California\'s open-eligibility battery storage rebate — available to all residential customers of PG&E, SCE, SDG&E, and SoCalGas service territories regardless of income or location. The General Market tier currently pays $150 per kWh of installed capacity. A 13.5 kWh Powerwall 3 installation receives roughly $2,025. The General Market rebate is administered through a step-down reservation block structure: each block holds a fixed funding allocation, and when depleted, the next block opens at a lower per-kWh rate. The Equity Budget tier ($850/kWh) and Equity Resiliency tier ($1,000/kWh) cover income-qualified or fire-zone customers and are administered separately.',
    eligibility: [
      { q: 'Who qualifies for General Market?', a: 'Any residential customer of PG&E, SCE, SDG&E, or SoCalGas service territory. No income limit. No location restriction within those territories.' },
      { q: 'Battery size requirement?', a: 'Minimum 0.3 kW power and capable of providing capacity. Federal 25D requires 3 kWh capacity but SGIP General Market has lower thresholds.' },
      { q: 'Equipment requirements?', a: 'Battery must be on the SGIP-approved equipment list with verified Underwriters Laboratories certification (UL 9540).' },
    ],
    howToApply: [
      { name: 'Confirm utility territory', text: 'PG&E (most of northern + central CA), SCE (Los Angeles county and most of southern CA), SDG&E (San Diego and southern Orange County), SoCalGas (gas-only — gas customers can also apply if served by an SGIP-eligible electric utility for the battery interconnection).' },
      { name: 'Find SGIP-enrolled installer', text: 'Use the SGIP Trade Professional Directory. Most large California installers participate.' },
      { name: 'Reserve at contract', text: 'Installer submits SGIP reservation through the program administrator portal. Reservation locks the current step-block per-kWh rate.' },
      { name: 'Install within reservation window', text: '12 months from reservation approval to commissioning.' },
      { name: 'Submit incentive claim post-commissioning', text: 'Utility interconnection sign-off triggers the claim form submission. Payment in 60–90 days.' },
    ],
    faq: [
      { q: 'How much does a Powerwall 3 net from SGIP General Market?', a: '13.5 kWh × $150 = $2,025. Plus federal 25D 30% credit. On a $13,000 install, that is $2,025 SGIP + $3,295 federal = $5,320 total incentives.' },
      { q: 'Why is General Market so much lower than Equity tier?', a: 'CPUC structured SGIP to prioritize equity outcomes — lower-income, DAC, and fire-zone customers receive 5–7x higher per-kWh rebates than market-rate customers.' },
      { q: 'Can I get General Market if I qualify for Equity Resiliency?', a: 'You should choose the highest tier you qualify for (Equity Resiliency > Equity Budget > General Market). Reservation can only be in one tier per project.' },
      { q: 'When does General Market step-down?', a: 'Step-downs are CPUC-set and tied to allocation depletion. As of early 2026 the rate is $150/kWh; verify current step at selfgenca.com.' },
    ],
    stackingNotes:
      'Stacks with federal 25D (30% uncapped, batteries 3+ kWh) and Tesla Powerwall VPP / OhmConnect / similar grid-services programs. Cannot stack with Equity Budget or Equity Resiliency tiers. Combines well with TOU rate plans (PG&E EV2-A) for solar+battery+EV households.',
    updatedAt,
  },
  {
    slug: 'tech-clean-california',
    name: 'TECH Clean California Heat Pump Incentive',
    shortName: 'TECH Clean California',
    authority: 'CPUC / TECH Initiative',
    authorityType: 'State',
    stateSlug: 'california',
    techSlugs: ['heat-pump'],
    amount: '$1,000–$3,000 for heat pump space heating; $1,000–$2,500 for HPWH',
    type: 'Rebate',
    expiry: 'Funded through 2026 with annual block resets',
    url: 'https://techcleanca.com/',
    federalLink: '25c-energy-efficient-home-improvement',
    description:
      'TECH Clean California is the statewide heat pump incentive program managed by the Technology Energy Clean Home Initiative under CPUC oversight. The program pays $1,000 to $3,000 per qualifying heat pump space-heating installation and $1,000 to $2,500 per heat pump water heater. Funding flows through participating contractors who apply the rebate as a point-of-sale price reduction at install. TECH partners with PG&E, SCE, SDG&E, and SCG service territories and is the primary funded vehicle for accelerating cold-climate heat pump adoption in California\'s coastal and Central Valley regions where natural gas displacement has the largest decarbonization impact.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Single-family or multifamily residential customers of PG&E, SCE, SDG&E, or SCG. No income limit on base TECH incentive.' },
      { q: 'Equipment requirement?', a: 'Heat pump must be on the TECH-approved equipment list, contractor must be enrolled, and equipment must meet minimum efficiency standards (CEE Tier 2+ for ASHP).' },
      { q: 'Existing system replacement vs. new install?', a: 'Both qualify. Replacement of an existing fossil-fuel system (gas furnace, propane, oil, electric resistance) typically receives the higher tier. New construction qualifies at the base tier.' },
    ],
    howToApply: [
      { name: 'Find TECH-enrolled contractor', text: 'Use the TECH contractor directory at techcleanca.com. Filter by zip code and equipment type.' },
      { name: 'Get a contractor quote', text: 'Contractor will identify TECH-eligible equipment and apply the rebate as a price reduction in the quote. Verify the rebate amount appears as a line-item discount.' },
      { name: 'Confirm reservation', text: 'Contractor reserves the rebate against the current TECH allocation block. Reservation expires after install.' },
      { name: 'Complete installation', text: 'Standard heat pump install — typically 1–3 days for ASHP, 1 day for HPWH. Permit and inspection per local jurisdiction.' },
      { name: 'Discount applied at invoice', text: 'TECH rebate appears as line-item discount on the contractor invoice. No homeowner paperwork beyond signing the disclosure form acknowledging TECH funding.' },
    ],
    faq: [
      { q: 'TECH vs HEEHRA — which goes first?', a: 'TECH is for all California residents (no income cap). HEEHRA is for income-qualified (≤150% AMI) and pays much more (up to $8,000 for heat pump). Choose HEEHRA if eligible. TECH stacks with HEEHRA in some cases — confirm with contractor.' },
      { q: 'TECH vs utility-specific rebate?', a: 'PG&E, SCE, and SDG&E run their own heat pump rebates ($300–$1,500 typical) that often stack with TECH. Bay Area BayREN Home+ also stacks (additional $1,000–$5,000).' },
      { q: 'Does TECH apply to dual-fuel hybrid systems?', a: 'Yes — but at the lower partial-displacement tier. Whole-home full-electric installs receive the higher tier.' },
      { q: 'How do I find an HVAC company enrolled in TECH?', a: 'Search the contractor directory at techcleanca.com or ask any major California HVAC contractor — most are enrolled.' },
      { q: 'Are induction stoves covered?', a: 'No — TECH is heat pump-specific (space heat + water heat). HEEHRA covers induction at $840 for income-qualified.' },
    ],
    stackingNotes:
      'Stacks with federal 25C ($2,000 sub-cap), HEEHRA (income-qualified, do not double-claim same item), utility heat pump rebates (PG&E $1,000, SCE $1,200, SoCalGas $1,000), and BayREN Home+ ($1,000–$5,000). The full California stack on a $14,000 ASHP install can deliver $4,000–$8,000+ in incentives.',
    updatedAt,
  },
  {
    slug: 'pge-ev2a-rate-plan',
    name: 'PG&E EV2-A Time-of-Use Rate Plan',
    shortName: 'PG&E EV2-A',
    authority: 'PG&E',
    authorityType: 'Utility',
    stateSlug: 'california',
    techSlugs: ['ev', 'battery'],
    amount: 'Reduced overnight charging rate (~$0.27/kWh midnight–3pm vs $0.50+/kWh standard)',
    type: 'Net metering',
    expiry: 'Tariff active — subject to CPUC tariff filings',
    url: 'https://www.pge.com/en_US/residential/rate-plans/rate-plan-options/electric-vehicle-base-plan/electric-vehicle-base-plan.page',
    federalLink: '30d-clean-vehicle-credit',
    description:
      'PG&E EV2-A is a time-of-use electricity rate plan designed for households with electric vehicles, batteries, or heat pumps. The plan offers significantly reduced rates during off-peak hours (midnight–3pm) at approximately $0.27/kWh vs. standard Tier 2 rates exceeding $0.50/kWh. For an EV driver charging 9 kWh nightly, EV2-A saves roughly $700/year vs. the default tiered residential rate. The plan also supports solar export accounting under NEM 2.0 (grandfathered for 20 years from interconnection) or NEM 3.0 (current tariff). EV2-A is automatically the rate plan most installers recommend for new solar+battery+EV households in PG&E service territory.',
    eligibility: [
      { q: 'Who qualifies for EV2-A?', a: 'Any PG&E residential electric customer. No income cap. No EV ownership requirement (despite the name) — the rate plan is open to any household, though optimal value is for EV/battery/heat-pump owners with shiftable loads.' },
      { q: 'How do I switch to EV2-A?', a: 'Log into your PG&E account, go to "Manage Your Rate Plan," select EV2-A. The change takes effect on your next billing cycle. You can switch back if it does not save you money.' },
    ],
    howToApply: [
      { name: 'Audit your usage pattern', text: 'PG&E provides a rate plan comparison tool that simulates your monthly bill under each plan based on your last 12 months of usage. Heavy overnight + midday use favors EV2-A.' },
      { name: 'Switch via online account', text: 'No paperwork — switch happens through the online customer portal. Effective on next bill cycle.' },
      { name: 'Pair with smart charging', text: 'Configure your EV charger to charge between 12am–3pm only (off-peak window). Most EVs and chargers (Tesla Wall Connector, JuiceBox, ChargePoint) support time-based scheduling.' },
    ],
    faq: [
      { q: 'EV2-A vs E-TOU-C?', a: 'EV2-A has lower off-peak rates and a wider off-peak window than E-TOU-C. EV2-A wins for households with EV charging or battery storage that can time-shift loads. E-TOU-C is for non-EV households with smaller load shifting potential.' },
      { q: 'Does EV2-A affect my solar net metering?', a: 'No. NEM 2.0 (grandfathered) and NEM 3.0 (current) export rates apply regardless of the rate plan you choose. EV2-A affects only what you pay for grid imports.' },
      { q: 'Annual savings for a typical household?', a: '$300–$1,200 depending on EV mileage, battery capacity, and load-shift discipline. Heavy overnight EV charging households see $700–$1,200.' },
      { q: 'Can I switch back if it does not save me money?', a: 'Yes. PG&E allows rate plan changes at any time. The first 12 months also include a "rate plan protection" guarantee — if EV2-A costs you more than the default plan, you can switch back and PG&E refunds the difference.' },
    ],
    stackingNotes:
      'Compounds savings on top of federal 30D EV credit ($7,500 POS), 30C charger credit (eligible census tract), Tesla VPP revenue, and SGIP battery rebate. EV2-A is essentially free money for any PG&E customer with shiftable loads.',
    updatedAt,
  },
  {
    slug: 'cvap-clean-vehicle-assistance',
    name: 'Clean Vehicle Assistance Program (CVAP)',
    shortName: 'CVAP',
    authority: 'California Air Resources Board',
    authorityType: 'State',
    stateSlug: 'california',
    techSlugs: ['ev'],
    amount: 'Up to $7,500 grant + $2,000 charging credit',
    type: 'Grant',
    expiry: 'Annual funding cycle — confirm current allocation',
    url: 'https://cleanvehiclegrants.org/',
    federalLink: '30d-clean-vehicle-credit',
    description:
      'Clean Vehicle Assistance Program (CVAP) is California\'s income-qualified successor to the broader Clean Vehicle Rebate Project (CVRP), which CARB paused in November 2023 to redirect funds toward equity outcomes. CVAP delivers up to $7,500 grant for new or used EV purchases plus an additional $2,000 charging credit covering home charger installation. The grant is income-qualified at ≤300% Federal Poverty Level — roughly $93,600 for a family of four in 2026. CVAP stacks with the federal 30D credit, allowing total off-the-vehicle savings of up to $17,000 for income-qualified buyers. Available statewide through the Beneficial State Foundation as program administrator.',
    eligibility: [
      { q: 'Income limit?', a: 'Household income at or below 300% Federal Poverty Level. As of 2026, approximately: 1-person $43,740 / 2-person $59,160 / 3-person $74,580 / 4-person $93,600.' },
      { q: 'Vehicle eligibility?', a: 'New or used EV/PHEV/FCEV from a CVAP-approved dealer. Vehicle must be on the CARB-approved list. New vehicle MSRP cap $45,000; used vehicle sale price cap $30,000.' },
      { q: 'How often can I claim CVAP?', a: 'Once every three years per household.' },
    ],
    howToApply: [
      { name: 'Pre-qualify online', text: 'Visit cleanvehiclegrants.org and submit eligibility documentation (tax return, household composition, residency). Pre-qualification valid for 60 days.' },
      { name: 'Choose a participating dealer', text: 'CVAP-approved dealers list on cleanvehiclegrants.org. The grant applies as a credit at point of sale.' },
      { name: 'Complete vehicle purchase', text: 'Dealer applies the grant at signing. Charger credit is paid separately upon proof of charger installation.' },
      { name: 'Submit charger receipt for $2,000 credit', text: 'After charger install, submit invoice and photos to CVAP for the $2,000 charging credit reimbursement.' },
      { name: 'Maintain CVAP for 30 months', text: 'Vehicle must remain registered to the recipient at the original residence for 30 months. Early sale or transfer triggers grant repayment.' },
    ],
    faq: [
      { q: 'CVAP vs CVRP — what changed?', a: 'CVRP closed November 2023. CVAP replaces it with tighter income limits (300% FPL vs. CVRP\'s no income limit until 2024) and broader benefits ($7,500 + $2,000 charger vs. CVRP\'s $7,500 max).' },
      { q: 'Does CVAP stack with federal 30D?', a: 'Yes. CVAP grant reduces the cost basis but federal 30D eligibility is independent. Income-qualified buyers stack both.' },
      { q: 'Used EV via CVAP — how does it differ from federal 25E?', a: 'Federal 25E pays up to $4,000 (30% of price up to $25,000 vehicle). CVAP pays up to $7,500 on vehicles up to $30,000. CVAP wins for income-qualified used EV buyers.' },
      { q: 'How long is the application backlog?', a: '4–8 weeks typical processing. Pre-qualify before vehicle search to avoid pricing changes during wait.' },
    ],
    stackingNotes:
      'Stacks with federal 30D ($7,500), federal 25E ($4,000 used), federal 30C charger ($1,000 if eligible census tract), and PG&E/SCE/SDG&E EV charger rebates. Combined CVAP + federal credits + utility rebates can deliver $15,000–$17,000 off a new EV for income-qualified buyers.',
    updatedAt,
  },
  // ============ NEW YORK (10) ============
  {
    slug: 'nyserda-clean-heat-air-source',
    name: 'NYSERDA Clean Heat — Air Source Heat Pump',
    shortName: 'NYSERDA Clean Heat ASHP',
    authority: 'NYSERDA',
    authorityType: 'State',
    stateSlug: 'new-york',
    techSlugs: ['heat-pump'],
    amount: '$1,000–$2,000 per ton of capacity',
    type: 'Rebate',
    expiry: 'Funded through 2030',
    url: 'https://cleanheatconnects.com/',
    federalLink: '25c-energy-efficient-home-improvement',
    description:
      'NYSERDA Clean Heat is New York\'s flagship statewide heat pump rebate program — among the most generous in the United States. The air-source heat pump (ASHP) track pays $1,000 to $2,000 per ton of installed capacity (1 ton = 12,000 BTU/hr cooling), with higher rates in Con Edison territory and lower-income tracts. The program is administered jointly by NYSERDA and the major investor-owned utilities (Con Edison, National Grid, NYSEG, RG&E, Central Hudson, Orange & Rockland). Ground-source heat pumps qualify under a separate, higher-paying track. Equipment must be on the NEEP Cold Climate ASHP list to qualify for the full rebate — a meaningful constraint in upstate New York where deep-cold performance matters.',
    eligibility: [
      { q: 'Who qualifies?', a: 'New York residential customers of participating utilities. No income cap on base Clean Heat rate. Affordable Multifamily and EmPower NY tracks add income-qualified bonuses.' },
      { q: 'Equipment requirement?', a: 'Must be on the NEEP Cold Climate ASHP list with HSPF2 ratings meeting NYSERDA thresholds. Most major brands (Mitsubishi Hyper-Heat, LG, Daikin Aurora, Trane) have qualifying models.' },
      { q: 'Whole-home vs partial?', a: 'Whole-home installs (full displacement of fossil fuel heating) receive higher per-ton rates than partial-displacement (heat pump as supplement to existing furnace).' },
    ],
    howToApply: [
      { name: 'Find an enrolled contractor', text: 'Use the contractor directory at cleanheatconnects.com. NYSERDA-enrolled contractors handle the rebate paperwork directly.' },
      { name: 'Get a quote with rebate applied', text: 'Contractor identifies eligible equipment and applies the per-ton rebate as a price reduction in the quote.' },
      { name: 'Reserve rebate at contract', text: 'Contractor submits Clean Heat reservation through the utility administrator portal. Reservation locks the current incentive level.' },
      { name: 'Install', text: 'Standard ASHP installation 1–3 days. Permit and inspection per local jurisdiction.' },
      { name: 'Discount applied at invoice', text: 'Rebate appears as a line-item discount on the contractor invoice. The utility pays the contractor directly.' },
    ],
    faq: [
      { q: 'Does Clean Heat stack with HEEHRA?', a: 'Yes — Clean Heat reduces cost; HEEHRA may apply to income-qualified households on top. They target slightly different cost components.' },
      { q: 'How much does a 3-ton system net in Buffalo?', a: 'NYSERDA Clean Heat ~$4,500. Federal 25C 30% = $2,000 cap. On a $14,000 install, that is $6,500 in incentives.' },
      { q: 'Cold-climate equipment requirement — strict?', a: 'Yes. Equipment must be on the NEEP Cold Climate ASHP list. Otherwise rebate drops to lower tier or zero. Confirm equipment model with contractor before contract.' },
      { q: 'What about Con Edison vs National Grid?', a: 'Each utility administers Clean Heat with slightly different per-ton rates. Con Edison territory typically pays the most. Statewide minimum applies.' },
    ],
    stackingNotes:
      'Stacks with federal 25C ($2,000 sub-cap), NY State Tax Credit (does not apply to heat pumps directly but stacks with related solar), and HEEHRA for income-qualified. Total stack on $14,000 ASHP can reach $6,500–$14,500 (with HEEHRA).',
    updatedAt,
  },
  {
    slug: 'nyserda-clean-heat-ground-source',
    name: 'NYSERDA Clean Heat — Ground Source Heat Pump',
    shortName: 'NYSERDA Clean Heat GSHP',
    authority: 'NYSERDA',
    authorityType: 'State',
    stateSlug: 'new-york',
    techSlugs: ['geothermal'],
    amount: '$1,500 per ton + $3,000 base = ~$7,500 for 3-ton system',
    type: 'Rebate',
    expiry: 'Funded through 2030',
    url: 'https://cleanheatconnects.com/',
    federalLink: '25d-residential-clean-energy',
    description:
      'The Ground Source Heat Pump (GSHP) track of NYSERDA Clean Heat is the most generous geothermal rebate in the country, paying $1,500 per ton of capacity plus a $3,000 base incentive. A typical 3-ton residential installation receives $7,500 in upfront rebate — meaningful given installed costs of $25,000–$45,000 for ground-source systems including the ground loop. Combined with the federal 25D credit (30% uncapped), New York geothermal installs frequently see net cost in the $14,000–$22,000 range with payback of 8–12 years considering the 50–70% operating savings vs. propane/oil heat.',
    eligibility: [
      { q: 'Who qualifies?', a: 'New York residential customers of participating utilities (Con Edison, National Grid, NYSEG, RG&E, Central Hudson, O&R).' },
      { q: 'Equipment certification?', a: 'ENERGY STAR Geothermal certification required. Closed-loop, open-loop, and pond/lake systems all qualify.' },
      { q: 'Installer certification?', a: 'IGSHPA (International Ground Source Heat Pump Association) certified installer required for full rebate.' },
    ],
    howToApply: [
      { name: 'Find IGSHPA-certified contractor', text: 'Contractor directory at cleanheatconnects.com. Filter for ground-source specialists.' },
      { name: 'Site evaluation', text: 'Geothermal requires site evaluation for ground loop type (vertical bore, horizontal trench, pond/lake). Adds 1–2 weeks to project timeline.' },
      { name: 'Quote with rebate applied', text: 'Contractor applies $1,500/ton + $3,000 base as upfront price reduction.' },
      { name: 'Reserve and install', text: 'Reservation through utility portal. Installation 5–14 days depending on ground loop type.' },
      { name: 'Discount applied at commissioning', text: 'Rebate paid to contractor upon successful interconnection and commissioning.' },
    ],
    faq: [
      { q: 'GSHP vs ASHP — which qualifies for what?', a: 'Air-source heat pumps qualify under federal 25C ($2,000 cap) and NYSERDA ASHP track ($1,000–$2,000/ton). Ground-source qualifies under federal 25D (uncapped) and NYSERDA GSHP track ($1,500/ton + $3,000 base).' },
      { q: 'Why is GSHP more expensive but better-rebated?', a: 'GSHP requires ground loop installation ($15,000–$30,000) but achieves 50–70% operating savings vs. propane/oil. Higher COP (3.5–4.5 vs. ASHP\'s 2.5–3.5) means lower lifetime cost. NYSERDA structures rebates to bridge the higher upfront cost.' },
      { q: 'Vertical vs horizontal ground loop?', a: 'Vertical bore (200–400 ft) — most common, lot-size friendly, expensive. Horizontal trench (4–6 ft deep, large area) — cheaper but needs lot space. Pond/lake — cheapest if applicable. NYSERDA pays the same per-ton rebate regardless.' },
      { q: 'NYC vs upstate — is geothermal viable in NYC?', a: 'Vertical bore makes NYC geothermal possible on small lots. NYC Healthy Homes Incentive can add up to $5,000 on top of NYSERDA Clean Heat for income-qualified.' },
    ],
    stackingNotes:
      'Stacks with federal 25D (30% uncapped — best for geothermal), NY State Solar Tax Credit (does not apply but proves NY tax credits stack across IRS sections), and NYC Healthy Homes if applicable. A $30,000 GSHP install in Brooklyn can net $7,500 NYSERDA + $6,750 federal = $14,250 incentives.',
    updatedAt,
  },
  {
    slug: 'ny-sun-mw-block',
    name: 'NY-Sun MW Block Solar Incentive',
    shortName: 'NY-Sun MW Block',
    authority: 'NYSERDA',
    authorityType: 'State',
    stateSlug: 'new-york',
    techSlugs: ['solar'],
    amount: '$0.20–$0.40 per watt upfront (varies by zone and remaining block)',
    type: 'Rebate',
    expiry: 'Annual MW Block step-down',
    url: 'https://www.nyserda.ny.gov/All-Programs/NY-Sun',
    federalLink: '25d-residential-clean-energy',
    description:
      'NY-Sun MW Block is the New York State Energy Research and Development Authority\'s flagship residential solar incentive. The program pays an upfront rebate of $0.20 to $0.40 per watt of installed solar capacity, with rates varying by geographic zone (Con Ed has highest rates, Long Island next, Upstate lower) and the current MW Block step. Each block holds a fixed allocation of MW capacity at the current rate; when depleted, the next block opens at a lower rate. The Affordable Solar tier pays $0.80 to $1.00 per watt for income-qualified households (≤80% Area Median Income). NY-Sun stacks with the federal 25D credit and the New York State Solar Tax Credit (25% capped at $5,000) for one of the strongest residential solar stacks in the United States.',
    eligibility: [
      { q: 'Who qualifies?', a: 'New York residential customers of participating utilities (Con Edison, National Grid, NYSEG, RG&E, Central Hudson, O&R, PSEG-LI).' },
      { q: 'System size limits?', a: 'Up to 25 kW for residential. Most homes install 6–10 kW.' },
      { q: 'Affordable Solar tier?', a: '≤80% Area Median Income or DAC residency or qualifying program participation (CARE-equivalent).' },
    ],
    howToApply: [
      { name: 'Choose NYSERDA-enrolled installer', text: 'Use the NYSERDA installer directory at nyserda.ny.gov/All-Programs/NY-Sun. Most large NY solar installers are enrolled.' },
      { name: 'Get a quote with rebate applied', text: 'Installer reserves the rebate against the current MW Block at contract signing. Rebate appears as upfront price reduction.' },
      { name: 'Reservation valid 12 months', text: 'Permit, install, and pass utility interconnection within the reservation window.' },
      { name: 'Discount applied at commissioning', text: 'Rebate paid to installer upon successful interconnection. Installer credits homeowner.' },
    ],
    faq: [
      { q: 'How does NY-Sun stack with the NY State Solar Tax Credit?', a: 'NY-Sun reduces cost basis; NY State credit is 25% of pre-rebate cost up to $5,000 cap; federal 25D is 30% of post-rebate basis. On a $20,000 system: NY-Sun $1,400 → basis $18,600. NY State 25% × $20,000 capped at $5,000. Federal 30% × $18,600 = $5,580. Total = $11,980 incentives.' },
      { q: 'How does ConEd zone differ from upstate?', a: 'ConEd zone (NYC) typically pays $0.30–$0.40/W. Long Island PSEG-LI pays slightly less. Upstate utilities (NYSEG, RG&E) pay $0.20–$0.30/W. Block step-down is uniform statewide.' },
      { q: 'Block step-down — how often?', a: 'When a block depletes, the next block opens at a lower rate. Step-downs occur every 2–6 months in heavy-demand zones. Reservation locks the rate at the time of submission.' },
      { q: 'NY-Sun vs Affordable Solar?', a: 'Affordable Solar pays roughly 2x the standard NY-Sun rate ($0.80–$1.00/W). Income-qualified eligibility required. Cannot claim both — choose the higher.' },
    ],
    stackingNotes:
      'Stacks with federal 25D (30%, uncapped, with carryforward), NY State Solar Tax Credit (25%, capped at $5,000, with 5-year carryforward), property tax exemption RPTL §487 (15-year, opt-in by jurisdiction), NYC Real Property Tax Abatement (up to 30% over 4 years for NYC homes), and NY sales tax exemption (100% state + local). The full NY stack regularly delivers 50%+ system cost coverage.',
    updatedAt,
  },
  {
    slug: 'ny-state-solar-tax-credit',
    name: 'New York State Solar Energy System Equipment Credit',
    shortName: 'NY State Solar Credit',
    authority: 'New York Department of Taxation and Finance',
    authorityType: 'State',
    stateSlug: 'new-york',
    techSlugs: ['solar'],
    amount: '25% of system cost up to $5,000',
    type: 'Tax credit',
    expiry: 'Through 2032',
    url: 'https://www.tax.ny.gov/pit/credits/solar_energy_system_equipment_credit.htm',
    federalLink: '25d-residential-clean-energy',
    description:
      'The New York State Solar Energy System Equipment Credit is a 25% state tax credit on residential solar PV system costs, capped at $5,000 per residence. Filed via Form IT-255 with your New York state tax return. Carryforward up to 5 years if the credit exceeds your state tax liability. Unlike the federal 25D credit, the state credit is calculated on the pre-rebate full system cost (not reduced by NY-Sun upfront rebate), making it independently valuable. Combined with the federal 25D and NY-Sun upfront, New York homeowners often see 55%+ stacked solar incentive coverage.',
    eligibility: [
      { q: 'Who qualifies?', a: 'New York State resident homeowner. Principal residence or vacation home. Renters and pure rental properties do not qualify.' },
      { q: 'System ownership requirement?', a: 'You must own the system outright (cash or solar loan). Leased solar and PPA do not qualify — leasing company captures the credit instead.' },
      { q: 'Cap details?', a: '25% of cost up to $5,000 — meaning the cap applies at $20,000 system cost. Larger systems do not increase the credit beyond $5,000.' },
    ],
    howToApply: [
      { name: 'Confirm eligibility and ownership', text: 'NY State resident, owner of system, NY State principal or vacation residence.' },
      { name: 'Document total cost', text: 'Pre-rebate cost — including equipment, install labor, permits, interconnection. NY-Sun rebates do NOT reduce the basis for state credit calculation (unlike federal).' },
      { name: 'Calculate 25%', text: '25% of total cost, capped at $5,000.' },
      { name: 'File Form IT-255', text: 'Attach to your NY State income tax return (Form IT-201).' },
      { name: 'Carry forward unused credit', text: 'If the credit exceeds your NY State tax liability, carry forward up to 5 years.' },
    ],
    faq: [
      { q: 'Does the state credit reduce the federal credit?', a: 'No. State tax credits do not reduce federal cost basis. State and federal credits operate independently.' },
      { q: 'Does NY-Sun reduce the state credit basis?', a: 'No — the NY State Solar Credit is calculated on full pre-rebate system cost. This is unusual; most state credits use post-rebate basis.' },
      { q: '5-year carryforward — how does it work?', a: 'Form IT-255 calculates carryforward annually. Excess credit rolls to next NY tax year for up to 5 years. If unused after 5 years, it is forfeited.' },
      { q: 'Can I claim 25% on a $30,000 system?', a: 'Capped at $5,000. 25% × $30,000 = $7,500, but the cap reduces this to $5,000. Larger systems get the same maximum credit.' },
    ],
    stackingNotes:
      'Stacks with federal 25D (30% on post-NY-Sun basis), NY-Sun MW Block (upfront rebate), NYC Real Property Tax Abatement (NYC only — up to 30% over 4 years), property tax exemption RPTL §487, and sales tax exemption. The NY State Solar Credit is independent of all rebates — the 25% applies to full cost.',
    updatedAt,
  },
  {
    slug: 'nyc-segs-property-tax-abatement',
    name: 'NYC SEGS Property Tax Abatement',
    shortName: 'NYC SEGS Abatement',
    authority: 'NYC Department of Buildings',
    authorityType: 'Municipal',
    stateSlug: 'new-york',
    techSlugs: ['solar'],
    amount: 'Up to 30% of project cost over 4 years',
    type: 'Property tax exemption',
    expiry: 'Active for installations through 2024 — verify renewal',
    url: 'https://www.nyc.gov/site/finance/property/property-tax-incentives.page',
    federalLink: '25d-residential-clean-energy',
    description:
      'The Solar Electric Generating System Property Tax Abatement (SEGS) reduces NYC property tax for residential and commercial solar installations by up to 30% of total project cost, spread over 4 years (7.5% annually). The application must be submitted before installation begins — retrofitting application post-install is not allowed. Combined with NY-Sun upfront rebate, federal 25D, and NY State Solar Tax Credit, NYC SEGS makes New York City one of the strongest solar markets in the US for absolute incentive value despite the city\'s relatively modest solar resource.',
    eligibility: [
      { q: 'Who qualifies?', a: 'NYC residential and commercial property owners. 1–4 family residential is the primary track for homeowners.' },
      { q: 'Application timing?', a: 'Must apply BEFORE installation begins. Post-install retrofitting is not allowed.' },
      { q: 'How is the credit applied?', a: 'Reduces NYC property tax bill by 7.5% of project cost annually for 4 years (30% total).' },
    ],
    howToApply: [
      { name: 'Pre-install application', text: 'File Form ABT-PROP with NYC Department of Buildings before installation begins.' },
      { name: 'Submit project documentation', text: 'Include contractor estimate, system specifications, and proposed install date.' },
      { name: 'Receive approval', text: 'NYC DOB approves the abatement and notifies the Department of Finance.' },
      { name: 'Install per approved plan', text: 'Standard solar installation. Permit and inspection per NYC.' },
      { name: 'Abatement applied to property tax', text: 'Annual 7.5% reduction applies to your NYC property tax bill for 4 years post-commissioning.' },
    ],
    faq: [
      { q: 'NYC SEGS vs RPTL §487?', a: 'RPTL §487 is the 15-year property tax exemption on the added home value (statewide, opt-in by jurisdiction). NYC SEGS is the 4-year property tax abatement on project cost (NYC only). Both apply simultaneously to NYC solar installs.' },
      { q: 'Can I apply post-install?', a: 'No. NYC SEGS requires pre-install application. Many NYC homeowners miss this deadline.' },
      { q: 'How does NYC SEGS interact with NYC building department permits?', a: 'NYC solar permitting requires PE-stamped drawings, DOB submission, FDNY review (for batteries). The SEGS abatement application is separate from but concurrent with the permit process.' },
      { q: 'Brooklyn vs Manhattan vs Queens — does borough matter?', a: 'NYC SEGS is uniform across all 5 boroughs. NYC permitting timelines differ (Manhattan typically slowest).' },
    ],
    stackingNotes:
      'NYC stack delivers the highest absolute incentive value in the US: NY-Sun upfront ($1,400 typical) + federal 25D 30% + NY State 25% capped $5k + NYC SEGS 30% over 4 years + NYC RPTL §487 15-year exemption + NY sales tax exemption. Full stack on a $22,000 NYC solar install can exceed $18,000 in incentives.',
    updatedAt,
  },
  // ============ TEXAS (5) ============
  {
    slug: 'oncor-solar-pv-standard-offer',
    name: 'Oncor Solar PV Standard Offer Program',
    shortName: 'Oncor Solar Standard Offer',
    authority: 'Oncor Electric Delivery',
    authorityType: 'Utility',
    stateSlug: 'texas',
    techSlugs: ['solar'],
    amount: '~$2,500 for 6 kW residential install',
    type: 'Performance payment',
    expiry: 'Annual cap — first-come first-served',
    url: 'https://www.takealoadofftexas.com/',
    federalLink: '25d-residential-clean-energy',
    description:
      'Oncor Take A Load Off Texas Solar PV Standard Offer Program is the residential solar rebate offered by Oncor — the wires utility serving Dallas-Fort Worth and most of north and west Texas. The program pays approximately $2,500 for a typical 6 kW residential solar installation, applied to projects regardless of which Retail Electric Provider (REP) the customer uses. Texas has retail electric competition, so the rebate decoupled from the REP relationship — what matters is your meter being on Oncor wires. The rebate caps annually and is first-come first-served against allocation. Texas has no state-level solar credit, making Oncor (and similar utility programs from Austin Energy, CPS Energy, GP&L, Pedernales Coop) the primary state-level incentive layer.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Residential customers whose electric meter is on Oncor wires (regardless of REP — Reliant, Green Mountain, Constellation, etc., all qualify).' },
      { q: 'System size?', a: 'Up to 25 kW residential. Most homes install 6–10 kW.' },
      { q: 'Equipment requirements?', a: 'Standard ENERGY STAR PV equipment. No specific cold-climate or efficiency tier requirements (unlike heat pump rebates in colder states).' },
    ],
    howToApply: [
      { name: 'Find Oncor-enrolled installer', text: 'List at takealoadofftexas.com. Most large DFW solar installers (SunPower, Freedom Solar, Velo Solar) are enrolled.' },
      { name: 'Reserve at contract', text: 'Installer files Standard Offer reservation through Oncor portal at contract signing.' },
      { name: 'Install and interconnect', text: 'Standard 1–3 day install. Oncor interconnection 4–8 weeks post-permit.' },
      { name: 'Receive rebate', text: 'Performance payment based on production — typically issued as a single check after first 12 months of generation.' },
    ],
    faq: [
      { q: 'Is the Oncor rebate per-kW or per-watt?', a: 'Performance-based — pays based on actual energy production over the first year. Most 6 kW installs net ~$2,500. Larger systems scale linearly to the cap.' },
      { q: 'Does Oncor stack with federal 25D?', a: 'Yes. Oncor reduces basis; federal 25D = 30% × (cost − Oncor rebate). On a $20,000 system: Oncor ~$3,300 → basis $16,700. Federal 30% × $16,700 = $5,010. Total $8,310.' },
      { q: 'How does it compare to Austin Energy or CPS?', a: 'Austin Energy pays $2,500 flat. CPS Energy (San Antonio) pays $0.60/W up to $4,500. Pedernales Coop pays $2,500 typical. GP&L (Garland) pays $3,500 flat. Each utility has different territory and structure.' },
      { q: 'What if I am on Reliant — does that affect the rebate?', a: 'No. Oncor rebate is wires-utility-based. Your REP only affects retail rate and net metering buyback (some REPs pay 1:1 export, others avoided cost).' },
    ],
    stackingNotes:
      'Stacks with federal 25D (30% post-rebate basis), Texas property tax exemption (100% added value, automatic via Form 50-123), and Texas net metering (REP-dependent — Reliant Truly Free Nights & Solar Days, Green Mountain Renewable Rewards offer 1:1). No state-level solar credit in Texas.',
    updatedAt,
  },
  {
    slug: 'cps-energy-solar-rebate',
    name: 'CPS Energy Solar Rebate (San Antonio)',
    shortName: 'CPS Energy Solar',
    authority: 'CPS Energy',
    authorityType: 'Municipal',
    stateSlug: 'texas',
    techSlugs: ['solar'],
    amount: '$0.60 per watt up to $4,500',
    type: 'Rebate',
    expiry: 'Annual budget — typically depletes in 6–9 months',
    url: 'https://www.cpsenergy.com/en/about-us/programs-services/solar.html',
    federalLink: '25d-residential-clean-energy',
    description:
      'CPS Energy is the San Antonio municipal utility and one of the largest in Texas. The CPS Energy Solar Rebate pays $0.60 per watt of installed solar capacity, capped at $4,500 per residence. A typical 6 kW San Antonio install receives the full $3,600. CPS also operates a separate community solar option that allows renters and condo dwellers to subscribe to off-site solar generation — useful for households who cannot install rooftop. The rebate is funded annually by CPS and typically depletes within 6–9 months of fiscal year start. Reservations are first-come first-served.',
    eligibility: [
      { q: 'Who qualifies?', a: 'CPS Energy residential customers in San Antonio service territory.' },
      { q: 'System size cap?', a: 'Up to 7.5 kW for the maximum $4,500 rebate.' },
      { q: 'Income eligibility?', a: 'No income cap on the standard rebate. CPS Energy Customer Renewable Energy Solutions (CRES) program offers higher per-kW rebates to income-qualified households.' },
    ],
    howToApply: [
      { name: 'Find CPS-enrolled installer', text: 'List on CPS Energy website. Most San Antonio installers are enrolled.' },
      { name: 'Reserve early in fiscal year', text: 'Reservations open at the start of CPS fiscal year and typically deplete within 6–9 months. Apply early.' },
      { name: 'Install', text: 'Standard 1–3 day install. CPS interconnection typically 4–6 weeks.' },
      { name: 'Discount applied at invoice', text: 'Installer applies the rebate as a price reduction in the contract.' },
    ],
    faq: [
      { q: 'CPS Energy vs Austin Energy — which is better?', a: 'CPS pays more in absolute dollars ($4,500 vs $2,500 flat) but Austin Energy has stronger 1:1 net metering. Austin Energy is in Austin city limits only; CPS serves Bexar County and surrounding.' },
      { q: 'Stack with Texas property tax exemption?', a: 'Yes. Texas Property Tax Exemption (Form 50-123) applies automatically. CPS rebate does not affect this.' },
      { q: 'Renter access?', a: 'CPS Community Solar Program lets renters subscribe to off-site solar at $/month — no installation needed.' },
    ],
    stackingNotes:
      'Stacks with federal 25D (30% post-rebate), Texas property tax exemption, and CPS net metering. No Texas state credit. CPS has historically been one of the most generous utility programs in Texas.',
    updatedAt,
  },
  {
    slug: 'austin-energy-solar-rebate',
    name: 'Austin Energy Solar Rebate',
    shortName: 'Austin Energy Solar',
    authority: 'Austin Energy',
    authorityType: 'Municipal',
    stateSlug: 'texas',
    techSlugs: ['solar'],
    amount: '$2,500 flat',
    type: 'Rebate',
    expiry: 'Annual budget cap',
    url: 'https://austinenergy.com/green-power/solar-solutions/solar-photovoltaic-rebates-incentives',
    federalLink: '25d-residential-clean-energy',
    description:
      'Austin Energy is the Austin (Texas) municipal utility — frequently ranked among the most progressive utilities in the US for renewable energy programs. The Austin Energy Solar Rebate pays a flat $2,500 per residential solar installation, regardless of system size (with a minimum 3 kW size requirement). The program also operates one of the strongest 1:1 net metering tariffs in Texas, offering full retail rate for excess solar exports. Austin Energy customers in income-qualified categories also access the Customer Renewable Energy Solutions (CRES) program for higher rebates.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Austin Energy residential customers (within Austin city limits and parts of surrounding Travis County).' },
      { q: 'Minimum system size?', a: '3 kW minimum for the $2,500 rebate.' },
      { q: 'CRES income-qualified track?', a: 'For income-qualified households (≤80% Austin Median Family Income), the CRES program offers higher per-kW rebates.' },
    ],
    howToApply: [
      { name: 'Find Austin Energy-approved installer', text: 'List at austinenergy.com. Most Austin solar installers are approved.' },
      { name: 'Reserve at contract', text: 'Installer reserves rebate against current annual allocation.' },
      { name: 'Install and interconnect', text: 'Standard 1–3 day install. Austin Energy interconnection 3–6 weeks.' },
      { name: 'Discount applied at invoice', text: 'Installer applies $2,500 as price reduction.' },
    ],
    faq: [
      { q: 'Net metering details?', a: 'Austin Energy offers 1:1 net metering at retail rate — among the strongest in Texas. Excess generation credits roll over month-to-month and reset annually.' },
      { q: 'Does the rebate scale with system size?', a: 'No — flat $2,500 regardless. A 3 kW or 10 kW system gets the same rebate.' },
      { q: 'Why a flat rebate vs per-watt?', a: 'Austin Energy structured for simplicity and to encourage smaller residential systems. CPS Energy ($0.60/W up to $4,500) and GP&L ($3,500 flat) use different structures.' },
    ],
    stackingNotes:
      'Stacks with federal 25D (30% post-rebate), Texas property tax exemption, and Austin Energy 1:1 net metering. The Austin combination of $2,500 + 1:1 net metering + federal 30% delivers Austin solar paybacks under 7 years for typical installs.',
    updatedAt,
  },
  // ============ FLORIDA (4) ============
  {
    slug: 'florida-solar-property-tax-abatement',
    name: 'Florida Property Tax Abatement for Renewable Energy',
    shortName: 'FL Property Tax Abatement',
    authority: 'Florida Department of Revenue',
    authorityType: 'State',
    stateSlug: 'florida',
    techSlugs: ['solar', 'battery', 'geothermal'],
    amount: '100% of added home value (permanent)',
    type: 'Property tax exemption',
    expiry: 'Permanent',
    url: 'https://floridarevenue.com/property/Pages/Forms.aspx',
    federalLink: '25d-residential-clean-energy',
    description:
      'Florida\'s Property Tax Abatement for Renewable Energy is one of the most valuable Florida solar incentives — exempting 100% of the added home value from property tax assessment, permanently. The exemption applies to solar PV, solar water heating, batteries, geothermal, and small wind installations. Form DR-418C must be filed with your county property appraiser (typically by January 1 of the assessment year). With Florida property tax averaging 0.91% statewide and home value increases of $15,000–$25,000 typical for solar additions, the exemption saves $135–$225 annually — compounding to several thousand dollars over a 25-year system life.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Florida residential property owners installing renewable energy systems (solar, battery, geothermal, wind).' },
      { q: 'Application deadline?', a: 'File Form DR-418C with county property appraiser. Most counties require submission before January 1 of the assessment year.' },
      { q: 'Primary residence required?', a: 'No — exemption applies to any Florida residential property with eligible solar improvement.' },
    ],
    howToApply: [
      { name: 'Complete installation', text: 'Solar, battery, geothermal, or wind system installed and operational.' },
      { name: 'Obtain Form DR-418C', text: 'Available from the Florida Department of Revenue at floridarevenue.com/property.' },
      { name: 'Submit to county property appraiser', text: 'File before January 1 of the year you want the exemption to apply. Some counties accept up to March 1 with late filing.' },
      { name: 'Annual confirmation', text: 'Most counties auto-renew the exemption annually. Some require periodic verification.' },
    ],
    faq: [
      { q: 'How much does this save?', a: 'Florida property tax averages 0.91%. A solar install increasing home value $20,000 saves ~$182/year. Over 25 years that is ~$4,550 in cumulative tax savings.' },
      { q: 'Does this apply to leased solar?', a: 'Yes — the exemption is on the property, not the system owner. Leased solar still qualifies if installed on the homeowner\'s property.' },
      { q: 'Sales tax exemption — separate?', a: 'Yes. Florida also has a 100% sales tax exemption on solar equipment (Florida Statute 212.08(7)(hh)). The two exemptions stack.' },
      { q: 'What about when I sell the home?', a: 'The exemption transfers to the new owner if they continue to use the property as residential. Some renewals required at sale.' },
    ],
    stackingNotes:
      'Stacks with federal 25D (30%), Florida sales tax exemption (100% — saves ~6% on equipment cost), and Florida 1:1 net metering. Florida\'s no-rebate-but-strong-policy approach delivers payback comparable to states with explicit solar rebates.',
    updatedAt,
  },
  {
    slug: 'florida-solar-sales-tax-exemption',
    name: 'Florida Solar Energy Equipment Sales Tax Exemption',
    shortName: 'FL Sales Tax Exemption',
    authority: 'Florida Department of Revenue',
    authorityType: 'State',
    stateSlug: 'florida',
    techSlugs: ['solar', 'battery'],
    amount: '100% of state and local sales tax (typical 6–7.5%)',
    type: 'Sales tax exemption',
    expiry: 'Permanent (Florida Statute 212.08(7)(hh))',
    url: 'https://floridarevenue.com/taxes/Pages/sales-tax-exemptions.aspx',
    federalLink: '25d-residential-clean-energy',
    description:
      'Florida exempts solar energy systems — including panels, inverters, mounting hardware, and battery storage — from state and local sales tax under Florida Statute 212.08(7)(hh). At Florida\'s typical 6% state sales tax plus up to 1.5% county discretionary surtax (7.5% maximum combined), this exemption saves homeowners 6–7.5% off equipment cost. On a $14,000 equipment portion of a $20,000 system, that is $840–$1,050 in saved tax. The exemption is automatic at point of sale through registered solar contractors — no homeowner application required.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Florida residential or commercial purchasers of solar PV, solar water heating, or battery storage equipment.' },
      { q: 'Equipment scope?', a: 'Panels, inverters, mounting hardware, batteries (when part of the solar system), and labor to install. Roofing materials are not exempt unless directly required for solar mounting.' },
    ],
    howToApply: [
      { name: 'Use registered solar contractor', text: 'Contractor certified with Florida DOR applies the sales tax exemption automatically at invoice.' },
      { name: 'Verify exemption on invoice', text: 'Equipment line items should not include Florida sales tax. Labor portion may include sales tax depending on classification.' },
    ],
    faq: [
      { q: 'Does this apply to standalone batteries?', a: 'Yes — batteries are written into the exemption broadly enough to include standalone storage installations.' },
      { q: 'Stack with federal 25D?', a: 'Yes. Sales tax exemption reduces the gross cost; federal 25D applies to the (already discounted) net cost.' },
      { q: 'How is "labor" treated?', a: 'Labor for solar installation is generally not subject to sales tax in Florida. Equipment + labor together are typically exempt at residential install.' },
    ],
    stackingNotes:
      'Combines with Florida property tax abatement (DR-418C), federal 25D (30%), Florida 1:1 net metering, and SELF (Solar and Energy Loan Fund). Florida sales tax exemption is among the most valuable state-level solar incentives that operates "behind the scenes" — most homeowners never see it because it never appears on the invoice.',
    updatedAt,
  },
  {
    slug: 'florida-net-metering-1to1',
    name: 'Florida 1:1 Net Metering',
    shortName: 'FL 1:1 NEM',
    authority: 'Florida Public Service Commission',
    authorityType: 'State',
    stateSlug: 'florida',
    techSlugs: ['solar'],
    amount: 'Full retail rate per kWh exported',
    type: 'Net metering',
    expiry: 'Active — protected through 2026 legislative session',
    url: 'https://www.psc.state.fl.us/',
    federalLink: '25d-residential-clean-energy',
    description:
      'Florida operates one of the strongest 1:1 net metering tariffs in the United States — solar customers receive full retail rate credit for every kilowatt-hour exported to the grid. With Florida investor-owned utility residential rates averaging $0.13–$0.16/kWh, the export value of solar in Florida is roughly 2–3x what California (NEM 3.0 avoided cost ~$0.08) or Arizona (RCP ~$0.087) pays. Combined with Florida\'s strong solar resource (5.5–6.0 kWh/m²/day insolation), Florida solar paybacks land at 6–9 years among the fastest in the country. Florida Senate Bill 1024 (2022) attempted to phase out 1:1 net metering and was vetoed by Governor DeSantis; legislative attempts have not been revived through 2025.',
    eligibility: [
      { q: 'Which utilities offer 1:1 net metering?', a: 'All investor-owned utilities under PSC regulation: FPL, Duke Energy Florida, TECO, Florida Public Utilities. Municipal utilities (JEA, OUC, Lakeland, Tallahassee) and rural cooperatives set their own — most are similar but a few (JEA Jacksonville) use lower wholesale rates.' },
      { q: 'System size cap?', a: 'PSC rules allow up to 100% of the customer\'s annual usage. Most homes install 5–10 kW.' },
      { q: 'Annual rollover?', a: 'Excess generation credits roll over month-to-month. Some utilities cash out at retail rate annually; others credit forward indefinitely.' },
    ],
    howToApply: [
      { name: 'Confirm utility supports 1:1 NEM', text: 'PSC investor-owned utilities all do. Municipal utilities vary — check JEA, OUC specifically.' },
      { name: 'Install solar with utility-approved interconnection', text: 'Standard interconnection process. Utility installs net metering meter at no cost.' },
      { name: 'Begin earning retail-rate credits', text: 'Excess generation appears as credits on monthly utility bill at full retail rate.' },
    ],
    faq: [
      { q: 'Will Florida net metering survive politically?', a: 'SB 1024 (2022) tried to gut net metering — vetoed by DeSantis. No revival through 2025. Future legislative attempts possible. Existing installs grandfather for 20 years from interconnection.' },
      { q: 'JEA Jacksonville — different deal?', a: 'JEA pays wholesale rate (~$0.04/kWh) for excess generation, not retail. Significantly worse than FPL. Battery storage has stronger economics on JEA territory.' },
      { q: 'How does net metering compare to NEM 3.0?', a: 'California NEM 3.0 export rates are roughly $0.05–$0.15/kWh (avoided cost). Florida 1:1 retail rate $0.13–$0.16/kWh. Florida customers get roughly 2–3x export value vs California new installs.' },
    ],
    stackingNotes:
      'Florida net metering compounds with federal 25D, Florida property tax abatement, and sales tax exemption. The combination of strong sun resource + high retail rate + 1:1 NEM makes Florida one of the top-10 US states for solar payback despite the absence of state cash rebates.',
    updatedAt,
  },
  // ============ MASSACHUSETTS (5) ============
  {
    slug: 'mass-save-whole-home-heat-pump',
    name: 'Mass Save Whole-Home Heat Pump Rebate',
    shortName: 'Mass Save Whole-Home HP',
    authority: 'Eversource / National Grid / Unitil',
    authorityType: 'Utility',
    stateSlug: 'massachusetts',
    techSlugs: ['heat-pump'],
    amount: 'Up to $10,000',
    type: 'Rebate',
    expiry: 'Funded annually — verify current PA incentive levels',
    url: 'https://www.masssave.com/',
    federalLink: '25c-energy-efficient-home-improvement',
    description:
      'Mass Save Whole-Home Heat Pump Rebate is the most generous statewide heat pump program in the United States, paying up to $10,000 per home for whole-home cold-climate heat pump installations that fully replace existing fossil fuel heating systems. The program is administered jointly by Massachusetts investor-owned utilities (Eversource, National Grid, Unitil) under Department of Public Utilities oversight. Whole-home installs (full displacement of gas, oil, propane, or electric resistance heating) qualify for the $10,000 tier. Partial-displacement installs (heat pump as supplement to existing fossil furnace) qualify for a lower $1,250-per-ton tier capped at $4,000.',
    eligibility: [
      { q: 'Whole-home vs partial — what triggers $10,000?', a: 'Whole-home install displaces 100% of fossil fuel heating with no backup. Existing fossil system must be removed or decommissioned. Hybrid dual-fuel systems retaining the fossil furnace as backup qualify only at the partial-displacement tier.' },
      { q: 'Cold-climate equipment requirement?', a: 'Must be on NEEP Cold Climate ASHP list and meet HSPF2 thresholds set by Mass Save program year. Most major brands (Mitsubishi Hyper-Heat, Daikin Aurora, LG, Trane Cold Climate) have qualifying models.' },
      { q: 'Who qualifies?', a: 'Massachusetts residential customers of Eversource, National Grid, or Unitil. Income-eligible households also access the Mass Save Income-Eligible Heating program (no-cost installation).' },
    ],
    howToApply: [
      { name: 'Find Mass Save participating contractor', text: 'Contractor directory at masssave.com. Most large MA HVAC contractors participate.' },
      { name: 'Get a Mass Save HEAT Loan if needed', text: '0% APR up to $50,000 over 7 years for energy-efficient improvements. Available alongside the rebate.' },
      { name: 'Schedule home energy assessment', text: 'Mass Save offers a free home energy assessment (HEA) that identifies improvements and qualifies you for additional rebates.' },
      { name: 'Reserve and install', text: 'Contractor reserves rebate at contract. Standard ASHP install 1–3 days for ducted, 1–2 days per zone for ductless.' },
      { name: 'Discount applied at invoice', text: 'Mass Save rebate appears as line-item discount. Utility pays contractor directly.' },
    ],
    faq: [
      { q: 'Does Mass Save stack with federal 25C?', a: 'Yes. Mass Save reduces basis; federal 25C 30% applies to net cost up to $2,000 cap. On a $18,000 install: Mass Save $10,000 → basis $8,000. Federal 25C 30% × $8,000 = $2,000 cap. Total $12,000.' },
      { q: 'HEAT Loan — really 0%?', a: 'Yes. Mass Save subsidizes the loan interest. Approval through participating banks (BankFive, Bay State Savings, Cambridge Trust, etc.).' },
      { q: 'Does Mass Save cover ground-source?', a: 'Yes — separate Ground Source Heat Pump rebate, typically $4,500–$6,500. Lower than ASHP because GSHP installed cost is higher to begin with.' },
      { q: 'Heat pump water heater rebate?', a: 'Mass Save pays $750 for HPWH. Federal 25C $2,000 cap is shared with whole-home heat pump.' },
      { q: 'Can low-income households get free installation?', a: 'Yes. Mass Save Income-Eligible Heating provides no-cost heat pump installation for households below 60% State Median Income.' },
    ],
    stackingNotes:
      'Mass Save stacks with federal 25C ($2,000), HEEHRA (income-qualified, do not double-claim same item), and the Mass Save HEAT Loan (0% APR financing). Combined Mass Save + federal can deliver 65–80% project cost coverage on whole-home heat pump installs.',
    updatedAt,
  },
  {
    slug: 'mass-save-heat-loan',
    name: 'Mass Save HEAT Loan (0% APR Financing)',
    shortName: 'Mass Save HEAT Loan',
    authority: 'Mass Save / Participating Banks',
    authorityType: 'Utility',
    stateSlug: 'massachusetts',
    techSlugs: ['heat-pump', 'solar'],
    amount: 'Up to $50,000 at 0% APR over 7 years',
    type: 'Loan',
    expiry: 'Active — funded annually',
    url: 'https://www.masssave.com/saving/residential-rebates/heatloan',
    federalLink: '25c-energy-efficient-home-improvement',
    description:
      'The Mass Save HEAT Loan is a 0% APR financing program for energy-efficient home improvements in Massachusetts. Loans up to $50,000 over 7-year terms are available with Mass Save subsidizing the interest. Eligible improvements include heat pumps, heat pump water heaters, insulation, air sealing, windows, doors, and high-efficiency boilers/furnaces. Approved lenders include BankFive, Bay State Savings, Cambridge Trust, and several other regional Massachusetts banks. The HEAT Loan is the best financing instrument in the country for energy-efficient home retrofits — comparable products in other states charge 4–8% APR.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Massachusetts homeowners (1–4 unit residential) who are customers of Eversource, National Grid, Unitil, Berkshire Gas, or Liberty Utilities.' },
      { q: 'Credit score requirement?', a: 'Standard residential lending criteria. Most participating banks require 640+ FICO. Some banks accept lower scores with co-signer.' },
      { q: 'Project requirement?', a: 'Improvement must be Mass Save-qualified. Heat pumps must be on NEEP Cold Climate list. Insulation must meet IECC 2021 standards.' },
    ],
    howToApply: [
      { name: 'Schedule Mass Save Home Energy Assessment', text: 'Free HEA identifies eligible improvements and unlocks the HEAT Loan.' },
      { name: 'Choose participating bank', text: 'BankFive, Bay State Savings, Cambridge Trust, Reading Cooperative Bank are common. Apply directly with the bank.' },
      { name: 'Bank approves loan', text: 'Standard residential lending process. Approval typically 2–3 weeks.' },
      { name: 'Project completion', text: 'Bank funds the project. Mass Save subsidizes the interest on the back-end.' },
      { name: 'Repay over 7 years at 0% APR', text: 'Monthly payment based on loan amount and 7-year term. No interest accrued.' },
    ],
    faq: [
      { q: 'HEAT Loan vs HELOC?', a: 'HEAT Loan is fixed 0% APR for 7 years. HELOC is variable 5.99–8.99% APR. HEAT Loan is unambiguously cheaper.' },
      { q: 'Does HEAT Loan stack with rebates?', a: 'Yes. HEAT Loan finances the post-rebate project cost. You can use HEAT Loan to bridge the upfront cash needed before federal 25C credit comes back at filing.' },
      { q: 'Can I use HEAT Loan for solar?', a: 'No — HEAT Loan is energy-efficiency-focused (heat pumps, insulation). Solar uses different financing programs.' },
      { q: 'What about for windows or doors?', a: 'Yes. ENERGY STAR Most Efficient windows and doors qualify.' },
    ],
    stackingNotes:
      'HEAT Loan combines with Mass Save rebates ($10,000 whole-home heat pump, $750 HPWH, etc.), federal 25C credit, and HEEHRA for income-qualified. The 0% APR over 7 years effectively eliminates the time-value-of-money cost of waiting for tax-time refunds.',
    updatedAt,
  },
  {
    slug: 'mass-save-connectedsolutions',
    name: 'Mass Save ConnectedSolutions Battery Storage',
    shortName: 'Mass Save ConnectedSolutions',
    authority: 'Eversource / National Grid',
    authorityType: 'Utility',
    stateSlug: 'massachusetts',
    techSlugs: ['battery'],
    amount: '~$50/kW summer peak event payment + multi-year contract',
    type: 'Performance payment',
    expiry: 'Active — annual program',
    url: 'https://www.masssave.com/save/residential-rebates/connectedsolutions',
    federalLink: '25d-residential-clean-energy',
    description:
      'Mass Save ConnectedSolutions is the Massachusetts utility-administered battery storage demand-response program. Battery owners enroll their batteries to discharge during summer peak demand events (typically 30–60 events per summer) and receive performance payments based on how much capacity they provide. Eversource and National Grid pay approximately $50 per kW of summer peak demand reduction; National Grid also pays a smaller winter rate. A typical Tesla Powerwall 3 (5 kW continuous) participating in 50 events per year nets $200–$500 annually in ConnectedSolutions revenue. The program is among the most homeowner-friendly grid services programs in the US.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Massachusetts residential customers of Eversource or National Grid with grid-connected battery storage 5 kWh or larger.' },
      { q: 'Equipment requirements?', a: 'Battery must be ConnectedSolutions-approved (Tesla Powerwall, Sonnen, Generac PWRcell, Enphase IQ Battery, FranklinWH).' },
      { q: 'Enrollment commitment?', a: '5-year enrollment minimum to ensure utility can rely on the capacity for grid planning.' },
    ],
    howToApply: [
      { name: 'Confirm battery is ConnectedSolutions-approved', text: 'Most major residential batteries qualify. Confirm at masssave.com.' },
      { name: 'Enroll via app or installer', text: 'Tesla Powerwall enrollment via Tesla app. Other batteries via installer or Mass Save portal.' },
      { name: 'Battery dispatches automatically during events', text: 'Utility dispatches battery during peak demand. Battery state-of-charge typically drops to 20% during events, recharges overnight.' },
      { name: 'Monthly performance payment', text: 'Payment based on actual capacity provided × $/kW rate. Issued via utility bill credit or direct deposit.' },
    ],
    faq: [
      { q: 'How much does a Powerwall 3 earn annually?', a: 'Powerwall 3 contributes 5 kW continuous. ConnectedSolutions summer events ~$50/kW × 5 kW × 50 events ≈ $200–$500/year. Higher in National Grid territory due to winter rate.' },
      { q: 'Does ConnectedSolutions affect my battery for outages?', a: 'During non-event hours, battery operates normally for self-consumption and backup. Events are 2–4 hours typical and only affect summer peak (typically 4–8pm).' },
      { q: 'Can I leave the program?', a: '5-year minimum commitment. Early exit may forfeit some payments but is allowed for documented hardship.' },
      { q: 'Does ConnectedSolutions stack with federal 25D?', a: 'Yes. ConnectedSolutions is performance payment (revenue), not rebate — does not reduce federal 25D basis. The federal credit applies normally to battery cost.' },
    ],
    stackingNotes:
      'ConnectedSolutions stacks with federal 25D (30% on battery cost), Mass Save Battery Storage Adder (when offered), and any solar PV credits. Performance payments are taxable income but do not reduce federal credit basis.',
    updatedAt,
  },
  // ============ NEW JERSEY (4) ============
  {
    slug: 'charge-up-new-jersey',
    name: 'Charge Up New Jersey EV Rebate',
    shortName: 'Charge Up NJ',
    authority: 'NJ Board of Public Utilities',
    authorityType: 'State',
    stateSlug: 'new-jersey',
    techSlugs: ['ev'],
    amount: 'Up to $4,000 point-of-sale',
    type: 'Rebate',
    expiry: 'Annual funding cycle — typically opens July, depletes by October',
    url: 'https://www.chargeupnewjersey.com/',
    federalLink: '30d-clean-vehicle-credit',
    description:
      'Charge Up New Jersey is among the most generous state-level EV rebates in the United States, paying up to $4,000 point-of-sale for a new electric vehicle from a participating New Jersey dealer. The program also extends to lease agreements (36+ months) at a prorated rate. Charge Up NJ stacks with the federal 30D credit ($7,500 POS) and the New Jersey 100% sales tax exemption on EVs (saving 6.625% on a typical $45,000 EV — roughly $3,000), delivering total stacked savings of $14,000+ for income-qualified buyers. Funding typically opens July 1 and depletes by October due to high demand.',
    eligibility: [
      { q: 'MSRP cap?', a: '$55,000 maximum vehicle MSRP for new vehicles.' },
      { q: 'Income limits?', a: 'No income cap on the base $4,000 rebate.' },
      { q: 'Lease eligibility?', a: 'Yes. 36-month minimum lease qualifies for prorated rebate.' },
    ],
    howToApply: [
      { name: 'Verify funding is available', text: 'Check chargeupnewjersey.com for current allocation status. Funds typically open July and deplete by October.' },
      { name: 'Choose participating NJ dealer', text: 'Dealer directory at chargeupnewjersey.com.' },
      { name: 'Apply rebate at sale', text: 'Dealer files Charge Up NJ paperwork at sale. Rebate appears as price reduction at purchase or as cap cost reduction at lease.' },
      { name: 'Vehicle registration', text: 'Vehicle must be registered in New Jersey to maintain rebate eligibility.' },
    ],
    faq: [
      { q: 'When does Charge Up NJ open annually?', a: 'July 1 most years. Funding allocations typically deplete within 3–4 months. Apply early in the cycle.' },
      { q: 'Does Charge Up NJ stack with federal 30D?', a: 'Yes. Both apply at point of sale. $4,000 + $7,500 = $11,500 off the MSRP. Add the NJ sales tax exemption (~$2,800 on $42,000 EV) and total is ~$14,300.' },
      { q: 'Used EV?', a: 'Charge Up NJ does not cover used EVs. Federal 25E ($4,000) covers used EVs from registered dealers.' },
      { q: 'What if I buy from out-of-state dealer?', a: 'Charge Up NJ requires participating NJ dealer. Out-of-state purchases do not qualify.' },
    ],
    stackingNotes:
      'Stacks with federal 30D ($7,500 POS), New Jersey EV sales tax exemption (~6.625% — automatic), EZ-Pass Green Pass discount on Garden State Parkway, PSE&G EV Charger Incentive (up to $1,500 + free Level 2 charger), and federal 30C charger credit (eligible census tract).',
    updatedAt,
  },
  {
    slug: 'pseg-ev-charger-incentive',
    name: 'PSE&G EV Charger Incentive',
    shortName: 'PSE&G EV Charger',
    authority: 'PSE&G',
    authorityType: 'Utility',
    stateSlug: 'new-jersey',
    techSlugs: ['ev'],
    amount: 'Up to $1,500 + free Level 2 charger',
    type: 'Rebate',
    expiry: 'Active — annual program',
    url: 'https://nj.pseg.com/saveenergyandmoney/electricvehicles',
    federalLink: '30c-alternative-fuel-vehicle-refueling-property',
    description:
      'PSE&G offers one of the most generous utility-administered EV charger programs in the US — providing up to $1,500 in rebates plus a free Level 2 charger (Wallbox or similar) for residential customers installing home EV charging. The program also includes time-of-use rate plan enrollment that reduces overnight charging costs. PSE&G covers most of New Jersey except Atlantic and Cape May counties. The $1,500 rebate stacks with the federal 30C charger credit (30% up to $1,000 in eligible census tracts) for total charger savings of up to $2,500.',
    eligibility: [
      { q: 'Who qualifies?', a: 'PSE&G residential customers in northern and central New Jersey service territory.' },
      { q: 'EV ownership requirement?', a: 'Yes. Must own or lease an EV (or have a documented purchase order).' },
      { q: 'Single-family home requirement?', a: 'Primarily single-family. Multi-family also accepted with property owner approval.' },
    ],
    howToApply: [
      { name: 'Apply via PSE&G EV portal', text: 'Online application at nj.pseg.com/saveenergyandmoney/electricvehicles.' },
      { name: 'PSE&G ships charger', text: 'Free Level 2 charger ships to your address (typically Wallbox or Enel X JuiceBox).' },
      { name: 'Hire electrician for install', text: 'Electrician installs charger and 240V circuit. PSE&G rebate covers up to $1,500 of installation.' },
      { name: 'Enroll in TOU rate plan', text: 'Switch to PSE&G EV TOU rate plan for reduced overnight charging cost.' },
    ],
    faq: [
      { q: 'Does PSE&G stack with federal 30C?', a: 'Yes. PSE&G rebate reduces install cost; federal 30C 30% applies if your address is in an eligible census tract.' },
      { q: 'Charge Up NJ + PSE&G EV Charger — both apply?', a: 'Yes. Different incentive types. Charge Up NJ for the vehicle ($4,000), PSE&G for the charger install ($1,500 + free hardware).' },
      { q: 'JCP&L customers — equivalent program?', a: 'Yes. JCP&L EV Driven program offers make-ready charger install for residential customers.' },
    ],
    stackingNotes:
      'Stacks with federal 30D ($7,500 EV), federal 30C ($1,000 charger), Charge Up NJ ($4,000 vehicle), and NJ sales tax exemption (~6.625% on EV). Combined NJ stack: ~$14,000 off vehicle + $2,500 off charger = ~$16,500 total.',
    updatedAt,
  },
  // ============ ARIZONA (3) ============
  {
    slug: 'arizona-residential-solar-tax-credit',
    name: 'Arizona Residential Solar Energy Tax Credit',
    shortName: 'AZ Solar Credit',
    authority: 'Arizona Department of Revenue',
    authorityType: 'State',
    stateSlug: 'arizona',
    techSlugs: ['solar', 'battery', 'geothermal'],
    amount: '25% of system cost up to $1,000',
    type: 'Tax credit',
    expiry: 'Permanent',
    url: 'https://azdor.gov/forms/credit-forms/credit-solar-energy-devices',
    federalLink: '25d-residential-clean-energy',
    description:
      'Arizona\'s Residential Solar Energy Tax Credit (Form 310) pays 25% of solar PV, solar water heating, geothermal, and small wind system cost — capped at $1,000 per residence. The cap means the credit maxes out at $4,000 system cost, modest by today\'s typical 8 kW residential install pricing of $20,000+. Despite the cap, the AZ credit stacks with the federal 25D (30% uncapped), property tax exemption, and sales tax exemption to deliver meaningful incentive value. Arizona has the second-best solar resource in the United States after California — the no-fuss Tax Credit pairs with strong production economics for fast payback.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Arizona residential homeowners who own (not lease) the system.' },
      { q: 'System types?', a: 'Solar PV, solar water heating, geothermal heat pumps, small wind turbines, and biomass.' },
      { q: 'Carry-forward?', a: 'Yes. Unused credit rolls forward up to 5 years.' },
    ],
    howToApply: [
      { name: 'Confirm system ownership', text: 'You must own the system outright (cash or solar loan). Leases and PPAs do not qualify.' },
      { name: 'Document total cost', text: 'Equipment, install labor, permits, interconnection. AZ does not deduct utility rebates from basis (verify with current AZ DOR rules).' },
      { name: 'File AZ Form 310', text: 'Attach to AZ Form 140 (state income tax return). Calculates 25% × cost, capped at $1,000.' },
      { name: 'Carry-forward unused credit', text: 'If credit exceeds AZ state tax owed, rolls to next year for up to 5 years.' },
    ],
    faq: [
      { q: 'Why is the cap so low?', a: 'The Arizona credit was authored in 2007 when residential solar systems averaged $4,000–$8,000. The $1,000 cap was meaningful then but has not been updated for current system costs.' },
      { q: 'Does it stack with federal 25D?', a: 'Yes. Federal 30% on full system cost (or post-utility-rebate basis), AZ 25% capped at $1,000. Total federal + AZ credits on a $20,000 system: $6,000 + $1,000 = $7,000.' },
      { q: 'APS/SRP/TEP rebates — do they affect AZ credit?', a: 'Verify with AZ DOR. Most state credits use pre-rebate cost basis. Arizona\'s rules are similar to NY and Oregon.' },
    ],
    stackingNotes:
      'Stacks with federal 25D (30%), Arizona Energy Equipment Property Tax Exemption (100% added value), Arizona Solar Energy Equipment Sales Tax Exemption (100% state), APS/SRP/TEP utility rebates, and Arizona net metering successor (Resource Comparison Proxy). Full Arizona stack delivers 35–45% solar cost coverage typical.',
    updatedAt,
  },
  {
    slug: 'srp-battery-storage-rebate',
    name: 'SRP Battery Storage Rebate',
    shortName: 'SRP Battery',
    authority: 'Salt River Project',
    authorityType: 'Utility',
    stateSlug: 'arizona',
    techSlugs: ['battery'],
    amount: '$250 per kWh up to $3,600',
    type: 'Rebate',
    expiry: 'Annual budget — first-come first-served',
    url: 'https://www.srpnet.com/grid-water-management/grid-management/improving-the-grid/battery-storage-pilot',
    federalLink: '25d-residential-clean-energy',
    description:
      'Salt River Project (SRP) — the Phoenix metro municipal-style utility — offers one of Arizona\'s most generous battery storage rebates at $250 per kWh of installed capacity, capped at $3,600 per residence. A typical Tesla Powerwall 3 (13.5 kWh) qualifies for the full $3,375. The rebate stacks with the federal 25D credit (30% uncapped) for total battery incentives of approximately $7,500 on a $13,000 install. SRP\'s rebate is particularly valuable because the SRP E-27 demand-charge tariff penalizes solar-without-storage households — making battery essentially required for reasonable solar economics on SRP territory.',
    eligibility: [
      { q: 'Who qualifies?', a: 'SRP residential customers with grid-connected battery storage 3 kWh or larger (federal 25D minimum). SRP rebate may have higher minimum.' },
      { q: 'Equipment requirements?', a: 'Battery must be SRP-approved (Tesla Powerwall, Generac PWRcell, Enphase IQ, LG ESS, FranklinWH, others).' },
      { q: 'Pre- or post-install?', a: 'Pre-install reservation required. SRP allocates funds at reservation; rebate paid after commissioning.' },
    ],
    howToApply: [
      { name: 'Verify SRP service', text: 'SRP serves Phoenix, Scottsdale, Tempe, Mesa, parts of Chandler. Not APS or TEP.' },
      { name: 'Choose SRP-approved installer', text: 'List at srpnet.com.' },
      { name: 'Reserve rebate at contract', text: 'Installer files reservation with SRP. Approval typically 1–3 weeks.' },
      { name: 'Install and commission', text: 'Standard battery install. SRP interconnection sign-off triggers rebate payment.' },
    ],
    faq: [
      { q: 'Why is SRP\'s battery rebate so important?', a: 'SRP residential E-27 tariff includes a demand charge based on highest 30-min usage. Solar without battery does not reduce demand charge meaningfully. Battery shaves the demand peak and restores solar economics. SRP recognizes this with the rebate.' },
      { q: 'APS customers — equivalent program?', a: 'APS does not run a battery rebate of similar size. APS customers get federal 25D 30% and Arizona state credit (capped at $1,000 total combined for solar+battery).' },
      { q: 'Stack with federal 25D?', a: 'Yes. SRP reduces basis; federal 30% applies to net cost. On a $13,000 Powerwall: SRP $3,375 → basis $9,625. Federal 30% = $2,888. Total $6,263.' },
    ],
    stackingNotes:
      'Stacks with federal 25D (30%, uncapped on standalone batteries 3+ kWh), Arizona state credit ($1,000 cap, applies to combined solar+battery), and any solar incentives. SRP\'s combination of demand charge + battery rebate makes battery storage the single most valuable upgrade for SRP solar customers.',
    updatedAt,
  },
  // ============ COLORADO (3) ============
  {
    slug: 'colorado-ev-tax-credit',
    name: 'Colorado Electric Vehicle Tax Credit',
    shortName: 'CO EV Credit',
    authority: 'Colorado Department of Revenue',
    authorityType: 'State',
    stateSlug: 'colorado',
    techSlugs: ['ev'],
    amount: 'Up to $5,000 (new) or $2,500 (used)',
    type: 'Tax credit',
    expiry: 'Through 2032',
    url: 'https://tax.colorado.gov/electric-vehicle-tax-credit',
    federalLink: '30d-clean-vehicle-credit',
    description:
      'Colorado offers one of the most generous state-level EV tax credits in the United States — up to $5,000 for new electric vehicles and up to $2,500 for used. The credit applies regardless of MSRP (no cap), making Colorado attractive for higher-end EV buyers who exceed the federal 30D MSRP cap of $80,000. The credit also offers an additional $2,500 stack for vehicles with battery sourcing from US/Free Trade Agreement countries, mirroring the federal 30D structure. Combined with federal 30D and Xcel Energy charger rebates, Colorado EV buyers see total stacked savings of $13,000+ in many cases.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Colorado residents purchasing or leasing new or used EVs with at least 4 kWh battery capacity.' },
      { q: 'MSRP cap?', a: 'No state-level MSRP cap (unlike federal 30D\'s $55k/$80k caps).' },
      { q: 'Lease eligibility?', a: 'Yes. Lease 30+ months for full credit; shorter leases prorated.' },
    ],
    howToApply: [
      { name: 'Purchase or lease qualifying EV', text: 'Vehicle must have at least 4 kWh battery and be eligible per CDR rules.' },
      { name: 'File CO Form DR 0617', text: 'Attach to Colorado state income tax return.' },
      { name: 'Carry forward if needed', text: 'Excess credit rolls to next CO tax year.' },
    ],
    faq: [
      { q: 'Stack with federal 30D?', a: 'Yes. Total federal + CO: $7,500 + $5,000 = $12,500 off a $50,000 EV. Add Xcel charger rebate ~$500 = $13,000.' },
      { q: 'Used EV — federal 25E vs CO state?', a: 'Federal 25E pays $4,000 (30% of price up to $25k vehicle). Colorado pays $2,500 used. Both stack — total ~$6,500 on a $20,000 used EV.' },
      { q: 'High-MSRP EVs?', a: 'Colorado has no MSRP cap, so the state credit applies even on Tesla Model S, Lucid Air, Mercedes EQS, etc. Federal 30D excludes these (MSRP cap $80k for SUVs, $55k for sedans).' },
    ],
    stackingNotes:
      'Stacks with federal 30D ($7,500), Xcel Solar*Rewards charger incentive (~$500), federal 30C charger ($1,000 if eligible census tract). Colorado is unusual in having a state EV credit that extends to higher-MSRP vehicles where the federal credit does not.',
    updatedAt,
  },
  {
    slug: 'xcel-solar-rewards-co',
    name: 'Xcel Energy Solar*Rewards (Colorado)',
    shortName: 'Xcel Solar*Rewards CO',
    authority: 'Xcel Energy',
    authorityType: 'Utility',
    stateSlug: 'colorado',
    techSlugs: ['solar'],
    amount: '$0.05–$0.15 per kWh production-based + REC payment',
    type: 'Performance payment',
    expiry: 'Active — annual program',
    url: 'https://co.my.xcelenergy.com/s/renewable/solar-rewards',
    federalLink: '25d-residential-clean-energy',
    description:
      'Xcel Energy Solar*Rewards is the Colorado utility-administered solar performance payment program. Customers receive ongoing payments based on kilowatt-hours generated (paid at $0.05–$0.15/kWh depending on system size and PV production tier) plus Renewable Energy Credit (REC) payments from Xcel\'s compliance market obligations. The program also offers an upfront rebate option for income-qualified customers via Solar*Rewards Community. Xcel\'s structured incentive favors the long-term value of solar in Colorado markets and pairs well with Xcel\'s strong 1:1 net metering tariff.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Xcel Energy residential customers in Colorado service territory.' },
      { q: 'System size limits?', a: 'Up to 10 kW residential. Larger systems require commercial track.' },
      { q: 'Solar*Rewards Community track?', a: 'Income-qualified track for ≤80% AMI. Provides upfront rebate option in addition to performance payments.' },
    ],
    howToApply: [
      { name: 'Choose Xcel-approved installer', text: 'Most Colorado solar installers are Xcel-approved.' },
      { name: 'Reserve at contract', text: 'Installer files Solar*Rewards reservation. Reservation locks the per-kWh rate.' },
      { name: 'Install and interconnect', text: 'Standard 1–3 day install. Xcel interconnection 4–8 weeks.' },
      { name: 'Monthly performance payment', text: 'Xcel pays based on metered solar production. Payment via utility bill credit or direct deposit.' },
    ],
    faq: [
      { q: 'Stack with federal 25D?', a: 'Yes. Solar*Rewards is performance payment (revenue), not basis-reducing. Federal 30% applies to full system cost.' },
      { q: 'How much does Solar*Rewards pay annually?', a: '8 kW system in Denver produces ~12,000 kWh/yr. At $0.10/kWh average (with REC), that is $1,200/year — over 25 years, $30,000 cumulative income.' },
      { q: 'Solar*Rewards Community vs standard?', a: 'Community is income-qualified with upfront rebate option (less common). Standard is open to all customers with performance payments only.' },
    ],
    stackingNotes:
      'Stacks with federal 25D (30%, uncapped), Colorado Energy Star Tax Exemption (sales tax exempt on solar equipment), and Xcel net metering. Solar*Rewards is meaningful long-term revenue (≥$25k over 25 years for typical install).',
    updatedAt,
  },
  // ============ MAINE (3) ============
  {
    slug: 'efficiency-maine-heat-pumps',
    name: 'Efficiency Maine Heat Pump Rebate',
    shortName: 'Efficiency Maine HP',
    authority: 'Efficiency Maine',
    authorityType: 'Nonprofit',
    stateSlug: 'maine',
    techSlugs: ['heat-pump'],
    amount: 'Up to $8,000+ (whole-home cold-climate)',
    type: 'Rebate',
    expiry: 'Funded annually',
    url: 'https://www.efficiencymaine.com/at-home/heat-pumps/',
    federalLink: '25c-energy-efficient-home-improvement',
    description:
      'Efficiency Maine — the state-chartered nonprofit administering Maine\'s energy efficiency programs — runs one of the most generous heat pump rebate programs in the country. Whole-home cold-climate ASHP installs receive up to $8,000 in upfront rebate, with additional bonuses for low-income households and ground-source systems. Maine\'s heating market is uniquely opportunistic for heat pumps because the state\'s historical reliance on oil and propane heat (60%+ of homes) means heat pump electrification produces the largest absolute energy cost reduction in the US — typical Maine homeowners save $1,500–$3,000/year vs. their pre-heat-pump fuel bill.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Maine residents installing cold-climate-qualified heat pumps. Income-eligible bonus tier for households below 80% State Median Income.' },
      { q: 'Equipment requirement?', a: 'Must be on NEEP Cold Climate ASHP list with HSPF2 and EER thresholds set annually by Efficiency Maine.' },
      { q: 'Whole-home displacement?', a: 'Whole-home install (full displacement of oil, propane, or electric resistance) qualifies for the $8,000 tier.' },
    ],
    howToApply: [
      { name: 'Find Efficiency Maine-registered installer', text: 'Directory at efficiencymaine.com.' },
      { name: 'Get a quote with rebate applied', text: 'Installer applies rebate as price reduction in quote.' },
      { name: 'Reserve at contract', text: 'Reservation through Efficiency Maine portal.' },
      { name: 'Install', text: 'Cold-climate ASHP installation.' },
      { name: 'Discount applied at invoice', text: 'Efficiency Maine pays installer; price reduction shown on homeowner invoice.' },
    ],
    faq: [
      { q: 'Why is Maine\'s rebate so high?', a: 'Maine\'s $8,000 rebate is structured to bridge the cost difference vs. continuing to use oil/propane. Maine relies on 60%+ oil and propane heat — the highest fossil fuel home heating fraction in the US — and decarbonization requires aggressive incentives.' },
      { q: 'Stack with federal 25C?', a: 'Yes. Efficiency Maine reduces basis; federal 25C 30% applies to net cost up to $2,000 cap.' },
      { q: 'HEEHRA in Maine?', a: 'Maine has launched HEEHRA. Income-qualified households can stack HEEHRA on top of Efficiency Maine for additional savings.' },
    ],
    stackingNotes:
      'Stacks with federal 25C ($2,000 cap), HEEHRA (income-qualified, up to $8,000), and any utility-specific rebates. Total Maine stack on a $14,000 install can exceed $14,000 in incentives — sometimes covering full cost for income-qualified households.',
    updatedAt,
  },
  // ============ OREGON (2) ============
  {
    slug: 'energy-trust-oregon-heat-pump',
    name: 'Energy Trust of Oregon Heat Pump Rebate',
    shortName: 'Energy Trust Heat Pump',
    authority: 'Energy Trust of Oregon',
    authorityType: 'Nonprofit',
    stateSlug: 'oregon',
    techSlugs: ['heat-pump'],
    amount: 'Up to $1,800 + ductless adders',
    type: 'Rebate',
    expiry: 'Active — annual program',
    url: 'https://energytrust.org/incentives/heat-pumps/',
    federalLink: '25c-energy-efficient-home-improvement',
    description:
      'Energy Trust of Oregon — the state-chartered nonprofit funded by PGE, Pacific Power, NW Natural, and Cascade Natural Gas customer surcharges — operates Oregon\'s primary residential energy efficiency program. The Energy Trust Heat Pump Rebate pays up to $1,800 for ducted air-source heat pump installs, plus ductless adders that can push the total to $2,500+ for whole-home ductless multi-zone installs. The program covers both space-heating heat pumps and heat pump water heaters (separate $500 rebate). Energy Trust pairs with the federal 25C credit (30% up to $2,000) and HEEHRA for income-qualified households for total stacked incentives often exceeding $5,000.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Oregon residents in PGE, Pacific Power, NW Natural, or Cascade Natural Gas service territories.' },
      { q: 'Equipment requirement?', a: 'Energy Trust qualified equipment list. Cold-climate ASHP for full rebate; standard ASHP at lower tier.' },
      { q: 'Whole-home displacement?', a: 'Higher rebate tier for whole-home ductless installs.' },
    ],
    howToApply: [
      { name: 'Find Energy Trust trade ally', text: 'Directory at energytrust.org. Most Oregon HVAC companies are trade allies.' },
      { name: 'Get a quote', text: 'Trade ally identifies Energy Trust eligible equipment and applies rebate.' },
      { name: 'Reserve and install', text: 'Reservation through Energy Trust portal. Standard heat pump installation.' },
      { name: 'Discount applied at invoice', text: 'Energy Trust pays trade ally; homeowner sees price reduction.' },
    ],
    faq: [
      { q: 'Stack with federal 25C?', a: 'Yes. Energy Trust reduces basis; federal 25C 30% applies to net cost up to $2,000.' },
      { q: 'HEEHRA in Oregon?', a: 'Yes — Oregon has launched HEEHRA. Stacks with Energy Trust for income-qualified.' },
      { q: 'HPWH separately?', a: 'Yes. Energy Trust pays $500 for HPWH. Federal 25C covers HPWH under shared $2,000 cap.' },
    ],
    stackingNotes:
      'Stacks with federal 25C, HEEHRA (income-qualified), and any utility-specific gas-to-electric conversion bonuses. Oregon stack on a $13,000 ASHP install can deliver $4,000+ in incentives.',
    updatedAt,
  },
  // ============ ILLINOIS (3) ============
  {
    slug: 'illinois-shines-srec',
    name: 'Illinois Shines (Adjustable Block Program — SRECs)',
    shortName: 'Illinois Shines',
    authority: 'Illinois Power Agency',
    authorityType: 'State',
    stateSlug: 'illinois',
    techSlugs: ['solar'],
    amount: 'SREC payments $50–$80/MWh over 15 years',
    type: 'Performance payment',
    expiry: 'Annual block — administered by IPA',
    url: 'https://illinoisshines.com/',
    federalLink: '25d-residential-clean-energy',
    description:
      'Illinois Shines — formally the Adjustable Block Program — is Illinois\' SREC market that pays solar customers performance-based incentives over 15 years. Customers receive Solar Renewable Energy Credits (SRECs) for each MWh produced; the SRECs are sold to ComEd, Ameren, MidAmerican, and other Illinois utilities to meet state Renewable Portfolio Standard obligations. The Illinois Power Agency sets per-MWh prices in advance — current residential rates run $50–$80/MWh. Over 15 years, a typical 8 kW system generates ~180 MWh of SRECs worth $9,000–$14,400 in cumulative SREC revenue. Combined with federal 25D and Illinois sales tax exemption, the Illinois stack delivers strong solar economics despite the state\'s modest solar resource.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Illinois residents installing solar PV systems. The program runs through approved Approved Vendors who handle SREC monetization.' },
      { q: 'System size?', a: 'Up to 25 kW residential. Most homes install 6–10 kW.' },
      { q: 'Sale or upfront option?', a: 'Most homeowners assign SRECs to the Approved Vendor in exchange for an upfront cash payment representing the present value of 15 years of SRECs.' },
    ],
    howToApply: [
      { name: 'Choose IPA Approved Vendor', text: 'Approved Vendor list at illinoisshines.com. Most Illinois solar installers are Approved Vendors.' },
      { name: 'Sign 15-year SREC contract', text: 'Vendor offers either upfront lump-sum (in exchange for SRECs) or annual SREC sale via vendor.' },
      { name: 'Reserve in current Block', text: 'Each Block has fixed allocation; step-down between Blocks. Reserve early in a Block for highest rate.' },
      { name: 'Install and interconnect', text: 'Standard solar install + ComEd/Ameren/etc. interconnection.' },
      { name: 'SREC revenue', text: 'Either annual SREC payments or upfront lump-sum at install.' },
    ],
    faq: [
      { q: 'Upfront vs annual SREC payment — which is better?', a: 'Upfront simplifies cash flow and shifts risk to the vendor. Annual gives potential upside if SREC prices rise. Most homeowners choose upfront.' },
      { q: 'Stack with federal 25D?', a: 'Yes. SREC payments are revenue (not basis-reducing). Federal 30% applies to full system cost.' },
      { q: 'Block step-down — how often?', a: 'Blocks deplete every 4–8 months in heavy-demand areas. Each Block has lower per-MWh price than the prior.' },
      { q: 'Solar for All — separate?', a: 'Yes. Illinois Solar for All is the income-qualified track with upfront rebates instead of SREC monetization.' },
    ],
    stackingNotes:
      'Stacks with federal 25D (30% on full cost), Illinois sales tax exemption (state tax), property tax exemption (improved value not added to assessment), and ComEd/Ameren net metering. Total IL stack delivers ~50–60% effective cost coverage including SREC value over 15 years.',
    updatedAt,
  },
  // ============ MARYLAND (3) ============
  {
    slug: 'maryland-clean-energy-grant',
    name: 'Maryland Clean Energy Grant',
    shortName: 'MD Clean Energy Grant',
    authority: 'Maryland Energy Administration',
    authorityType: 'State',
    stateSlug: 'maryland',
    techSlugs: ['solar', 'geothermal', 'battery'],
    amount: 'Solar $1,000 / Geothermal $3,000 / Battery $5,000',
    type: 'Grant',
    expiry: 'Annual budget — typically depletes mid-year',
    url: 'https://energy.maryland.gov/Pages/incentives/cleanenergyincentives.aspx',
    federalLink: '25d-residential-clean-energy',
    description:
      'Maryland Energy Administration runs the Clean Energy Grant program — paying $1,000 for residential solar PV, $3,000 for geothermal heat pumps, and $5,000 for battery storage. The grants are first-come, first-served against annual budget allocations and typically deplete by mid-year. Maryland also offers a separate solar SREC market through the state RPS (paying $200+/MWh historically) and a property tax exemption on solar-added home value. Combined with federal 25D, Maryland delivers strong stacked solar incentive value despite a modest solar resource.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Maryland residential property owners. No income cap on the base grant.' },
      { q: 'When to apply?', a: 'Apply as early in the fiscal year as possible. Funding typically depletes by April–June.' },
      { q: 'Equipment requirements?', a: 'ENERGY STAR certified equipment for HVAC. Solar must meet UL standards.' },
    ],
    howToApply: [
      { name: 'Apply via MEA portal', text: 'Online application at energy.maryland.gov.' },
      { name: 'Reserve grant', text: 'Pre-install reservation required. Approval within 4 weeks typical.' },
      { name: 'Install', text: 'Complete installation within reservation window.' },
      { name: 'Submit completion paperwork', text: 'Final invoice, equipment specs, interconnection sign-off.' },
      { name: 'Receive grant payment', text: 'Direct deposit or check post-completion.' },
    ],
    faq: [
      { q: 'Stack with federal 25D?', a: 'Yes. Grant reduces basis; federal 30% applies to net cost.' },
      { q: 'EmPOWER Maryland separate?', a: 'Yes. EmPOWER is the BGE/Pepco/Delmarva utility-administered energy efficiency program for HVAC, insulation, etc. The Clean Energy Grant is for renewable systems.' },
      { q: 'Solar SRECs in Maryland?', a: 'Yes. Maryland has a strong SREC market under the state RPS. SRECs pay $200+/MWh historically. SREC revenue stacks on top of the Clean Energy Grant.' },
    ],
    stackingNotes:
      'Stacks with federal 25D, Maryland SRECs ($200+/MWh historically), Maryland property tax exemption, and EmPOWER Maryland utility rebates (separate program). Maryland\'s combination of state grant + SRECs makes it one of the strongest solar markets on the East Coast despite modest sun.',
    updatedAt,
  },
  // ============ HAWAII (3) ============
  {
    slug: 'hawaii-battery-bonus',
    name: 'Hawaii Battery Bonus',
    shortName: 'HI Battery Bonus',
    authority: 'Hawaiian Electric',
    authorityType: 'Utility',
    stateSlug: 'hawaii',
    techSlugs: ['battery'],
    amount: '$850 per battery + ongoing grid services revenue',
    type: 'Performance payment',
    expiry: 'Active — capacity allocation by island',
    url: 'https://www.hawaiianelectric.com/products-and-services/customer-renewable-programs/battery-bonus',
    federalLink: '25d-residential-clean-energy',
    description:
      'Hawaii Battery Bonus is the Hawaiian Electric (HECO) program that pays residential battery owners for grid services. Customers receive an upfront $850 bonus per battery plus ongoing grid services revenue based on capacity dispatched during peak demand. Hawaii\'s grid is unique — small, isolated, with the highest residential electricity rates in the US ($0.40+/kWh on some islands). Battery storage paired with rooftop solar is essentially mandatory for cost-effective electrification, and Battery Bonus reflects the high grid value of distributed storage. Hawaii also operates the Customer Self-Supply (CSS) tariff successor to net metering, which limits export and increases the value of self-consumption (and therefore battery storage).',
    eligibility: [
      { q: 'Who qualifies?', a: 'Hawaiian Electric residential customers on Oahu, Hawaii, Maui, Lanai, or Molokai.' },
      { q: 'Battery requirements?', a: 'Battery must be HECO-approved with 5 kW continuous and at least 5 kWh capacity.' },
      { q: 'Capacity allocation?', a: 'Each island has a capacity allocation. Once depleted, no new enrollments.' },
    ],
    howToApply: [
      { name: 'Confirm island has remaining capacity', text: 'Allocations vary by island. Oahu typically depletes fastest.' },
      { name: 'Choose HECO-approved installer', text: 'List at hawaiianelectric.com.' },
      { name: 'Apply for Battery Bonus enrollment', text: 'Online application includes battery specs and interconnection details.' },
      { name: 'Install and commission', text: 'Standard battery install. HECO interconnection.' },
      { name: '$850 bonus + ongoing revenue', text: 'Upfront $850 paid; ongoing grid services revenue based on dispatch.' },
    ],
    faq: [
      { q: 'Hawaii electric rates — really $0.40/kWh?', a: 'Yes. Hawaiian Electric residential rates are the highest in the US — averaging $0.38–$0.45/kWh depending on island. Solar+battery economics are strongly favorable.' },
      { q: 'Net metering in Hawaii?', a: 'Replaced by Customer Self-Supply (CSS) — no export allowed; all generation must be self-consumed. Battery storage essentially required.' },
      { q: 'Stack with federal 25D?', a: 'Yes. Battery Bonus is performance payment; federal 30% on full cost.' },
    ],
    stackingNotes:
      'Stacks with federal 25D (30%), Hawaii Energy efficiency rebates, and PV CSS+ tariff. Hawaii\'s combination of high rates + Battery Bonus + federal 25D delivers some of the strongest battery storage economics in the US.',
    updatedAt,
  },
  // ============ CONNECTICUT (3) ============
  {
    slug: 'connecticut-energy-storage-solutions',
    name: 'Connecticut Energy Storage Solutions',
    shortName: 'CT Energy Storage',
    authority: 'Eversource / United Illuminating',
    authorityType: 'Utility',
    stateSlug: 'connecticut',
    techSlugs: ['battery'],
    amount: '$200/kWh upfront + $115/kW performance',
    type: 'Performance payment',
    expiry: 'Active through 2030',
    url: 'https://energystoragect.com/',
    federalLink: '25d-residential-clean-energy',
    description:
      'Connecticut Energy Storage Solutions is the joint Eversource / United Illuminating program for residential battery storage. The program pays $200 per kWh upfront plus an annual $115 per kW performance payment for grid services. A typical Tesla Powerwall 3 (13.5 kWh, 5 kW) qualifies for $2,700 upfront ($200 × 13.5) plus $575/year ongoing ($115 × 5) for the multi-year contract term. The combined value over 5 years approaches $5,500 — among the strongest residential battery programs in the US. Connecticut\'s grid is small and capacity-constrained, making distributed battery storage particularly valuable.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Connecticut residential customers of Eversource or United Illuminating.' },
      { q: 'Battery requirements?', a: 'Approved battery list including Tesla Powerwall, Generac PWRcell, Sonnen, FranklinWH, others.' },
      { q: 'Contract term?', a: '5-year minimum enrollment for performance payments.' },
    ],
    howToApply: [
      { name: 'Choose participating installer', text: 'List at energystoragect.com.' },
      { name: 'Apply for program', text: 'Application includes battery specs and dispatch authorization.' },
      { name: 'Install and commission', text: 'Standard install. Utility commissioning.' },
      { name: '$200/kWh paid upfront', text: 'Upfront payment after commissioning.' },
      { name: 'Annual $115/kW performance payment', text: 'Paid for grid services dispatched during peak events.' },
    ],
    faq: [
      { q: 'Stack with federal 25D?', a: 'Yes. Upfront $200/kWh reduces basis; performance payment is revenue. Federal 30% applies on net cost.' },
      { q: 'How does CT compare to MA ConnectedSolutions?', a: 'CT pays more upfront ($200/kWh vs no upfront in MA). MA pays more in summer event compensation. Both deliver $4,000–$6,000 over 5 years for a Powerwall.' },
    ],
    stackingNotes:
      'Stacks with federal 25D, Connecticut residential solar net metering, and CT solar tax credit. Connecticut\'s small grid + capacity constraints + battery program structure delivers some of the strongest battery economics in New England.',
    updatedAt,
  },
  // ============ ADDITIONAL TOP PROGRAMS ============
  {
    slug: 'pa-pennsylvania-sunshine',
    name: 'Pennsylvania Sunshine Solar Rebate',
    shortName: 'PA Sunshine',
    authority: 'Pennsylvania DEP',
    authorityType: 'State',
    stateSlug: 'pennsylvania',
    techSlugs: ['solar'],
    amount: 'Variable rebate plus SREC market access',
    type: 'Rebate',
    expiry: 'Annual program — confirm allocation status',
    url: 'https://www.dep.pa.gov/Citizens/SolarPanelsBasics/Pages/default.aspx',
    federalLink: '25d-residential-clean-energy',
    description:
      'Pennsylvania Sunshine is Pennsylvania\'s residential solar rebate program plus Solar Renewable Energy Credit (SREC) market access. The SREC market historically paid $50–$120 per MWh and stacks with the federal 25D credit. Combined with federal + Pennsylvania property tax exclusion (solar value not added to property tax assessment), Pennsylvania delivers reasonable solar economics despite a modest solar resource. Major utilities (PECO, Duquesne Light, PPL, FirstEnergy) administer net metering at retail rate.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Pennsylvania residential homeowners installing solar PV.' },
      { q: 'SREC eligibility?', a: 'System must be Pennsylvania-located and registered with the SREC market.' },
    ],
    howToApply: [
      { name: 'Install solar', text: 'Standard residential install with PA-licensed installer.' },
      { name: 'Register for SREC market', text: 'Annual SREC generation eligible for sale into PA market.' },
      { name: 'Net metering with utility', text: '1:1 retail rate net metering with PECO, Duquesne, PPL, FirstEnergy.' },
    ],
    faq: [
      { q: 'How much is a PA SREC worth?', a: '$50–$120 per MWh historically. 8 kW system generates ~12 SRECs/year = $600–$1,440/year.' },
    ],
    stackingNotes:
      'Stacks with federal 25D (30%), PA SREC market revenue, PA property tax exclusion, and utility 1:1 net metering.',
    updatedAt,
  },
  {
    slug: 'nj-clean-energy-solar',
    name: 'NJ Clean Energy Program — Solar Renewable Energy Certificates',
    shortName: 'NJ TRECs',
    authority: 'NJ Board of Public Utilities',
    authorityType: 'State',
    stateSlug: 'new-jersey',
    techSlugs: ['solar'],
    amount: '$85+ per MWh (TREC value 15-year contract)',
    type: 'Performance payment',
    expiry: 'Active — annual block',
    url: 'https://www.nj.gov/bpu/njcep/',
    federalLink: '25d-residential-clean-energy',
    description:
      'New Jersey\'s Successor Solar Incentive (SuSI) program — administered through Transition Renewable Energy Certificates (TRECs) — pays solar customers approximately $85+ per MWh of generation over a 15-year contract. New Jersey was the original SREC market in the US and remains one of the strongest. Combined with the federal 25D credit, NJ sales tax exemption (100% on solar equipment), and 1:1 net metering, New Jersey solar economics are among the best in the East Coast despite the state\'s modest solar resource.',
    eligibility: [
      { q: 'Who qualifies?', a: 'NJ residential solar customers. System must be registered with NJ Clean Energy Program.' },
      { q: 'TREC value?', a: '$85+ per MWh under current SuSI program structure.' },
    ],
    howToApply: [
      { name: 'Install with NJ-licensed installer', text: 'Standard residential install.' },
      { name: 'Register system with NJCEP', text: 'Online registration for TREC eligibility.' },
      { name: '15-year TREC contract', text: 'Either monetize annually or assign to installer for upfront lump-sum.' },
    ],
    faq: [
      { q: 'TREC vs SREC — what is the difference?', a: 'TREC replaced NJ\'s SREC market under SuSI program. TRECs have fixed-price contracts vs the variable SREC market.' },
      { q: 'How much over 15 years?', a: '8 kW system generating ~12 MWh/year × 15 years × $85 = ~$15,300 cumulative TREC revenue.' },
    ],
    stackingNotes:
      'Stacks with federal 25D, NJ sales tax exemption (100%, automatic), property tax exemption, and utility 1:1 net metering.',
    updatedAt,
  },
  {
    slug: 'duke-energy-smart-saver-nc',
    name: 'Duke Energy Smart $aver (North Carolina)',
    shortName: 'Duke Smart $aver NC',
    authority: 'Duke Energy',
    authorityType: 'Utility',
    stateSlug: 'north-carolina',
    techSlugs: ['heat-pump'],
    amount: '$300–$500 per heat pump',
    type: 'Rebate',
    expiry: 'Annual program',
    url: 'https://www.duke-energy.com/home/products/smart-saver',
    federalLink: '25c-energy-efficient-home-improvement',
    description:
      'Duke Energy Smart $aver pays North Carolina residential customers for heat pump installations and energy-efficient HVAC upgrades. The program covers heat pumps ($300–$500), heat pump water heaters ($300), and central air conditioners ($150). Combined with federal 25C (30% up to $2,000), the Duke + federal stack on a $12,000 heat pump install delivers $2,300–$2,500 in incentives. Duke also operates Smart $aver for South Carolina (similar amounts).',
    eligibility: [
      { q: 'Who qualifies?', a: 'Duke Energy NC residential customers.' },
      { q: 'Equipment requirement?', a: 'ENERGY STAR certified equipment.' },
    ],
    howToApply: [
      { name: 'Find Smart $aver contractor', text: 'Duke Energy contractor directory.' },
      { name: 'Install equipment', text: 'Contractor applies rebate as price reduction.' },
    ],
    faq: [
      { q: 'Stack with federal 25C?', a: 'Yes. Duke reduces basis; federal 25C 30% applies up to $2,000 cap.' },
    ],
    stackingNotes:
      'Stacks with federal 25C, NC state energy efficiency programs, and any HEEHRA for income-qualified.',
    updatedAt,
  },
  {
    slug: 'mass-save-hpwh',
    name: 'Mass Save Heat Pump Water Heater Rebate',
    shortName: 'Mass Save HPWH',
    authority: 'Eversource / National Grid / Unitil',
    authorityType: 'Utility',
    stateSlug: 'massachusetts',
    techSlugs: ['heat-pump'],
    amount: '$750',
    type: 'Rebate',
    expiry: 'Annual program',
    url: 'https://www.masssave.com/saving/residential-rebates/heat-pump-water-heater',
    federalLink: '25c-energy-efficient-home-improvement',
    description:
      'Mass Save pays $750 for ENERGY STAR Most Efficient heat pump water heaters in Massachusetts. The program is administered by Eversource, National Grid, and Unitil. Combined with the federal 25C credit (HPWH shares the $2,000 sub-cap with whole-home heat pump), the total stack on a $5,000 HPWH install delivers $1,500–$2,000 in incentives — frequently reducing net cost to comparable to or below a conventional gas water heater.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Massachusetts residential customers of Eversource, National Grid, or Unitil.' },
      { q: 'Equipment?', a: 'ENERGY STAR Most Efficient HPWH (Rheem ProTerra, AO Smith Voltex, Bradford White Aerotherm).' },
    ],
    howToApply: [
      { name: 'Find Mass Save participating contractor or retailer', text: 'List at masssave.com.' },
      { name: 'Install', text: 'Standard HPWH installation 1 day.' },
      { name: 'Discount applied at invoice', text: 'Mass Save rebate appears as price reduction.' },
    ],
    faq: [
      { q: 'Stack with whole-home heat pump?', a: 'HPWH and whole-home ASHP share federal 25C $2,000 sub-cap. Spread across two tax years to capture both.' },
    ],
    stackingNotes:
      'Stacks with federal 25C ($2,000 cap shared), HEEHRA HPWH rebate ($1,750 income-qualified, do not double-claim), and utility rate plan benefits.',
    updatedAt,
  },
  {
    slug: 'minnesota-xcel-solar-rewards',
    name: 'Xcel Solar*Rewards (Minnesota)',
    shortName: 'Xcel Solar*Rewards MN',
    authority: 'Xcel Energy',
    authorityType: 'Utility',
    stateSlug: 'minnesota',
    techSlugs: ['solar'],
    amount: '$0.07–$0.08 per kWh production-based + REC',
    type: 'Performance payment',
    expiry: 'Active — annual program',
    url: 'https://mn.my.xcelenergy.com/s/renewable/solar-rewards',
    federalLink: '25d-residential-clean-energy',
    description:
      'Xcel Energy Minnesota Solar*Rewards pays Minnesota residential solar customers a per-kWh production payment plus REC value. The program structure is similar to the Colorado version. Minnesota Solar*Rewards plus federal 25D plus net metering delivers reasonable solar economics despite Minnesota\'s northern latitude and modest insolation. Minnesota also has a property tax exclusion on solar-added home value.',
    eligibility: [
      { q: 'Who qualifies?', a: 'Xcel Energy MN residential customers.' },
    ],
    howToApply: [
      { name: 'Choose Xcel-approved installer', text: 'Most MN solar installers participate.' },
      { name: 'Reserve in current Block', text: 'Block step-down typical.' },
      { name: 'Install and earn', text: 'Monthly performance payment.' },
    ],
    faq: [
      { q: 'Worth it in Minnesota?', a: 'Production lower than southern states but Solar*Rewards + federal 30% + net metering still delivers 9–12 year payback.' },
    ],
    stackingNotes:
      'Stacks with federal 25D, MN net metering, and property tax exclusion.',
    updatedAt,
  },
  {
    slug: 'green-mountain-power-resilient-home',
    name: 'Green Mountain Power Resilient Home',
    shortName: 'GMP Resilient Home',
    authority: 'Green Mountain Power',
    authorityType: 'Utility',
    stateSlug: 'vermont',
    techSlugs: ['battery'],
    amount: 'Free Tesla Powerwall lease (~$10,500 value over 10 years)',
    type: 'Loan',
    expiry: 'Active — capacity allocation',
    url: 'https://greenmountainpower.com/product/powerwall/',
    federalLink: '25d-residential-clean-energy',
    description:
      'Green Mountain Power\'s Resilient Home program is a unique Vermont battery storage offering — GMP provides a Tesla Powerwall to qualifying residential customers in exchange for shared access to the battery for grid services. Customers pay nothing upfront and a small monthly fee ($30/month typical). Over 10 years the customer effectively receives a $10,500+ value Powerwall for $3,600 in cumulative fees. The customer cannot claim federal 25D because they do not own the equipment, but they pay nothing upfront and gain backup power resilience.',
    eligibility: [
      { q: 'Who qualifies?', a: 'GMP residential customers in Vermont. Capacity allocation by service area.' },
    ],
    howToApply: [
      { name: 'Apply via GMP portal', text: 'Online application.' },
      { name: 'GMP installs Powerwall', text: 'No upfront cost. GMP handles install.' },
      { name: 'Pay monthly fee', text: '$30/month typical for 10 years.' },
    ],
    faq: [
      { q: 'Federal 25D eligibility?', a: 'No — homeowner does not own the equipment. GMP claims commercial credit.' },
      { q: 'Net cost over 10 years?', a: 'Roughly $3,600 total fees vs $13,000+ outright purchase. Trade-off: shared grid access during events.' },
    ],
    stackingNotes:
      'Cannot stack with federal 25D (lease structure). Pairs with Vermont Solar Tax Credit and Efficiency Vermont rebates if also installing solar.',
    updatedAt,
  },
  // ============ UTILITY-SPECIFIC EV CHARGER PROGRAMS ============
  {
    slug: 'sce-charge-ready-home',
    name: 'SCE Charge Ready Home',
    shortName: 'SCE Charge Ready',
    authority: 'Southern California Edison',
    authorityType: 'Utility',
    stateSlug: 'california',
    techSlugs: ['ev'],
    amount: 'Up to $1,000 charger install rebate',
    type: 'Rebate',
    expiry: 'Active — annual program',
    url: 'https://www.sce.com/residential/electric-vehicles/charge-ready-home',
    federalLink: '30c-alternative-fuel-vehicle-refueling-property',
    description:
      'SCE Charge Ready Home pays Southern California Edison residential customers up to $1,000 for installing a Level 2 EV charger and required electrical panel work. The program also enrolls customers in SCE EV TOU rate plans for reduced overnight charging cost. Combined with federal 30C (30% up to $1,000 in eligible census tracts), SCE customers can receive total charger incentives of $2,000.',
    eligibility: [
      { q: 'Who qualifies?', a: 'SCE residential customers. EV ownership or purchase order required.' },
    ],
    howToApply: [
      { name: 'Apply via SCE portal', text: 'Online application at sce.com.' },
      { name: 'Hire electrician for install', text: 'SCE-approved or licensed C-10 electrician.' },
      { name: 'Submit invoice for rebate', text: 'Up to $1,000 rebate based on actual install cost.' },
    ],
    faq: [
      { q: 'Stack with federal 30C?', a: 'Yes if address is in eligible census tract. SCE reduces basis; federal 30% applies to net.' },
    ],
    stackingNotes:
      'Stacks with federal 30D (vehicle), federal 30C (charger if eligible census tract), and PG&E EV2-A or SCE TOU-D-PRIME rate plans.',
    updatedAt,
  },
  {
    slug: 'pge-pre-owned-ev-rebate',
    name: 'PG&E Pre-Owned EV Rebate',
    shortName: 'PG&E Used EV',
    authority: 'PG&E',
    authorityType: 'Utility',
    stateSlug: 'california',
    techSlugs: ['ev'],
    amount: '$1,000–$4,000 (income-qualified)',
    type: 'Rebate',
    expiry: 'Active — annual program',
    url: 'https://www.pge.com/en_US/residential/electric-vehicle-incentives/pre-owned-ev-rebate.page',
    federalLink: '25e-used-clean-vehicle-credit',
    description:
      'PG&E pays income-qualified residential customers $1,000 to $4,000 for purchasing a pre-owned electric vehicle. The rebate amount scales with income tier (≤300% Federal Poverty Level = higher tier; ≤80% Area Median Income = highest tier). Combined with federal 25E ($4,000) and California CVAP/CC4A ($7,500 grant), income-qualified PG&E customers can stack significant savings on a used EV — sometimes covering 50%+ of total cost.',
    eligibility: [
      { q: 'Income limits?', a: 'Tiered: Standard for ≤300% FPL ($1,000), Plus for ≤80% AMI ($4,000).' },
      { q: 'Vehicle eligibility?', a: 'Used EV, sale price under $30,000, from licensed dealer.' },
    ],
    howToApply: [
      { name: 'Apply via PG&E portal', text: 'Online application with income documentation.' },
      { name: 'Purchase qualifying used EV', text: 'From PG&E-approved dealer.' },
      { name: 'Submit purchase docs', text: 'Sales contract, registration.' },
    ],
    faq: [
      { q: 'Stack with federal 25E?', a: 'Yes. PG&E reduces basis; federal 25E 30% applies on net cost up to $4,000 cap.' },
      { q: 'Stack with CVAP?', a: 'Yes for income-qualified. Total stack approaches $12,000+ on a used EV.' },
    ],
    stackingNotes:
      'Stacks with federal 25E ($4,000 cap), CVAP ($7,500 grant for income-qualified), federal 30C charger ($1,000 eligible census tract), and PG&E EV2-A rate plan.',
    updatedAt,
  },
];

export const PROGRAM_BY_SLUG: Record<string, Program> = Object.fromEntries(
  PROGRAMS.map((p) => [p.slug, p])
);

// Best-effort match: fuzzy lookup state-tech program row → /program/[slug]/ page
const NORMALIZE = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export function findProgramSlug(rowName: string, stateSlug?: string): string | undefined {
  const norm = NORMALIZE(rowName);
  for (const p of PROGRAMS) {
    if (stateSlug && p.stateSlug && p.stateSlug !== stateSlug) continue;
    const candidates = [p.name, p.shortName].map(NORMALIZE);
    if (candidates.some((c) => norm.includes(c) || c.includes(norm))) return p.slug;
    // Acronym/keyword match
    const tokens = NORMALIZE(p.shortName).split(/\s+/).filter((t) => t.length > 3);
    if (tokens.length >= 2 && tokens.every((t) => norm.includes(t))) return p.slug;
  }
  return undefined;
}
