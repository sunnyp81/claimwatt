export type GuideSection = { heading: string; body: string };
export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  category: 'Federal' | 'Stacking' | 'Eligibility' | 'Technology' | 'Process';
  techSlugs?: string[];
  federalSlugs?: string[];
  stateSlugs?: string[];
  answerFirst: string;
  tldr: string[];
  sections: GuideSection[];
  faq: { q: string; a: string }[];
};

export const GUIDES: Guide[] = [
  {
    slug: 'how-to-claim-25c-credit',
    title: 'How to Claim the 25C Energy Efficient Home Improvement Credit (2026)',
    metaTitle: 'How to Claim 25C Energy Efficient Home Improvement Credit (2026 Step-by-Step)',
    description: 'Step-by-step guide to claiming the federal 25C credit — up to $3,200 per year — for heat pumps, insulation, windows, and doors. Forms, PINs, deadlines, stacking rules.',
    category: 'Federal',
    federalSlugs: ['25c-energy-efficient-home-improvement'],
    techSlugs: ['heat-pump'],
    answerFirst:
      'To claim the federal 25C Energy Efficient Home Improvement Credit, you file IRS Form 5695 Part II with your tax return for the year the equipment was placed in service. Heat pumps qualify for 30% of cost up to $2,000 per year, on top of a separate $1,200 annual cap covering insulation, air sealing, windows, doors, and air conditioners. Starting tax year 2025 the IRS requires a Qualified Product Identification Number (PIN) for heat pumps and heat pump water heaters — confirm the PIN with your installer at install. The credit is non-refundable and has no carryforward, so it only offsets tax owed in the install year. Spread projects across two tax years to claim the cap twice.',
    tldr: [
      'File IRS Form 5695 Part II with your tax return',
      'Heat pumps: 30% up to $2,000 (separate from $1,200 general cap)',
      'PIN required from manufacturer starting tax year 2025',
    ],
    sections: [
      { heading: 'Step 1: Confirm the equipment qualifies', body: 'Heat pumps must meet the highest CEE tier. Insulation must meet IECC 2021 standards. Windows must be ENERGY STAR Most Efficient. Doors must meet ENERGY STAR. Save AHRI certificates and ENERGY STAR labels.' },
      { heading: 'Step 2: Get the manufacturer PIN', body: 'For heat pumps, heat pump water heaters, and biomass stoves, the manufacturer provides a Qualified Product Identification Number with the equipment. The PIN goes on Form 5695 Part II line 22a starting tax year 2025.' },
      { heading: 'Step 3: Save itemized receipts', body: 'Equipment, installation labor, and any rebate received must all be documented. The credit basis is total cost minus rebates.' },
      { heading: 'Step 4: Calculate the credit by category', body: 'Heat pump 30% up to $2,000. Insulation 30% up to $1,200 cap (combined with windows, doors, audit). Windows 30% up to $600 within the $1,200 cap. Doors 30% up to $250 each, $500 total within the $1,200 cap. Audit 30% up to $150 within the $1,200 cap.' },
      { heading: 'Step 5: File Form 5695 Part II', body: 'Form 5695 Part II is dedicated to 25C. Enter total qualified costs, calculate by category, and the form rolls the result to Schedule 3 line 5a, then to Form 1040.' },
      { heading: 'Step 6: Keep records 3 years minimum', body: 'IRS audit window for the credit is 3 years from filing. Keep contractor invoices, AHRI certificates, ENERGY STAR labels, manufacturer PINs.' },
    ],
    faq: [
      { q: 'Can I claim 25C every year?', a: 'Yes. Caps reset January 1 each year through 2032. Spreading projects over multiple years is a common stacking strategy.' },
      { q: 'Can I claim 25C and HEEHRA together?', a: 'Not on the same item. Choose the better deal. HEEHRA wins for income-qualified households (≤150% AMI). 25C wins for higher-income.' },
      { q: 'Does state rebate reduce the 25C basis?', a: 'Yes. Subtract any state or utility rebate from cost before applying 30%.' },
      { q: 'What if I do the install but pay in a different tax year?', a: 'The credit is claimed in the year the equipment is placed in service (operational), not paid for.' },
      { q: 'Carryforward?', a: 'No. 25C is non-refundable with no carryforward. Excess credit is forfeited.' },
    ],
  },
  {
    slug: 'how-to-claim-25d-credit',
    title: 'How to Claim the 25D Residential Clean Energy Credit (2026)',
    metaTitle: 'How to Claim 25D Solar Tax Credit (2026 Step-by-Step Guide)',
    description: 'Complete guide to claiming the 30% federal 25D credit on solar, batteries, geothermal, and small wind. Forms, basis, carryforward rules, stacking with state rebates.',
    category: 'Federal',
    federalSlugs: ['25d-residential-clean-energy'],
    techSlugs: ['solar', 'battery', 'geothermal'],
    answerFirst:
      'To claim the federal 25D Residential Clean Energy Credit, file IRS Form 5695 Part I with your tax return for the year the system was placed in service. The credit is 30% of total qualifying cost — including equipment, labor, permitting, and interconnection — with no dollar cap. Standalone batteries of 3 kWh or larger have qualified since tax year 2023 (no solar prerequisite). The credit is non-refundable but unused amounts carry forward to future tax years. State and utility rebates reduce the federal basis but stacking still wins almost universally. The 30% rate holds through 2032, then steps down to 26% in 2033 and 22% in 2034.',
    tldr: [
      'File IRS Form 5695 Part I — 30% of total cost, no cap',
      'Carry-forward allowed: unused credit rolls to next year',
      'Standalone batteries 3+ kWh eligible since 2023',
    ],
    sections: [
      { heading: 'Step 1: Confirm system ownership', body: 'You must own the equipment outright (cash or solar loan). Leases, PPAs, and community solar shares do not qualify under 25D — the leasing company claims commercial Section 48 ITC instead.' },
      { heading: 'Step 2: Document total project cost', body: 'Equipment cost (panels, inverters, batteries), installation labor, permitting fees, interconnection fees, and any structural roof work directly required for solar mounting are all includable in the credit basis.' },
      { heading: 'Step 3: Subtract any state or utility rebate', body: 'Rebates received from utilities or state programs reduce the federal basis. SREC payments do NOT reduce basis (they are revenue, not cost offset). Performance-based incentives that flow over time are typically not basis-reducing — confirm with CPA.' },
      { heading: 'Step 4: Calculate 30% of net cost', body: 'Net cost (total cost minus state/utility rebates) × 30% = federal credit. No cap.' },
      { heading: 'Step 5: File Form 5695 Part I', body: 'Form 5695 Part I calculates the 25D credit. The form rolls the result to Schedule 3 line 5a, then to Form 1040.' },
      { heading: 'Step 6: Carry forward unused credit', body: 'If the 25D credit exceeds your tax liability, the excess carries to next tax year automatically — Form 5695 line 16. There is no time limit on carryforward.' },
      { heading: 'Step 7: Update home cost basis at sale', body: 'The 25D credit reduces the home cost basis dollar-for-dollar at sale. Your CPA will need the credit amount when you sell.' },
    ],
    faq: [
      { q: 'Can I claim 25D for a solar lease?', a: 'No. The homeowner must own the equipment. Leases and PPAs disqualify the homeowner — the leasing company claims commercial credit.' },
      { q: 'Does 25D apply to second/vacation homes?', a: 'Yes — unlike 25C which is principal residence only, 25D allows secondary homes. Pure rentals do not qualify (commercial Section 48 instead).' },
      { q: 'Does the credit apply to roof work?', a: 'Generally no. Standard re-roofing is not credit-eligible. Structural roof reinforcement directly required for solar mounting may be includable in the basis.' },
      { q: 'Income limits?', a: 'No income cap on 25D.' },
      { q: 'Are batteries paired with solar treated separately?', a: 'No — they go on the same Form 5695 Part I as solar. The credit is 30% of total cost including batteries.' },
      { q: 'Can I claim 25D and 25C in the same year?', a: 'Yes. They are separate credits with separate caps. 25D Part I (uncapped). 25C Part II (capped at $3,200).' },
    ],
  },
  {
    slug: 'how-to-claim-30d-ev-credit',
    title: 'How to Claim the 30D New EV Credit (2026)',
    metaTitle: 'How to Claim $7,500 EV Tax Credit 2026 (30D Point-of-Sale Guide)',
    description: 'Step-by-step guide to the federal 30D Clean Vehicle Credit — $7,500 transferable to dealer at point of sale. Income caps, MSRP limits, qualifying vehicles, stacking with state.',
    category: 'Federal',
    federalSlugs: ['30d-clean-vehicle-credit'],
    techSlugs: ['ev'],
    answerFirst:
      'To claim the federal 30D Clean Vehicle Credit on a new EV, you have two paths: transfer the credit to the dealer at point of sale (since January 2024) and take it as immediate cash off the price, or claim it on your tax return via IRS Form 8936. The credit is up to $7,500 split into $3,750 for critical-minerals sourcing and $3,750 for battery-components sourcing — vehicles get $3,750 or $7,500 based on qualification. Income caps apply: $300,000 MAGI married filing jointly, $225,000 head of household, $150,000 single. You can use the lower of prior tax year or delivery year MAGI. MSRP cap is $80,000 for SUVs, vans, and trucks; $55,000 for cars.',
    tldr: [
      '$7,500 transferable to dealer at point of sale (since Jan 2024)',
      'Income capped: $300k MFJ / $150k single MAGI',
      'Use lower of prior or current year MAGI — flexibility on a high-income year',
    ],
    sections: [
      { heading: 'Step 1: Confirm vehicle eligibility', body: 'Search fueleconomy.gov for the specific make/model/trim. The site lists current 30D status by VIN delivery date — vehicles can lose eligibility mid-year as battery sourcing changes.' },
      { heading: 'Step 2: Verify your income falls under the MAGI cap', body: 'Check both prior tax year and delivery year. You qualify if either year is under the cap. A high-income current year does not disqualify you if last year was under.' },
      { heading: 'Step 3: Decide POS transfer or claim at filing', body: 'Point-of-sale transfer applies the credit immediately to the purchase price — no waiting for refund. Claim-at-filing requires waiting until tax season. The math is identical.' },
      { heading: 'Step 4: Sign IRS Form 15400 at the dealer', body: 'If transferring at point of sale, the dealer files Form 15400 within 3 days of sale. You sign and keep a copy. The dealer must be registered with IRS Energy Credits Online.' },
      { heading: 'Step 5: File IRS Form 8936', body: 'Whether transferred or claimed at filing, you must report 30D on Form 8936 with your tax return. This confirms eligibility and prevents double-claims.' },
      { heading: 'Step 6: If income exceeds cap, repay', body: 'If your MAGI exceeds the cap in both relevant years, you must repay the full credit on your tax return. POS transfer does not waive the income test.' },
    ],
    faq: [
      { q: 'Can I claim 30D for a leased EV?', a: 'No — but the leasing company can claim the commercial 45W EV credit and many pass it through as a "lease bonus." Check the lease quote.' },
      { q: 'Does state EV rebate reduce the federal credit?', a: 'No. State rebates do not reduce the 30D credit calculation (the credit is based on vehicle qualification, not net cost).' },
      { q: 'Can I claim 30D and 30C the same year?', a: 'Yes — different property. 30D for the vehicle, 30C for the home charger.' },
      { q: 'What if dealer charges over MSRP?', a: 'The MSRP cap is sticker price, not transaction price. Even if you pay over MSRP for a hot model, the vehicle is still eligible if MSRP is under the cap.' },
      { q: 'Used EV?', a: 'Used EVs use Section 25E ($4,000 cap, lower income limits). 30D is new only.' },
    ],
  },
  {
    slug: 'stacking-federal-state-rebates',
    title: 'Federal + State + Utility Rebate Stacking Rules (2026)',
    metaTitle: 'How to Stack Federal, State, Utility Rebates — Solar/Heat Pump/EV (2026)',
    description: 'Master guide to stacking federal credits with state and utility rebates. Which combinations cancel, which multiply, and the math behind every common stack.',
    category: 'Stacking',
    answerFirst:
      'Federal credits, state credits, and utility rebates generally stack — but the order of operations matters and a few combinations cancel each other. The key rule: state and utility rebates typically reduce the federal credit basis (net cost), while federal credits do NOT reduce state credit basis. So apply rebates first, then calculate state credits on full cost, then calculate federal credits on net cost. SRECs and performance-based incentives are revenue, not cost offsets — they do not reduce basis. The biggest "do not stack" rules: 25C and HEEHRA cannot apply to the same item (pick the higher), and 30D and commercial 45W cannot apply to the same vehicle.',
    tldr: [
      'Rebates first → state credits on full cost → federal credits on net cost',
      '25C and HEEHRA do NOT stack on same item — pick higher',
      'SRECs and PBIs are revenue, not basis-reducing',
    ],
    sections: [
      { heading: 'The Order of Operations', body: 'Step 1: Subtract utility rebates from total cost. Step 2: Subtract state rebates from remaining cost. Step 3: Calculate state tax credits on full pre-rebate cost (most states). Step 4: Calculate federal tax credits on the net cost (post-rebate). Step 5: Apply credits against tax owed in their respective filings.' },
      { heading: 'Solar Stack Example: California', body: '$25,000 8 kW solar + 13.5 kWh battery in San Francisco. SGIP General Market battery rebate = $2,025 → net basis $22,975. Federal 25D 30% = $6,892. State property tax exemption (no $ value, but ~$300/yr saved). Net cost $16,083 effectively, or 36% incentive coverage.' },
      { heading: 'Heat Pump Stack Example: New York', body: '$14,000 3-ton ducted ASHP in Buffalo. NYSERDA Clean Heat $4,500 → net basis $9,500. Federal 25C 30% = $2,000 cap. Total incentives $6,500 on $14,000. Income-qualified households add HEEHRA up to $8,000.' },
      { heading: 'EV Stack Example: New Jersey', body: '$42,000 new EV. Federal 30D $7,500 POS + Charge Up NJ $4,000 POS + sales-tax exemption ~$2,800 = $14,300 stacked. Effective price $27,700. State credits do not reduce 30D — vehicle qualifies on its own merits.' },
      { heading: 'What Does NOT Stack', body: '25C and HEEHRA on same item — pick the higher (HEEHRA wins for income-qualified, 25C wins for higher-income). 30D and 45W on same vehicle — buy or lease, not both. Federal 25D and commercial Section 48 ITC — residential or commercial, not both.' },
      { heading: 'What Does Not Reduce Basis', body: 'SREC payments (revenue, not cost offset). Performance-based incentives that flow over time. Net metering credits (utility billing, not incentive). Time-of-use rate savings. HOA assessments unrelated to install.' },
    ],
    faq: [
      { q: 'Why does my installer say the rebate "comes off the credit"?', a: 'Casual shorthand. What they mean: the rebate reduces the cost basis, which reduces the dollar value of the federal credit. The credit calculation method matters — always do the math, not the rule of thumb.' },
      { q: 'Does state credit reduce my federal credit?', a: 'No, in most states. State tax credits and federal tax credits operate independently. Only state CASH rebates and utility rebates reduce federal basis.' },
      { q: 'Does the federal credit reduce state credit basis?', a: 'No, in any state. Federal credits never reduce state credit basis.' },
      { q: 'How do I calculate the basis for a $20,000 solar install with a $2,000 utility rebate?', a: '$20,000 - $2,000 = $18,000 basis. Federal 25D 30% × $18,000 = $5,400 federal credit. State credit (if applicable) typically calculated on $20,000 pre-rebate cost.' },
    ],
  },
  {
    slug: 'solar-tax-credit-2026-complete-guide',
    title: 'Solar Tax Credit 2026: Complete Federal + State Guide',
    metaTitle: 'Solar Tax Credit 2026 Federal + State Complete Guide',
    description: 'Everything to know about the 30% federal solar tax credit in 2026 plus every state-level solar incentive ranked by total stacked value.',
    category: 'Technology',
    techSlugs: ['solar'],
    federalSlugs: ['25d-residential-clean-energy'],
    answerFirst:
      'The 30% federal solar tax credit (Section 25D) holds through 2032, then phases down to 26% in 2033 and 22% in 2034 before sunsetting unless Congress extends. State-level solar credits and rebates layer on top, with the most generous stacks in California, New York, Massachusetts, and New Jersey delivering 50%+ system cost coverage. Average 8 kW solar install costs $18,000–$24,000 in 2026, and after federal + state stacking most homeowners see net cost of $11,000–$15,000 with payback periods of 6–10 years depending on state and utility tariff.',
    tldr: [
      '30% federal through 2032 → 26% 2033 → 22% 2034 → 0% 2035 unless extended',
      'Best state stacks: NY (25% capped at $5,000), AZ ($1,000), CA (SGIP for batteries)',
      '8 kW system: $18k–$24k typical → net $11k–$15k after stacking',
    ],
    sections: [
      { heading: 'Federal 25D Solar Credit Mechanics', body: 'Section 25D Residential Clean Energy Credit pays 30% of total qualifying cost — equipment, labor, permitting, interconnection. No dollar cap. Non-refundable but unlimited carryforward. Standalone batteries 3+ kWh eligible since tax year 2023 (no solar prerequisite).' },
      { heading: 'Top State Solar Programs Ranked', body: '1. California — SGIP battery $150–$1,000/kWh + property tax exemption + DAC-SASH for income-qualified. 2. New York — 25% state credit (capped $5k) + NY-Sun upfront rebate + property tax exemption. 3. Massachusetts — SMART Tariff (declining-block production payments). 4. New Jersey — SREC market $200+/MWh + sales-tax exemption + property-tax exemption. 5. Maryland — Solar grant + property/sales tax exemptions. 6. Illinois — Illinois Shines SREC market + state rebate.' },
      { heading: 'Net Metering and Export Tariffs in 2026', body: 'Florida, Texas (REP-dependent), and most of the Southeast still allow 1:1 net metering. California moved to NEM 3.0 (avoided-cost export rates). New York uses VDER tariff. Hawaii uses customer-grid-supply (CGS+). Arizona uses Resource Comparison Proxy (RCP). The trend is away from 1:1 — battery storage becomes increasingly essential.' },
      { heading: 'Solar System Sizing for Maximum Stack', body: 'Federal 25D credits are uncapped, so larger systems generate larger credits. State caps (NY, AZ) constrain the state portion. Utility rebates often have system-size caps (Oncor, NY-Sun). Most homeowners maximize stack value with 6–10 kW systems plus 10–14 kWh battery.' },
    ],
    faq: [
      { q: 'Should I install solar before the 25D phasedown?', a: 'The 30% rate runs through 2032 — no rush from the federal side. Install timing should be driven by net metering policy in your state (some states are weakening tariffs) and contractor availability.' },
      { q: 'Can I claim 25D every year?', a: 'Yes, if you install separate qualifying property each year. Most homeowners claim once for solar, again later for battery upgrade, again later for geothermal — all under 25D.' },
      { q: 'Do leased solar systems get the 30% credit?', a: 'No. Leases disqualify the homeowner — the leasing company claims commercial Section 48 ITC instead. If buying matters for the credit, choose cash or loan over lease.' },
    ],
  },
  {
    slug: 'heat-pump-tax-credit-2026-complete-guide',
    title: 'Heat Pump Tax Credit 2026: Federal + State Stacking Guide',
    metaTitle: 'Heat Pump Tax Credit 2026 Federal + State Complete Guide',
    description: 'Complete guide to the federal 25C heat pump tax credit, IRA HEEHRA rebate, and every state-level heat pump program. Stacking math, eligibility, equipment requirements.',
    category: 'Technology',
    techSlugs: ['heat-pump'],
    federalSlugs: ['25c-energy-efficient-home-improvement', 'heehra-electrification-rebates'],
    answerFirst:
      'The federal 25C credit pays 30% of heat pump cost up to $2,000 per year through 2032, while the IRA HEEHRA rebate adds up to $8,000 for income-qualified households (≤150% Area Median Income). State programs in Massachusetts (Mass Save up to $10,000), New York (NYSERDA Clean Heat $1,500–$5,000 per ton), Maine (Efficiency Maine $8,000+), and Oregon (Energy Trust $1,800) deliver some of the strongest state-level stacks. The federal 25C and HEEHRA do NOT stack on the same equipment — choose the higher. Heat pumps must meet the highest CEE efficiency tier and equipment must include a manufacturer PIN starting tax year 2025.',
    tldr: [
      'Federal 25C: 30% up to $2,000/year — every year through 2032',
      'IRA HEEHRA: up to $8,000 (≤150% AMI) — does NOT stack with 25C on same item',
      'Best state stacks: MA Mass Save $10k, NY NYSERDA Clean Heat, ME Efficiency Maine',
    ],
    sections: [
      { heading: 'Federal 25C Heat Pump Mechanics', body: '30% of heat pump cost up to $2,000 per year. Cap resets each January. Equipment must meet highest CEE tier. Starting tax year 2025, manufacturer PIN required. Non-refundable, no carryforward.' },
      { heading: 'IRA HEEHRA Heat Pump Rebate', body: 'Up to $8,000 point-of-sale rebate for heat pumps under HEEHRA. Income-qualified: ≤80% AMI = 100% cost coverage; 80–150% AMI = 50% cost coverage. State energy office administered.' },
      { heading: 'Top State Heat Pump Programs', body: 'Mass Save (MA): up to $10,000 whole-home. NYSERDA Clean Heat (NY): $1,500–$5,000 per ton. Efficiency Maine: $8,000+ for cold-climate ASHP. Energy Trust of Oregon: $1,800. Mass Save also covers HPWH at $750 and ground-source at $4,500–$6,500.' },
      { heading: 'Equipment Requirements', body: 'Air-source heat pumps must meet highest CEE tier and be on NEEP Cold Climate ASHP list (for northern climates). HPWH must be ENERGY STAR. Ground-source must meet ENERGY STAR Geothermal specifications.' },
      { heading: 'Sizing and Capacity Notes', body: 'Heat pump rebate is typically per-ton (12,000 BTU/hr cooling). A 3-ton whole-home unit qualifies for 3× the per-ton rebate. Whole-home full-displacement installs qualify for higher tiers in MA and NY than partial-displacement.' },
    ],
    faq: [
      { q: '25C vs HEEHRA — which is better?', a: 'HEEHRA wins for income-qualified households (≤150% AMI) — up to $8,000 vs $2,000. 25C wins for higher-income because HEEHRA does not apply.' },
      { q: 'Cold-climate heat pump in northern states?', a: 'Required for state rebates in MA, NY, ME, MN, VT, NH. Check NEEP Cold Climate ASHP list. HSPF2 ratings of 8+ are typical for qualifying equipment.' },
      { q: 'Heat pump water heater stack with whole-home heat pump?', a: 'Yes. Both qualify under 25C $2,000 cap (combined). Both qualify under HEEHRA caps (separately — HPWH up to $1,750, heat pump up to $8,000).' },
    ],
  },
  {
    slug: 'ev-tax-credit-income-limits-2026',
    title: 'EV Tax Credit Income Limits 2026 (30D MAGI Cap Explained)',
    metaTitle: 'EV Tax Credit Income Limits 2026 — 30D MAGI Cap Guide',
    description: 'Complete breakdown of the federal 30D EV tax credit income limits, MAGI calculation, prior-year flexibility, and what happens if you exceed the cap.',
    category: 'Eligibility',
    federalSlugs: ['30d-clean-vehicle-credit'],
    techSlugs: ['ev'],
    answerFirst:
      'The federal 30D Clean Vehicle Credit caps eligibility at $300,000 Modified Adjusted Gross Income (MAGI) for married filing jointly, $225,000 for head of household, and $150,000 for single filers. The IRS allows you to use the lower of your prior tax year MAGI or the year of delivery — meaningful flexibility for high-income years. If you transfer the credit to the dealer at point of sale and later exceed the cap in both relevant years, you must repay the full credit on your tax return. The 25E used EV credit has tighter caps: $150,000 MFJ / $112,500 HoH / $75,000 single.',
    tldr: [
      '30D new EV: $300k MFJ / $225k HoH / $150k single MAGI',
      '25E used EV: $150k MFJ / $112,500 HoH / $75k single — half the new EV thresholds',
      'Use lower of prior year or current year — flexibility on a high-income year',
    ],
    sections: [
      { heading: 'What is MAGI?', body: 'Modified Adjusted Gross Income for 30D purposes is your AGI plus excluded foreign earned income, US territory income, and exclusions for income from Puerto Rico. For most US filers, MAGI equals AGI exactly.' },
      { heading: 'Prior-Year Flexibility', body: 'You qualify if either prior tax year OR delivery year MAGI is under the cap. Example: 2025 MAGI was $140,000 (single, under cap). 2026 MAGI is $180,000 (over cap). You can use 2025 MAGI to qualify for 2026 delivery 30D credit.' },
      { heading: 'Repayment Rules', body: 'If you transferred the credit at point of sale and later exceed the cap in both relevant years, you owe the full credit back on your tax return. The repayment is treated as additional tax owed, not as a refund clawback.' },
      { heading: 'Filing Status Considerations', body: 'Married filing separately uses the single threshold ($150,000) — meaningful for high-income couples in community-property states. Head of household ($225,000) is between single and MFJ.' },
    ],
    faq: [
      { q: 'What if I am right at the cap?', a: 'Hard line — $1 over disqualifies. Use prior-year MAGI if it is lower, or take strategies to lower MAGI in delivery year (HSA contribution, IRA contribution, etc.).' },
      { q: 'Does my spouse income count?', a: 'For MFJ, total household MAGI applies against the $300,000 cap. For MFS, individual MAGI applies against $150,000 cap.' },
      { q: 'Can I gift my credit to a higher-income relative?', a: 'No. Credit eligibility is tied to the buyer of record on the sales contract.' },
    ],
  },
  {
    slug: 'heehra-eligibility-2026',
    title: 'HEEHRA Eligibility 2026: Income Limits, AMI Calculation, State Rollout',
    metaTitle: 'HEEHRA Eligibility 2026 — Income Limits, AMI, State Rollout Status',
    description: 'How to determine HEEHRA eligibility — Area Median Income tiers, household size factors, state-by-state rollout status, and how to apply.',
    category: 'Eligibility',
    federalSlugs: ['heehra-electrification-rebates'],
    answerFirst:
      'HEEHRA — the High-Efficiency Electric Home Rebate Act — is income-qualified at 150% Area Median Income (AMI) or below. Households at or below 80% AMI receive 100% of project costs covered up to the program caps. Households between 80% and 150% AMI receive 50% coverage. AMI varies by county and household size — HUD publishes annual AMI tables at huduser.gov. State energy offices administer HEEHRA and most have launched in 2025 or are launching in 2026.',
    tldr: [
      '≤80% AMI: 100% project cost coverage up to caps',
      '80–150% AMI: 50% project cost coverage',
      'County and household size determine AMI threshold',
    ],
    sections: [
      { heading: 'How to Find Your AMI', body: 'HUD publishes annual AMI tables by county and family size at huduser.gov/portal/datasets/il.html. Most state energy office HEEHRA portals include an AMI lookup tool — enter your county and household size to see thresholds.' },
      { heading: 'Household Size Adjustments', body: 'AMI is published for 4-person households as the baseline. Larger households get higher thresholds. Standard adjustments: 1-person 70% of 4-person AMI; 2-person 80%; 3-person 90%; 4-person 100%; 5-person 108%; 6-person 116%.' },
      { heading: 'State Rollout Status (Early 2026)', body: 'Launched and operational: California, New York, Maine, Massachusetts, Oregon, Washington, Colorado, Wisconsin, New Mexico, Michigan, Hawaii, DC. In pilot or partial: Illinois, New Jersey, Maryland, Connecticut, Minnesota, Vermont, Rhode Island. Approved but not yet open: most remaining states.' },
      { heading: 'How to Apply', body: 'Visit your state energy office HEEHRA portal. Verify income via tax return upload. Receive eligibility determination. Choose a participating contractor from the state list. Reserve rebate before installation. Contractor applies rebate as point-of-sale price reduction.' },
    ],
    faq: [
      { q: 'What if my income is right at 150% AMI?', a: 'You qualify for 50% cost coverage. Document carefully — state portals require recent tax returns.' },
      { q: 'Can renters benefit?', a: 'Indirectly. Landlords of buildings where 50%+ of tenants meet income caps qualify for HEEHRA on building-wide upgrades.' },
      { q: 'Does AMI change every year?', a: 'Yes — HUD publishes new AMI tables annually each spring. Check current year tables before applying.' },
      { q: 'Do I have to use my tax return?', a: 'Most states accept tax return as the primary proof. Recent pay stubs or SSI verification may also qualify.' },
    ],
  },
  {
    slug: 'when-do-rebates-expire',
    title: 'When Do Energy Rebates and Tax Credits Expire? (2026 Calendar)',
    metaTitle: 'Energy Rebate Expiration Dates 2026 — Federal, State, IRA Calendar',
    description: 'Complete calendar of expiration dates for every major federal credit and state rebate program. 25C, 25D, 30D, HEEHRA, NY-Sun, Mass Save, and more.',
    category: 'Process',
    answerFirst:
      'Most federal energy credits run through 2032: 25C (heat pumps and efficiency), 25D (solar/battery/geothermal — phasing down 2033–2034), 30C (EV chargers), 30D (new EVs), 25E (used EVs), and 45L (builder credit). HEEHRA and HOMES rebates run through September 30, 2031, or until state allocation depletes. State programs expire on their own schedules — most reset annually. The most urgent state deadlines in 2026: SGIP rolling step-down, NY-Sun annual block resets, and Charge Up NJ October exhaustion.',
    tldr: [
      'Most federal credits: through Dec 31, 2032',
      '25D phasedown: 30% (2032) → 26% (2033) → 22% (2034) → 0% (2035)',
      'HEEHRA/HOMES: through Sep 30, 2031 or state allocation exhaustion',
    ],
    sections: [
      { heading: 'Federal Credit Expiration Calendar', body: '25C: December 31, 2032. 25D: 30% through 2032, 26% in 2033, 22% in 2034, 0% from 2035 unless extended. 30C: December 31, 2032. 30D: December 31, 2032. 25E: December 31, 2032. 45L: December 31, 2032. HEEHRA: September 30, 2031 or state allocation depleted. HOMES: September 30, 2031 or state allocation depleted.' },
      { heading: 'State Rebate Annual Resets', body: 'NY-Sun: annual MW block step-down. SGIP: rolling reservation block step-down. Mass Save: annual program year. Charge Up NJ: typically opens July, depletes by October. Oncor Solar PV Standard Offer: annual cap reset January.' },
      { heading: 'Risks to Federal Credits', body: 'Congressional repeal is possible — IRA provisions are subject to legislative action. As of early 2026 there is no active repeal effort but tax-and-budget reconciliation cycles can target credits.' },
      { heading: 'How to Lock in Current Rates', body: 'Equipment is "placed in service" when installed and operational. The credit rate is set by placed-in-service date, not contract date. If installing in late 2032, ensure operational status before December 31 to lock in 30%.' },
    ],
    faq: [
      { q: 'If I sign contract in 2032 but install completes in 2033, what rate?', a: '25D applies the rate based on placed-in-service date. A January 2033 install gets 26%, even with a 2032 contract.' },
      { q: 'Can the 25D phasedown be extended?', a: 'Yes — Congress has historically extended solar credits multiple times. Industry lobbying for extension is active. No guarantee.' },
      { q: 'What happens if HEEHRA state allocation runs out?', a: 'Once a state exhausts its IRA allocation, no new applications accepted. Some states have applied for additional federal allocation if available.' },
    ],
  },
  {
    slug: 'can-renters-claim-energy-credits',
    title: 'Can Renters Claim Energy Credits? (2026 Rules)',
    metaTitle: 'Can Renters Claim Energy Tax Credits 2026? — Complete Renter Guide',
    description: 'What renters can and cannot claim from federal energy credits. Community solar, EV charger, EV vehicle credit options for renters in 2026.',
    category: 'Eligibility',
    answerFirst:
      'Renters cannot claim the federal 25C or 25D credits — both require homeownership. Renters CAN claim the federal 30D ($7,500 new EV) and 25E ($4,000 used EV) credits because vehicles are not tied to property ownership. Renters can claim the 30C EV charger credit if their landlord allows installation and the renter pays for the equipment. HEEHRA can indirectly benefit renters when landlords of buildings with 50%+ income-qualified tenants apply for building-wide upgrades. Community solar shares are not federal-credit-eligible but typically save renters 5–15% on utility bills.',
    tldr: [
      'EV credits (30D, 25E): renters CAN claim',
      'Solar/heat pump credits (25C, 25D): renters CANNOT claim',
      'Community solar saves 5–15% on bills, no federal credit',
    ],
    sections: [
      { heading: 'EV Credits: Fully Available to Renters', body: 'The 30D ($7,500 new EV) and 25E ($4,000 used EV) credits are tied to vehicle ownership, not property. Renters claim normally on Form 8936. Point-of-sale transfer at dealer works the same regardless of housing status.' },
      { heading: '30C Charger Credit: Available with Landlord Permission', body: 'If the landlord permits charger installation and the renter pays for equipment and labor, the renter claims 30C (30% up to $1,000) on their tax return. Census tract eligibility still applies.' },
      { heading: 'HEEHRA: Indirect Benefit via Landlord', body: 'Landlords whose buildings have 50%+ tenants meeting ≤150% AMI qualify for HEEHRA on building-wide upgrades. The landlord captures the rebate but tenants benefit from lower bills and improved comfort.' },
      { heading: 'Community Solar Subscriptions', body: 'Community solar shares (off-site solar farms with subscriber bill credits) are available in 22+ states. They do NOT qualify for federal 25D or state solar credits because the subscriber does not own the equipment. Typical savings 5–15% on utility bills.' },
      { heading: 'EV TOU Rate Plans', body: 'Renters with EVs benefit from utility-specific TOU rate plans. PG&E EV2-A, ConEd SmartCharge NY, ComEd Hourly Pricing all offer reduced overnight rates that cut EV charging costs 30–50%.' },
    ],
    faq: [
      { q: 'My apartment has solar — can I claim it?', a: 'No. The building owner claims commercial Section 48 ITC. Tenant utility savings flow through but no tax credit.' },
      { q: 'Can I install a portable plug-in charger and claim 30C?', a: 'Plug-in Level 2 chargers qualify if you own the unit and address is in eligible census tract. Renter status is fine.' },
      { q: 'What if I rent a single-family home?', a: 'You still cannot claim 25C/25D — homeowner status required. EV credits remain available.' },
    ],
  },
  {
    slug: 'solar-rebate-vs-tax-credit',
    title: 'Solar Rebate vs Tax Credit: What is the Difference? (2026)',
    metaTitle: 'Solar Rebate vs Tax Credit 2026 — Which is Better? Stacking Math',
    description: 'The difference between rebates and tax credits explained — and how stacking interaction works for solar, heat pump, and battery installs.',
    category: 'Process',
    techSlugs: ['solar', 'battery', 'heat-pump'],
    answerFirst:
      'A rebate is cash off the price of a project — applied at point of sale or as a check after install. A tax credit reduces your tax bill at filing. The dollar value can be similar but the timing and tax interaction differ. Rebates reduce the federal tax credit basis (you calculate the credit on net cost, not gross). Tax credits do not reduce other tax credit basis. Rebates require no tax liability to use; tax credits only help if you owe enough tax in the install year (with carryforward in some cases). For most homeowners, both stack — pick contractors and timing to maximize the combined value.',
    tldr: [
      'Rebate: cash off price (immediate or check)',
      'Credit: reduces tax bill at filing — needs tax liability to use',
      'Rebates reduce federal credit basis; credits do not reduce each other',
    ],
    sections: [
      { heading: 'Rebates Defined', body: 'Cash payment from utility, state energy office, or program administrator. Applied either as point-of-sale price reduction or check after install. Examples: SGIP battery rebate (CA), NY-Sun upfront (NY), Mass Save heat pump (MA), Charge Up NJ (NJ). Rebates do not require tax liability — they pay regardless of your tax situation.' },
      { heading: 'Tax Credits Defined', body: 'Reduction in tax owed at filing. Federal examples: 25C heat pump, 25D solar/battery, 30D EV, 30C charger. State examples: NY 25% solar credit, AZ 25% solar credit. Most credits are non-refundable — only useful if you owe tax. 25D allows unlimited carryforward; 25C does not.' },
      { heading: 'How They Interact', body: 'State and utility rebates reduce the federal cost basis. Federal credits do not reduce state credit basis (typically). SREC payments and performance-based incentives are revenue, not basis-reducing. The order of operations: rebates first, then state credits on full cost, then federal credits on net cost.' },
      { heading: 'Worked Example: $20,000 Solar in NJ', body: 'Step 1: NJ has no upfront solar rebate (uses SREC market). Skip. Step 2: No NJ state solar credit. Skip. Step 3: Federal 25D 30% × $20,000 = $6,000. Step 4: SREC market generates ~$1,200/year revenue (taxable income, not basis-reducing). Net cost $14,000 + ~$1,200/year SREC.' },
      { heading: 'Worked Example: $20,000 Solar in NY', body: 'Step 1: NY-Sun rebate $1,400 → basis $18,600. Step 2: NY state credit 25% × $20,000 = $5,000 (capped). Step 3: Federal 25D 30% × $18,600 = $5,580. Total credits + rebate = $11,980. Net cost $8,020.' },
    ],
    faq: [
      { q: 'I have low tax liability — should I take the rebate or credit?', a: 'Rebates pay regardless of tax situation. If you have low federal tax owed, prioritize rebate-heavy programs. 25D allows carryforward, so it eventually helps.' },
      { q: 'Are rebates taxable?', a: 'Generally no — they reduce the cost of property and are treated as price adjustments. SREC sales are taxable income.' },
      { q: 'Does the IRA HEEHRA count as rebate or credit?', a: 'Rebate. HEEHRA is a state-administered cash rebate, not a tax credit.' },
    ],
  },
  {
    slug: 'ev-charger-tax-credit-30c',
    title: 'EV Charger Tax Credit (30C) 2026: Census Tract and Stacking',
    metaTitle: 'EV Charger Tax Credit 30C 2026 — Census Tract Lookup Guide',
    description: 'How the federal 30C EV charger credit works in 2026, why census tract matters, and how to stack with state and utility charger rebates.',
    category: 'Federal',
    federalSlugs: ['30c-alternative-fuel-vehicle-refueling-property'],
    techSlugs: ['ev'],
    answerFirst:
      'The federal 30C Alternative Fuel Vehicle Refueling Property Credit pays 30% of the cost of a home EV charger up to $1,000 — but as of 2024, the property must be located in an eligible census tract (low-income community or non-urban area). Use the DOE Argonne 30C eligibility lookup tool to verify your address before installation. State and utility EV charger rebates do not have the census tract restriction and pay $250–$1,000 in many programs. Total stack of federal 30C + state/utility rebate routinely covers 80–100% of typical Level 2 home charger install cost.',
    tldr: [
      '30% federal up to $1,000 — eligible census tracts only since 2024',
      'State/utility charger rebates have no census tract limit',
      'DOE Argonne 30C lookup tool verifies eligibility',
    ],
    sections: [
      { heading: 'Census Tract Eligibility Since 2024', body: 'The Inflation Reduction Act tightened 30C eligibility starting 2024. Property must be in an eligible census tract — defined as low-income community or non-urban area (under 50,000 population). Roughly 70% of US census tracts qualify, but most dense urban areas do not.' },
      { heading: 'How to Verify Your Address', body: 'Visit afdc.energy.gov/laws/30C-tax-credit (DOE Argonne eligibility tool). Enter your address. Tool returns eligibility based on most recent census tract designations. Save a screenshot dated the day of charger purchase or install.' },
      { heading: 'Stacking with State and Utility Rebates', body: 'State and utility EV charger rebates are independent of 30C census tract restriction. PSE&G EV (NJ) pays up to $1,500. SCE Charge Ready Home (CA) pays $1,000. ConEd SmartCharge (NY) pays $500. Most utilities offer some level of rebate.' },
      { heading: 'What the Credit Covers', body: 'Equipment cost, installation labor, and electrical panel upgrade portion directly required for the charger. General panel replacement does not qualify under 30C.' },
    ],
    faq: [
      { q: 'My address is not in an eligible census tract — anything I can claim?', a: 'No federal 30C, but state and utility rebates are still available. Many utilities pay $250–$1,000 with no census tract restriction.' },
      { q: 'Can I claim 30C for a renter charger install?', a: 'Yes if you own the equipment, paid for install, and the address is in eligible census tract.' },
      { q: 'Does 30C apply to commercial chargers?', a: 'Yes with a higher $100,000 cap — but eligibility rules differ. Residential coverage is what this guide addresses.' },
    ],
  },
  {
    slug: 'used-ev-tax-credit-25e',
    title: 'Used EV Tax Credit (25E) 2026: $4,000 on Used Electric Vehicles',
    metaTitle: 'Used EV Tax Credit 25E 2026 — $4,000 Complete Guide',
    description: 'Complete guide to the federal 25E used EV credit — $4,000 toward a used electric vehicle. Eligibility, dealer requirements, income caps, transferable POS.',
    category: 'Federal',
    federalSlugs: ['25e-used-clean-vehicle-credit'],
    techSlugs: ['ev'],
    answerFirst:
      'The federal 25E Previously-Owned Clean Vehicle Credit pays 30% of sale price up to $4,000 toward a used EV — making this one of the most underused incentives in the country. The vehicle must be at least 2 model years old, sale price $25,000 or less, purchased from an IRS-registered dealer (not a private party), and the buyer must meet tighter income caps than 30D ($150,000 MFJ / $75,000 single). The credit is transferable to the dealer at point of sale, just like 30D — most buyers transfer to immediately reduce the down payment.',
    tldr: [
      'Up to $4,000 (30% of sale price) on used EVs ≤$25,000',
      'Income caps: $150k MFJ / $112,500 HoH / $75k single — half of 30D',
      'Vehicle 2+ model years old, dealer purchase, first qualifying transfer',
    ],
    sections: [
      { heading: 'Vehicle Eligibility', body: 'Sale price $25,000 or less. At least 2 model years older than the year of purchase. First qualifying transfer since IRA enactment (Aug 2022) — once a vehicle has been claimed under 25E, no future 25E claim possible. Must be on fueleconomy.gov used EV list.' },
      { heading: 'Dealer Requirements', body: 'The dealer must be registered with IRS Energy Credits Online. Private-party sales do not qualify. Verify before deposit — only registered dealers can issue 25E.' },
      { heading: 'Income Caps', body: '$150,000 MAGI married filing jointly, $112,500 head of household, $75,000 single. Half the 30D thresholds. Use lower of prior year or delivery year.' },
      { heading: 'Transfer at Point of Sale', body: 'Same mechanic as 30D. Dealer files Form 15400 within 3 days. You sign and keep a copy. Credit applied immediately to sale price. Must report on Form 8936 with tax return.' },
      { heading: 'Stacking with State Used-EV Programs', body: 'California, Massachusetts, and New York have state-level used-EV rebates that stack with 25E. Check state programs — these add $500 to $4,500 typical.' },
    ],
    faq: [
      { q: 'What if the used EV had a previous 25E claim?', a: 'Disqualified. 25E is per-VIN once across the vehicle lifetime since IRA enactment.' },
      { q: 'Can I claim 25E from a private-party sale?', a: 'No. 25E requires an IRS-registered dealer transaction.' },
      { q: 'How often can I claim 25E?', a: 'Once every three tax years.' },
    ],
  },
  {
    slug: 'low-income-energy-rebates',
    title: 'Low-Income Energy Rebates 2026: HEEHRA, Weatherization, LIHEAP',
    metaTitle: 'Low-Income Energy Rebates 2026 — HEEHRA, WAP, LIHEAP Complete Guide',
    description: 'Complete guide to low-income energy programs — HEEHRA, Weatherization Assistance Program, LIHEAP, and state-specific income-qualified incentives.',
    category: 'Eligibility',
    federalSlugs: ['heehra-electrification-rebates', 'homes-energy-efficiency-rebates'],
    answerFirst:
      'Low-income households (≤80% Area Median Income) qualify for the most generous tier of US energy rebate programs. HEEHRA covers 100% of project costs up to $14,000 for electrification (heat pumps, induction stoves, electric panels). The Weatherization Assistance Program (WAP) provides free home weatherization (insulation, air sealing, HVAC tune-up) — administered by state energy offices through community action agencies. LIHEAP provides bill payment assistance during high-cost seasons. Many states layer additional income-qualified solar programs (DAC-SASH in CA, Affordable Solar in NY).',
    tldr: [
      'HEEHRA ≤80% AMI: 100% project cost coverage up to $14,000',
      'WAP: free weatherization (no income contribution required)',
      'LIHEAP: bill payment assistance during high-cost seasons',
    ],
    sections: [
      { heading: 'HEEHRA at ≤80% AMI', body: '100% cost coverage up to program caps: heat pump $8,000, HPWH $1,750, induction stove $840, panel upgrade $4,000, wiring $2,500, insulation/air sealing $1,600, dryer $840. Total cap $14,000 per household.' },
      { heading: 'Weatherization Assistance Program', body: 'Free home weatherization administered by state energy offices through ~700 community action agencies. Income limit ≤200% Federal Poverty Level (varies by state). Average $7,200 per home. Includes insulation, air sealing, HVAC tune-up, lighting, water heater replacement.' },
      { heading: 'LIHEAP Bill Assistance', body: 'Low Income Home Energy Assistance Program provides bill payment help during high-heating or high-cooling months. Income limit varies by state (typically ≤150% FPL). Apply through state LIHEAP office.' },
      { heading: 'State Income-Qualified Solar Programs', body: 'California: DAC-SASH (Disadvantaged Communities Single-Family Affordable Solar Homes) — up to $7/W upfront. New York: Affordable Solar — $0.80–$1.00/W upfront via NY-Sun. New Jersey: Solar for All. Massachusetts: Mass Save Income-Eligible Solar.' },
      { heading: 'How Programs Stack for Low-Income Households', body: 'WAP for envelope upgrades + HEEHRA for electrification + DAC-SASH (or state equivalent) for solar = entire energy retrofit funded. Federal credits add value but only if income-qualified household has tax liability.' },
    ],
    faq: [
      { q: 'Can I do both WAP and HEEHRA?', a: 'Yes. Different programs targeting different upgrades. Most state programs coordinate so both can apply.' },
      { q: 'Do I have to apply through one specific portal?', a: 'No — each program has its own portal and application. State energy office websites typically link all programs together.' },
      { q: 'What if I am between 80% and 150% AMI?', a: 'You qualify for HEEHRA at 50% cost coverage. Federal 25C and 25D still apply normally.' },
    ],
  },
  {
    slug: 'solar-loan-vs-cash',
    title: 'Solar Loan vs Cash 2026: Tax Credit Eligibility, Rate Comparison',
    metaTitle: 'Solar Loan vs Cash 2026 — Tax Credit, APR, Total Cost Comparison',
    description: 'How financing affects 25D solar credit eligibility, current loan APR ranges, total interest cost, and breakeven vs cash purchase.',
    category: 'Process',
    techSlugs: ['solar', 'battery'],
    answerFirst:
      'Both cash purchase and solar loans qualify for the federal 25D credit (30% uncapped) — the IRS treats financed solar identically to cash purchase. The choice between cash and loan is purely financial: solar loan APRs in 2026 range 6.49% to 9.99% for prime credit. Total interest on a $20,000 10-year solar loan at 7.49% is approximately $8,300. Cash beats loan unless your alternative investment returns exceed the loan APR after taxes. Solar leases and PPAs do NOT qualify for 25D — leasing companies claim commercial Section 48 ITC instead.',
    tldr: [
      'Loan and cash both qualify for federal 25D (lease/PPA do NOT)',
      'Current solar loan APR: 6.49–9.99% for prime credit',
      'Cash beats loan unless alternative investment returns > loan APR after taxes',
    ],
    sections: [
      { heading: 'Why Loan and Cash Both Qualify', body: 'The IRS considers solar loan installs to be homeowner-owned just like cash. The lender is providing the funds, but the homeowner takes title to the equipment and claims the credit. Form 5695 makes no distinction.' },
      { heading: 'Why Lease and PPA Do NOT Qualify', body: 'Solar leases and PPAs leave equipment ownership with the leasing company. The leasing company claims commercial Section 48 ITC and typically passes some savings through as lower lease payments. The homeowner cannot claim 25D.' },
      { heading: 'Current Solar Loan APR (2026)', body: 'Prime credit (FICO 720+): 6.49–8.99%. Mid credit (660–720): 8.99–13.99%. Lenders include Sungage, Goodleap, EnerBank, Dividend, Sunlight Financial, Mosaic. State green banks (CT, NY, OH) offer subsidized rates 3.49–6.99%.' },
      { heading: 'Cash vs Loan Math', body: '$20,000 system. Cash: $20,000 out, $6,000 federal credit at filing → $14,000 net. Loan at 7.49% over 10 years: ~$235/mo, total interest $8,300. After credit applied to loan principal in year 1 (most lenders allow), effective loan balance ~$14,000. Total cost $14,000 + $5,800 remaining interest = ~$19,800 over 10 years.' },
      { heading: 'Subsidized State Loan Programs', body: 'NYSERDA On-Bill Recovery Loan: 3.49–6.49% repaid via utility bill. Mass Save HEAT Loan: 0% APR up to $50,000. CT Smart-E Loan: 4.49–6.99%. CSPM Direct Pay (CO): 4.49%.' },
    ],
    faq: [
      { q: 'Can I refinance a solar loan into my mortgage?', a: 'Sometimes — depends on lender and PACE-style structure. Mortgage refinance typically requires PACE payoff first.' },
      { q: 'Does the federal credit apply to interest paid?', a: 'No. The credit basis is equipment + install + permitting + interconnection. Interest is not includable.' },
      { q: 'Solar loan vs HELOC — which is better?', a: 'HELOC typically lower APR (5.99–8.99%) but variable. Solar loan fixed-rate. HELOC interest may be tax-deductible if used for home improvement; solar loan interest is generally not.' },
    ],
  },
  {
    slug: 'utility-rebate-finder-2026',
    title: 'How to Find Your Utility Rebate (2026 Finder Guide)',
    metaTitle: 'Utility Rebate Finder 2026 — How to Find Your Local Energy Rebates',
    description: 'Step-by-step guide to finding every utility rebate you qualify for — from solar and battery to heat pump and EV charger rebates.',
    category: 'Process',
    answerFirst:
      'Most US utilities run rebate programs but they are not advertised consistently. The fastest path: visit DSIRE (programs.dsireusa.org) — the federal/state/utility incentive database — and filter by your zip code and technology. Cross-check with your utility website Energy Programs section. For income-qualified rebates, check your state energy office HEEHRA portal. For EV charger and battery rebates, check your specific utility (PG&E, SCE, ConEd, etc.) since these vary widely.',
    tldr: [
      'Start at DSIRE — programs.dsireusa.org',
      'Cross-check utility website Energy Programs section',
      'State energy office for HEEHRA + state-level rebates',
    ],
    sections: [
      { heading: 'Step 1: DSIRE Database Lookup', body: 'Visit programs.dsireusa.org. Enter your zip code. Filter by technology (solar, heat pump, EV, battery, geothermal). Returns federal, state, and utility programs for your area. DSIRE updates roughly weekly but lags utility program changes by 4–8 weeks.' },
      { heading: 'Step 2: Your Utility Website', body: 'Most utilities have an "Energy Programs," "Save Energy," or "Rebates" section. Major examples: pge.com/savings, sce.com/rebates, coned.com/savings, duke-energy.com/rebates. Look for residential rebate landing pages.' },
      { heading: 'Step 3: State Energy Office', body: 'Your state energy office administers HEEHRA, HOMES, and any state-level cash rebates. Search "[state name] energy office HEEHRA." Most have a unified application portal.' },
      { heading: 'Step 4: ClaimWatt State and Tech Pages', body: 'For curated, current rebate stacks by state and technology, use the state hub pages on ClaimWatt — federal + state + top utility programs in one view.' },
      { heading: 'Step 5: Installer Quotes', body: 'Reputable installers know local rebates and apply them as point-of-sale. Get 3 quotes — installer rebate knowledge is uneven, and one installer may have access to a program another does not.' },
    ],
    faq: [
      { q: 'Why does DSIRE not show all programs?', a: 'DSIRE depends on volunteer reporting from program administrators. Newly launched or modified programs may lag 4–8 weeks. Always cross-check with utility direct.' },
      { q: 'Are rebate amounts negotiable?', a: 'No — utility and state rebates are program-defined. Installer "discount" claims that exceed published rebate amounts are typically marketing, not real.' },
      { q: 'How often do utility rebates change?', a: 'Annually for most. Some have rolling step-downs (NY-Sun, SGIP) that change mid-year as funds deplete.' },
    ],
  },
  {
    slug: 'battery-storage-tax-credit',
    title: 'Battery Storage Tax Credit 2026: Standalone Battery Federal + State',
    metaTitle: 'Battery Storage Tax Credit 2026 — Federal 25D + State Stack',
    description: 'How the federal 25D battery storage credit works for standalone batteries (no solar required) plus the best state-level battery rebates.',
    category: 'Technology',
    techSlugs: ['battery'],
    federalSlugs: ['25d-residential-clean-energy'],
    answerFirst:
      'Standalone home batteries (3 kWh or larger) qualify for the federal 25D credit (30% of cost, no cap) since tax year 2023 — no solar prerequisite required. State-level battery rebates layer on top: California SGIP pays $150–$1,000 per kWh, Massachusetts ConnectedSolutions pays demand-response performance payments, Connecticut Energy Storage Solutions pays $200/kWh, Hawaii Battery Bonus pays $850 per battery. Tesla Powerwall 3 (13.5 kWh, ~$13,000 installed) typically nets $3,900 federal + $2,000–$13,500 state depending on tier.',
    tldr: [
      'Standalone batteries 3+ kWh: federal 25D 30% (no solar required)',
      'Best state stacks: CA SGIP ($150–$1,000/kWh), MA ConnectedSolutions, CT $200/kWh, HI $850/battery',
      'Powerwall 3 typical net cost: $4,000–$8,500 with full stacking',
    ],
    sections: [
      { heading: 'Federal 25D Battery Mechanics', body: 'Standalone batteries with capacity ≥3 kWh qualify under 25D since tax year 2023 (IRA expansion). Credit is 30% of total cost — equipment, installation, electrical work — with no cap. Carryforward allowed.' },
      { heading: 'Top State Battery Programs', body: 'California SGIP: $150 (General) / $850 (Equity) / $1,000 (Equity Resiliency) per kWh. Massachusetts ConnectedSolutions: ~$50/kW summer peak event payment, ~$5/kW winter, multi-year. Connecticut Energy Storage Solutions: $200/kWh upfront + $115/kW performance. Hawaii Battery Bonus: $850/battery + grid services revenue. Vermont Green Mountain Power Resilient Home: $10,500 lease (Powerwall) — no credit applies.' },
      { heading: 'Critical-Load Backup Configuration', body: 'For the federal credit and most state rebates, the battery must connect at the main panel level — backup of critical loads only (subpanel) is also eligible. Whole-home backup requires correctly-sized battery and inverter.' },
      { heading: 'VPP and Performance Payment Stacking', body: 'Tesla Powerwall VPP, Sunrun Hawaii VPP, ConnectedSolutions (MA), and OhmConnect (CA) pay ongoing performance revenue ($100–$600/year typical). VPP enrollment may have lock-in periods — read terms.' },
    ],
    faq: [
      { q: 'Can I claim 25D on a battery I add years after solar?', a: 'Yes. Each battery install is a separate qualifying property under 25D. You can claim 25D for solar in 2024 and again for battery in 2026.' },
      { q: 'What is the 3 kWh minimum for 25D?', a: 'Capacity must be 3 kWh or greater. Most residential batteries (Powerwall, Enphase IQ, LG ESS, FranklinWH) exceed this easily.' },
      { q: 'Does battery rebate reduce federal credit?', a: 'Yes. SGIP and similar cash rebates reduce the federal 25D basis.' },
    ],
  },
  {
    slug: 'geothermal-tax-credit',
    title: 'Geothermal Heat Pump Tax Credit 2026: Federal 25D + State',
    metaTitle: 'Geothermal Tax Credit 2026 — Federal 25D + State Stack',
    description: 'How the federal 25D geothermal heat pump credit works plus the best state-level geothermal rebates and their stacking math.',
    category: 'Technology',
    techSlugs: ['geothermal'],
    federalSlugs: ['25d-residential-clean-energy'],
    answerFirst:
      'Geothermal heat pumps qualify under federal 25D (30% of total cost, no cap, carryforward allowed). State-level geothermal programs are particularly strong in NY (NYSERDA Clean Heat $1,500/ton + $3,000 base), MA (Mass Save $4,500–$6,500), MD (Clean Energy Grant), IA (state tax credit), and IN (CenterPoint GeoSmart). Operating savings are 50–70% vs propane and 25–50% vs natural gas — making total payback 8–14 years on a $25,000–$40,000 install with full stacking.',
    tldr: [
      'Federal 25D: 30% uncapped on geothermal (carryforward allowed)',
      'Top state stacks: NY NYSERDA Clean Heat (~$7,500 typical), MA Mass Save ($4.5–6.5k), MD Clean Energy Grant',
      'Operating savings 50–70% vs propane; 25–50% vs gas',
    ],
    sections: [
      { heading: 'Federal 25D Geothermal Mechanics', body: 'Closed-loop, open-loop, and pond/lake systems all qualify. Equipment, ground loop installation, and indoor unit are all includable in basis. ENERGY STAR Geothermal certification required.' },
      { heading: 'Top State Geothermal Programs', body: 'NY NYSERDA Clean Heat Geothermal: $1,500/ton + $3,000 base (~$7,500 for 3-ton system). MA Mass Save Ground Source Heat Pump: $4,500–$6,500. MD Clean Energy Grant: up to $3,000. IA Geothermal Tax Credit: 5% state credit. IN CenterPoint GeoSmart: $1,500–$3,000. NJ Clean Energy Program: $4,000–$6,000.' },
      { heading: 'Install Cost Breakdown', body: '3-ton ground-source heat pump in 2026: $25,000–$40,000 depending on ground loop type (vertical bore most expensive, horizontal trench cheapest, pond/lake cheapest if applicable). Indoor unit $5,000–$8,000. Ground loop $15,000–$30,000. Labor $5,000–$8,000.' },
      { heading: 'Operating Cost Savings', body: 'COP 3.5–4.5 for geothermal vs 2.5–3.5 for cold-climate ASHP. Heating cost ~$0.04–$0.07 per delivered BTU vs $0.10–$0.15 propane and $0.06–$0.10 gas. Cooling cost roughly half of conventional AC.' },
    ],
    faq: [
      { q: 'Does HEEHRA cover geothermal?', a: 'No, separately. HEEHRA covers air-source heat pumps under the $8,000 cap. Geothermal is its own track typically through state programs.' },
      { q: 'Is the 25C credit applicable to geothermal?', a: 'No — geothermal goes under 25D, not 25C. Different form (Part I vs Part II).' },
      { q: 'How long does geothermal installation take?', a: '5–14 days typical. Ground loop installation 2–7 days, indoor connection 2–3 days, commissioning 1–2 days.' },
    ],
  },
  {
    slug: 'heat-pump-water-heater-rebate',
    title: 'Heat Pump Water Heater Rebate 2026: Federal + State Stack',
    metaTitle: 'Heat Pump Water Heater Rebate 2026 — Federal + State Stack Guide',
    description: 'Federal 25C, IRA HEEHRA, and state-level heat pump water heater rebates — the full stack and which combinations are best.',
    category: 'Technology',
    techSlugs: ['heat-pump'],
    federalSlugs: ['25c-energy-efficient-home-improvement', 'heehra-electrification-rebates'],
    answerFirst:
      'Heat pump water heaters (HPWHs) qualify under federal 25C (30% up to $2,000 per year) plus IRA HEEHRA up to $1,750 for income-qualified households. State and utility programs add $300–$1,000 in most states. Total stack frequently covers 60–100% of the $4,000–$6,000 typical install cost. ENERGY STAR HPWH models (Rheem ProTerra, AO Smith Voltex, Bradford White) are the most common qualifying equipment.',
    tldr: [
      'Federal 25C: 30% up to $2,000 (combined with whole-home heat pump cap)',
      'IRA HEEHRA: up to $1,750 (income-qualified)',
      'Top state stacks: NYSERDA Clean Heat $700–$1,000, Mass Save $750',
    ],
    sections: [
      { heading: 'Federal 25C HPWH Treatment', body: 'HPWH and whole-home heat pumps share the $2,000 annual sub-cap under 25C. If you install both in the same year, the combined credit is capped at $2,000. Spread across two tax years to capture both at $2,000 each.' },
      { heading: 'IRA HEEHRA HPWH', body: 'Up to $1,750 for income-qualified households (≤150% AMI). 100% cost coverage at ≤80% AMI. Does NOT stack with 25C on the same equipment.' },
      { heading: 'Top State HPWH Programs', body: 'NYSERDA Clean Heat (NY): $700–$1,000. Mass Save (MA): $750. SoCalGas (CA): $1,000. PG&E (CA): $300–$500. SCE (CA): $1,000. Energy Trust of Oregon: $500. ComEd (IL): $300. Most utilities pay $300–$700 for HPWH.' },
      { heading: 'Equipment Selection', body: 'ENERGY STAR Most Efficient HPWH for highest qualifying tier in most state programs. Look for Uniform Energy Factor (UEF) 3.5+ for top performance. Rheem ProTerra Plus, AO Smith Voltex AL, Bradford White Aerotherm are common high-tier models.' },
    ],
    faq: [
      { q: 'Can I claim 25C for HPWH and heat pump in same year?', a: 'Yes, but the combined credit is capped at $2,000 (the heat pump sub-cap). Two units in two tax years lets you claim $2,000 each.' },
      { q: 'Are HPWH installs eligible for HEEHRA?', a: 'Yes — separate $1,750 cap. Income-qualified households should choose HEEHRA over 25C if 100% AMI tier qualifies.' },
      { q: 'Plumbing modifications eligible?', a: 'Plumbing directly required for the HPWH installation is eligible under 25C basis.' },
    ],
  },
  {
    slug: 'induction-stove-rebate',
    title: 'Induction Stove Rebate 2026: HEEHRA + State Programs',
    metaTitle: 'Induction Stove Rebate 2026 — HEEHRA + State Programs Complete Guide',
    description: 'How to claim the IRA HEEHRA induction stove rebate (up to $840) plus state-level induction cooktop programs.',
    category: 'Technology',
    federalSlugs: ['heehra-electrification-rebates'],
    answerFirst:
      'Induction cooktops qualify under IRA HEEHRA for up to $840 in income-qualified households (≤150% AMI). The federal 25C credit does NOT cover induction cooktops directly — only heat pump water heaters and space-heating equipment qualify under 25C. State and utility programs add $200–$1,000 in some markets, with strongest programs in California (BayREN, Energy Upgrade California), New York (NYSERDA), and Oregon (Energy Trust). Induction cookware compatibility (ferromagnetic base) is a small but real consideration — most modern stainless and cast iron work; aluminum and copper do not.',
    tldr: [
      'IRA HEEHRA: up to $840 (income-qualified ≤150% AMI)',
      'Federal 25C does NOT cover induction (heat pump only)',
      'State stacks: BayREN (CA), NYSERDA (NY), Energy Trust (OR)',
    ],
    sections: [
      { heading: 'HEEHRA Induction Mechanics', body: 'Up to $840 point-of-sale rebate at participating retailers/contractors. Income-qualified: ≤80% AMI = 100% coverage; 80–150% AMI = 50% coverage. State energy office administered.' },
      { heading: 'No Federal Tax Credit', body: '25C does not cover induction cooktops. The federal credit pathway is HEEHRA-only at the federal level.' },
      { heading: 'Top State Programs', body: 'BayREN Home+ (9 Bay Area counties): up to $750. Energy Upgrade California (statewide CA): $300–$600. NYSERDA induction incentive: $300–$500. Energy Trust of Oregon: $400.' },
      { heading: 'Installation Considerations', body: 'Many gas-to-induction conversions require a 240V circuit upgrade — HEEHRA covers up to $2,500 for electrical wiring. Combined induction + electrical = total HEEHRA stack ~$3,340 in income-qualified households.' },
    ],
    faq: [
      { q: 'Does HEEHRA cover the electrical work for induction?', a: 'Yes — separately under the wiring cap ($2,500). Induction stove ($840) + wiring ($2,500) can both apply to the same project.' },
      { q: 'What if my income exceeds 150% AMI?', a: 'No HEEHRA. State and utility programs may still apply — check BayREN, Energy Upgrade California, NYSERDA, etc.' },
      { q: 'Cookware compatibility?', a: 'Stainless steel and cast iron typically work. Aluminum, copper, and glass do not. A magnet that sticks to the bottom of the pan = induction-compatible.' },
    ],
  },
  {
    slug: 'amt-energy-credits',
    title: 'AMT and Energy Credits 2026: Will Alternative Minimum Tax Affect Your Refund?',
    metaTitle: 'AMT and Energy Tax Credits 2026 — How AMT Affects 25C, 25D, 30D',
    description: 'Whether the Alternative Minimum Tax (AMT) limits your federal energy credits in 2026 — 25C, 25D, 30D treatment under AMT rules.',
    category: 'Process',
    answerFirst:
      'The federal 25D Residential Clean Energy Credit (solar/battery/geothermal) and 30D Clean Vehicle Credit are NOT limited by Alternative Minimum Tax (AMT) — both can offset AMT liability. The federal 25C Energy Efficient Home Improvement Credit IS limited by AMT — meaning if you owe AMT, your 25C credit may be reduced. For most middle-income filers AMT does not apply (Tax Cuts and Jobs Act raised AMT exemptions significantly), but high-income filers in high-tax states (CA, NY, NJ) should run AMT calculations before assuming full 25C value.',
    tldr: [
      '25D and 30D: NOT limited by AMT — full credit applies',
      '25C: IS limited by AMT — high-income filers should run AMT calc',
      'AMT exemptions raised 2018+ — most middle-income unaffected',
    ],
    sections: [
      { heading: 'How AMT Works in 2026', body: 'Alternative Minimum Tax is a parallel tax calculation designed to ensure high-income filers pay at least a minimum amount. AMT exemption for 2026: $85,700 single, $133,300 MFJ (estimated, indexed). Phase-out begins at $609,350 single / $1,218,700 MFJ.' },
      { heading: '25D and AMT', body: 'The Residential Clean Energy Credit (25D) is allowed against both regular tax and AMT. Even if you owe AMT, the full 30% credit applies. This makes 25D one of the most flexible credits.' },
      { heading: '25C and AMT', body: 'The Energy Efficient Home Improvement Credit (25C) is limited against AMT. If you owe AMT, your 25C credit may be reduced or eliminated. Form 5695 includes the AMT calculation.' },
      { heading: '30D and AMT', body: 'The Clean Vehicle Credit (30D) is allowed against both regular and AMT. Full credit applies regardless of AMT.' },
      { heading: 'Who is at AMT Risk in 2026?', body: 'High-income filers in high-tax states with significant SALT (state and local tax) deductions, ISO exercises, or large miscellaneous itemized deductions. Most middle-income filers are not at AMT risk after 2018 reforms.' },
    ],
    faq: [
      { q: 'How do I know if I owe AMT?', a: 'TurboTax, H&R Block, and other tax software automatically calculates AMT. Form 6251 is the AMT calculation worksheet.' },
      { q: 'If I owe AMT, can I still claim 25D?', a: 'Yes — full 30% credit applies. 25D is allowed against AMT.' },
      { q: 'Should I delay 25C if AMT is a risk?', a: 'No — credits do not roll forward. If 25C is partially limited by AMT in install year, the unused portion is forfeited.' },
    ],
  },
  {
    slug: 'carryforward-energy-credits',
    title: 'Energy Credit Carryforward 2026: Which Credits Roll Over and How Long',
    metaTitle: 'Energy Credit Carryforward 2026 — 25D, 25C, 30D Rules',
    description: 'Which federal energy credits allow carryforward to future tax years and how long. 25D unlimited; 25C none; 30D varies by transfer status.',
    category: 'Process',
    answerFirst:
      'The federal 25D Residential Clean Energy Credit (solar/battery/geothermal) allows unlimited carryforward to future tax years — if you owe less tax than your credit, the excess rolls to next year automatically. The federal 25C Energy Efficient Home Improvement Credit does NOT allow carryforward — unused credit is forfeited. The federal 30D Clean Vehicle Credit, when transferred to dealer at point of sale, requires no carryforward (it is paid out as cash off the price). When 30D is claimed at filing instead, it is non-refundable and limited to tax owed in the install year — no carryforward.',
    tldr: [
      '25D: unlimited carryforward (most flexible)',
      '25C: NO carryforward — use it or lose it',
      '30D: POS transfer = paid as cash, no carryforward needed; claim-at-filing = no carryforward',
    ],
    sections: [
      { heading: '25D Unlimited Carryforward', body: 'Form 5695 Part I line 16 calculates carryforward to next year. No time limit — credit can roll forward indefinitely until used. If you have low tax liability in install year, 25D still pays out eventually.' },
      { heading: '25C No Carryforward', body: 'Form 5695 Part II calculates 25C credit against tax owed in the install year. Excess credit is forfeited — no rollforward. This is why timing 25C-eligible projects matters more than 25D-eligible projects.' },
      { heading: '30D POS Transfer vs Filing', body: 'POS transfer: dealer applies $7,500 immediately to sale price. No tax credit on your return — the dealer captures it (and they get the cash from IRS). Claim-at-filing: you owe enough tax in install year to use the full $7,500 against. No carryforward in either case.' },
      { heading: 'Why 25D Carryforward Matters', body: 'For homeowners with low tax liability ($20,000 25D credit but only $15,000 federal tax owed), the unused $5,000 rolls to next year. This makes 25D effectively refundable over time for homeowners with consistent income.' },
    ],
    faq: [
      { q: 'What if I cannot use 25C in install year?', a: 'You forfeit the unused portion. There is no mechanism to roll forward.' },
      { q: 'Can I sell unused 25D carryforward?', a: 'No — credits are non-transferable for residential. Only 30D and 25E transferable, and only to dealer at point of sale.' },
      { q: 'What if I move before using 25D carryforward?', a: 'Carryforward is tied to the taxpayer, not the property. You take the carryforward with you regardless of where you live.' },
    ],
  },
  {
    slug: 'claim-multiple-credits-same-year',
    title: 'Claim Multiple Energy Credits in the Same Year (2026 Stacking Limits)',
    metaTitle: 'Multiple Energy Credits Same Year 2026 — Stacking 25C, 25D, 30D, 30C',
    description: 'How to claim 25C, 25D, 30D, and 30C all in the same tax year — and where the IRS sets limits on combined credits.',
    category: 'Stacking',
    answerFirst:
      'You can claim 25C, 25D, 30D, 30C, and 25E in the same tax year if you have qualifying property in each category — the IRS treats each credit separately on Form 5695, Form 8936, and Form 8911. The combined credit is limited only by your total federal tax liability (since most credits are non-refundable). 25D allows unlimited carryforward if you exceed tax owed, but 25C and 30D do not. The single most common stack: solar + heat pump + EV in one year — total federal credits potentially $15,000+.',
    tldr: [
      'All federal energy credits can be claimed same year (separate forms)',
      'Combined credit limited by total federal tax owed (non-refundable)',
      'Common biggest stack: solar + heat pump + EV = $15,000+ federal credits',
    ],
    sections: [
      { heading: 'Filing Multiple Forms', body: 'Form 5695 covers 25C (Part II) and 25D (Part I). Form 8936 covers 30D and 25E. Form 8911 covers 30C. All credits flow to Schedule 3 of Form 1040.' },
      { heading: 'Worked Example: $40,000 in Energy Investments', body: 'Homeowner installs $20,000 solar + $14,000 heat pump + buys $42,000 EV in one year. 25D solar 30% = $6,000. 25C heat pump 30% capped = $2,000. 30D EV = $7,500. 30C charger (if installed and eligible census tract) = $300–$1,000. Total federal credits ~$15,500–$16,500.' },
      { heading: 'Tax Liability Limit', body: 'If your total federal tax owed is $20,000, all $16,500 of credits apply. If tax owed is $10,000, you use $10,000 worth of credits this year. 25D rolls forward; 25C and 30D do not.' },
      { heading: 'Order of Operations on Form 1040', body: 'Schedule 3 line 5a (25C and 25D combined). Schedule 3 line 5b (30D and 25E). Schedule 3 line 6m (30C). Total credits flow to Form 1040 line 20.' },
    ],
    faq: [
      { q: 'If I cannot use all credits this year, which carry forward?', a: 'Only 25D carries forward. 25C, 30C, 30D are forfeited if not used in install year.' },
      { q: 'Should I time installs across two tax years?', a: 'Yes if your tax liability is low. Spread 25C-eligible projects (which do not carry forward) across years to use the cap twice.' },
      { q: 'Are state credits also separate?', a: 'Yes. State credits use separate state forms and are independent of federal limits.' },
    ],
  },
  {
    slug: 'installer-paperwork-checklist',
    title: 'Installer Paperwork Checklist 2026: What to Get Before Tax Filing',
    metaTitle: 'Solar/Heat Pump Installer Paperwork Checklist 2026 — Tax Filing Ready',
    description: 'Exactly what paperwork to collect from your installer before filing federal energy credits — invoices, certifications, PINs, and rebate documentation.',
    category: 'Process',
    answerFirst:
      'Before filing federal energy credits (25C, 25D, 30C, 30D), collect from your installer: itemized invoice with equipment, labor, permitting, and interconnection separated; manufacturer Qualified Product Identification Number (PIN) for heat pumps and HPWHs (required tax year 2025+); AHRI certification for HVAC; ENERGY STAR labels for windows/doors; placed-in-service date; rebate documentation showing any state or utility rebate received. Save records for at least 3 years post-filing — the IRS audit window for energy credits.',
    tldr: [
      'Itemized invoice (equipment, labor, permitting, interconnection)',
      'Manufacturer PIN for heat pumps/HPWHs (required tax year 2025+)',
      'Placed-in-service date + rebate documentation',
    ],
    sections: [
      { heading: 'Solar/Battery/Geothermal (25D)', body: 'Itemized invoice. Equipment serial numbers. Inverter and battery model numbers. Installation date (placed-in-service). Permitting and interconnection fees documentation. Any utility or state rebate received (reduces basis). For batteries: capacity in kWh on invoice (must be 3+ kWh for 25D).' },
      { heading: 'Heat Pump / HPWH (25C)', body: 'Itemized invoice. Manufacturer Qualified Product Identification Number (PIN) — required tax year 2025. AHRI certificate. CEE tier confirmation. Installation date. Any rebate received. For heat pumps, model must be on NEEP Cold Climate ASHP list (in northern states).' },
      { heading: 'EV (30D / 25E)', body: 'IRS Form 15400 from dealer (if POS transfer). VIN. MSRP (under cap requirements). Battery component sourcing certificate. Sales contract with itemized breakdown. Vehicle delivery date.' },
      { heading: 'EV Charger (30C)', body: 'Itemized invoice covering charger equipment, install labor, electrical panel work tied to charger. Census tract eligibility verification (DOE Argonne 30C lookup screenshot dated install day).' },
      { heading: 'State Rebate Documentation', body: 'State energy office rebate confirmation. Utility rebate approval letter. SREC sales contract (if applicable). Performance-based incentive contract (if applicable).' },
    ],
    faq: [
      { q: 'My installer did not provide a PIN — now what?', a: 'Contact the manufacturer directly. PINs are issued by manufacturer for qualifying equipment. Without a PIN, the heat pump or HPWH credit may be denied for tax year 2025+ filings.' },
      { q: 'Lost my invoice — can I still claim the credit?', a: 'Reconstruct from manufacturer/installer/utility records. Bank or credit card transactions help. CPA can guide on substantiation.' },
      { q: 'How long must I keep records?', a: 'IRS audit window is 3 years from filing for most credits. 7 years if the IRS suspects significant under-reporting. Keep all energy credit documentation 7 years to be safe.' },
    ],
  },
];

export const GUIDE_BY_SLUG: Record<string, Guide> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g])
);
