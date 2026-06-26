export type FederalCredit = {
  slug: string;
  code: string;
  name: string;
  shortName: string;
  formNumber: string;
  amount: string;
  amountDetail: string;
  status: 'Active' | 'Expiring' | 'Phasedown';
  validThrough: string;
  appliesTo: string[];
  techSlugs: string[];
  refundable: boolean;
  transferable: boolean;
  pointOfSale: boolean;
  introAnswer: string;
  tldr: string[];
  eligibility: { q: string; a: string }[];
  howToClaim: { name: string; text: string }[];
  faq: { q: string; a: string }[];
  stackingNotes: string;
  phasedownSchedule?: string;
};

export const FEDERAL: FederalCredit[] = [
  {
    slug: '25c-energy-efficient-home-improvement',
    code: '25C',
    name: 'Energy Efficient Home Improvement Credit',
    shortName: '25C Credit',
    formNumber: 'IRS Form 5695 (Part II)',
    amount: '30% up to $3,200 per year',
    amountDetail: 'Annual cap is $1,200 for general efficiency upgrades + $2,000 for heat pumps, heat pump water heaters, and biomass stoves. The cap resets every tax year through 2032.',
    status: 'Active',
    validThrough: 'December 31, 2032',
    appliesTo: [
      'Air-source heat pumps (up to $2,000)',
      'Heat pump water heaters (up to $2,000)',
      'Insulation and air sealing (up to $1,200)',
      'Exterior windows and skylights (up to $600)',
      'Exterior doors (up to $250 each, $500 total)',
      'Central air conditioners (up to $600)',
      'Natural gas, propane, and oil furnaces and boilers (up to $600)',
      'Electrical panel upgrades enabling other improvements (up to $600)',
      'Home energy audits (up to $150)',
    ],
    techSlugs: ['heat-pump'],
    refundable: false,
    transferable: false,
    pointOfSale: false,
    introAnswer:
      'The federal Section 25C Energy Efficient Home Improvement Credit refunds 30% of qualifying home upgrades — up to $3,200 per year — when you file your taxes. The annual limit splits into a $1,200 cap for envelope and HVAC upgrades plus a separate $2,000 cap specifically for heat pumps, heat pump water heaters, and biomass stoves. The cap resets every January, so spreading projects across two tax years can effectively double the available credit. The credit runs through 2032 and is non-refundable, meaning it can only zero out tax owed (carry-forward is not allowed).',
    tldr: [
      'Up to $3,200 per year, every year through 2032',
      'Heat pumps get a separate $2,000 sub-cap on top of the $1,200 general cap',
      'Non-refundable, no carry-forward — claim only against tax owed in the install year',
    ],
    eligibility: [
      { q: 'Do I have to own the home?', a: 'You must own and use the home as your principal residence in the US. Rentals you do not live in do not qualify under 25C.' },
      { q: 'Are there income limits?', a: 'No. Unlike the IRA HEEHRA rebates, 25C has no income cap and no household-size requirement.' },
      { q: 'Does the equipment have to meet specific efficiency standards?', a: 'Yes. Heat pumps must meet the highest efficiency tier set by the Consortium for Energy Efficiency (CEE). The IRS requires a Product Identification Number (PIN) starting tax year 2025.' },
      { q: 'Can I claim 25C on a vacation home?', a: 'No. 25C is limited to your principal residence. Second homes qualify only for some 25D items (solar, geothermal).' },
    ],
    howToClaim: [
      { name: 'Confirm equipment qualifies', text: 'Get a written confirmation from your installer that the heat pump or upgrade meets the required CEE tier. Save model numbers and PINs.' },
      { name: 'Save itemized receipts', text: 'Keep contractor invoices that separate equipment, labor, and any rebates received. The credit basis is total cost minus any state or utility rebate.' },
      { name: 'File IRS Form 5695 with your taxes', text: 'Complete Part II — Energy Efficient Home Improvement Credit. Enter qualified costs by category (heat pump, insulation, windows). Form 5695 attaches to your Form 1040.' },
      { name: 'Carry the credit to Form 1040', text: 'The 25C credit flows from Form 5695 line 32 to Schedule 3 line 5a, and from there to your Form 1040.' },
      { name: 'Keep records for at least 3 years', text: 'The IRS can audit the credit for up to 3 years from filing. Retain receipts, AHRI certificates, and PINs.' },
    ],
    faq: [
      { q: 'Can I claim 25C every year?', a: 'Yes. The annual caps reset each January 1. Many homeowners claim 25C three or four years in a row by spreading projects (heat pump year 1, insulation year 2, windows year 3).' },
      { q: 'Does 25C stack with state rebates?', a: 'Yes, but the state rebate reduces the cost basis used to calculate the federal credit. Example: $10,000 heat pump minus $2,000 state rebate equals $8,000 basis, and 30% of $8,000 is $2,400 — capped at $2,000.' },
      { q: 'What is the 25C heat pump PIN requirement?', a: 'Starting tax year 2025, the IRS requires a Qualified Product Identification Number (PIN) on Form 5695 for heat pumps and heat pump water heaters. Manufacturers provide the PIN with qualifying equipment.' },
      { q: 'Are DIY installations eligible?', a: 'Materials are eligible. Labor for insulation, air sealing, windows, and doors is eligible. Labor for HVAC equipment must be performed by a contractor and is included.' },
      { q: 'Does 25C cover solar or batteries?', a: 'No. Solar, batteries, and geothermal go under Section 25D — a separate, uncapped 30% credit.' },
      { q: 'Can renters claim 25C?', a: 'No. Only the homeowner of the principal residence can claim 25C.' },
      { q: 'Does the home energy audit credit stack?', a: 'Yes. The $150 home energy audit credit is part of the $1,200 general cap but does not reduce the heat pump $2,000 sub-cap.' },
      { q: 'Is the credit refundable?', a: 'No. 25C can only reduce tax owed to zero. Excess credit is forfeited — no carry-forward to future years.' },
      { q: 'Can the credit be transferred to my installer?', a: 'No. 25C must be claimed by the homeowner on their own tax return. (30D EV credit is the only one transferable to a dealer.)' },
      { q: 'What if I bought the heat pump in 2025 but installed in 2026?', a: 'The credit is claimed in the year the equipment is "placed in service" — meaning installed and operational — not the year of purchase.' },
    ],
    stackingNotes:
      '25C stacks freely with state, county, city, and utility rebates. State and utility rebates reduce the federal cost basis, but the math almost always still favors stacking. 25C cannot be combined with HEEHRA on the same item — choose whichever delivers more (HEEHRA wins for income-qualified households).',
  },
  {
    slug: '25d-residential-clean-energy',
    code: '25D',
    name: 'Residential Clean Energy Credit',
    shortName: '25D Credit',
    formNumber: 'IRS Form 5695 (Part I)',
    amount: '30% of cost, no cap',
    amountDetail: 'Uncapped 30% credit on solar PV, solar water heating, geothermal heat pumps, fuel cells, small wind, and battery storage (3 kWh+).',
    status: 'Phasedown',
    validThrough: 'December 31, 2034',
    appliesTo: [
      'Solar photovoltaic (PV) systems',
      'Solar water heaters',
      'Geothermal heat pump systems',
      'Battery storage technology (3 kWh capacity or greater)',
      'Small residential wind turbines',
      'Fuel cell systems (kW limits apply)',
    ],
    techSlugs: ['solar', 'geothermal', 'battery'],
    refundable: false,
    transferable: false,
    pointOfSale: false,
    phasedownSchedule:
      '30% through 2032 → 26% in 2033 → 22% in 2034 → 0% from 2035 unless extended.',
    introAnswer:
      'The federal Section 25D Residential Clean Energy Credit returns 30% of the total cost of qualifying solar, geothermal, battery, fuel cell, or small wind systems — with no dollar cap. Unlike 25C, 25D credits unused in the install year carry forward to future tax years until used. Standalone batteries (no solar required) became eligible in tax year 2023. The 30% rate holds through 2032, then steps down to 26% in 2033 and 22% in 2034.',
    tldr: [
      'Uncapped 30% credit on solar, batteries, geothermal — no income limit',
      'Carry-forward allowed: unused credit rolls to next tax year',
      'Standalone batteries eligible since 2023, no solar prerequisite',
    ],
    eligibility: [
      { q: 'Do I have to own the home?', a: 'You must own the home — but unlike 25C, vacation homes qualify (just not rentals you do not live in).' },
      { q: 'Are there income limits?', a: 'No income limits.' },
      { q: 'Do I need to own the system, or does a lease qualify?', a: 'You must own the system. Leases and PPAs do not qualify — the leasing company claims the commercial 48 ITC instead.' },
      { q: 'Is roof replacement eligible?', a: 'Generally no, but structural roof work directly required for solar mounting may be included. Standard re-roofing is not credit-eligible.' },
    ],
    howToClaim: [
      { name: 'Confirm system ownership', text: 'You must own the equipment outright (cash or solar loan). Leases, PPAs, and community solar shares do not qualify.' },
      { name: 'Document total project cost', text: 'Keep contractor invoices that include equipment, labor, permitting, and interconnection. All are includable in the credit basis.' },
      { name: 'File IRS Form 5695 Part I', text: 'Enter qualified costs by category. The credit is 30% of total qualifying cost with no cap.' },
      { name: 'Carry forward any unused credit', text: 'If your 25D credit exceeds your tax liability, the excess rolls to next year automatically — Form 5695 line 16.' },
      { name: 'Update basis if you sell', text: 'The 25D credit reduces the home cost basis dollar-for-dollar at sale. Your CPA will need the credit amount.' },
    ],
    faq: [
      { q: 'Does 25D stack with state solar rebates?', a: 'Yes. State rebates reduce the federal cost basis but the math still favors stacking. Example: $20,000 solar minus $3,000 state rebate equals $17,000 basis, and 30% of $17,000 equals $5,100 federal credit.' },
      { q: 'Does 25D stack with SRECs?', a: 'Yes. SREC payments are taxable income but do not reduce the 25D basis — they are revenue, not cost offsets.' },
      { q: 'Can I claim 25D on a battery I add later?', a: 'Yes. Standalone batteries 3 kWh or larger qualify since tax year 2023, even if installed years after the original solar system.' },
      { q: 'Can I claim 25D for solar on a rental property?', a: 'No. The home must be your residence (primary or secondary). Pure rentals fall under commercial Section 48 ITC, not 25D.' },
      { q: 'Does 25D require US-made components?', a: 'No. The 25D residential credit has no domestic content requirement. (The commercial 48 ITC does.)' },
      { q: 'How is the credit applied at filing?', a: 'Form 5695 Part I calculates the credit, which flows to Schedule 3 line 5a, then to your Form 1040 reducing tax owed.' },
      { q: 'What is the 25D phasedown?', a: '30% through 2032, 26% in 2033, 22% in 2034, then 0% from 2035 unless Congress extends. The applicable rate is set by the install (placed-in-service) date.' },
      { q: 'Can renters claim 25D?', a: 'No, but if you own a home you rent out occasionally and live in part of the year, you can claim 25D pro-rata.' },
      { q: 'Is a solar loan the same as cash for 25D?', a: 'Yes. The IRS treats financed installations the same as cash for credit eligibility — the credit goes to the homeowner regardless of how they paid.' },
      { q: 'Does net metering affect 25D?', a: 'No. Net metering is utility billing, not a federal incentive. It does not reduce the credit basis.' },
    ],
    stackingNotes:
      'Stacks with all state, county, city, and utility rebates. State rebates reduce the federal basis but stacking still wins almost universally. SRECs do not reduce basis. Cannot be claimed on the same equipment as commercial Section 48 ITC.',
  },
  {
    slug: '30c-alternative-fuel-vehicle-refueling-property',
    code: '30C',
    name: 'Alternative Fuel Vehicle Refueling Property Credit',
    shortName: '30C EV Charger Credit',
    formNumber: 'IRS Form 8911',
    amount: '30% up to $1,000 (residential)',
    amountDetail: 'Residential EV charger installations qualify for 30% of cost up to $1,000. Property must be located in an eligible census tract (low-income or non-urban).',
    status: 'Active',
    validThrough: 'December 31, 2032',
    appliesTo: [
      'Level 2 home EV chargers',
      'DC fast chargers (commercial — separate higher cap)',
      'Bidirectional V2H chargers',
      'Installation labor and electrical panel work tied to the charger',
    ],
    techSlugs: ['ev'],
    refundable: false,
    transferable: false,
    pointOfSale: false,
    introAnswer:
      'The federal Section 30C Alternative Fuel Vehicle Refueling Property Credit refunds 30% of the cost of installing a home EV charger — up to $1,000. The credit applies to equipment, labor, and any electrical panel work directly required for the charger. As of 2024, the property must be located in an eligible census tract (low-income community or non-urban area) — a change from earlier years when 30C was nationwide. Use the IRS 30C eligibility lookup tool or the DOE Argonne 30C tool to verify your address.',
    tldr: [
      'Up to $1,000 federal credit for home EV charger install',
      'Address must be in eligible census tract (low-income or non-urban)',
      'Covers equipment, labor, panel upgrade tied to the charger',
    ],
    eligibility: [
      { q: 'How do I check if my address qualifies?', a: 'Use the DOE Argonne 30C eligibility lookup tool — enter your address and it returns eligibility based on the most recent low-income community and non-urban census tract designations.' },
      { q: 'Is the credit per home or per charger?', a: 'The cap is $1,000 per single item of property. A second charger at the same address is a separate item (separate $1,000 cap), but only one credit per tax year.' },
      { q: 'Does my charger have to be hardwired?', a: 'No — both hardwired and plug-in NEMA Level 2 chargers qualify if the equipment cost plus install meets the credit basis rules.' },
      { q: 'Can I claim 30C if I lease the EV?', a: 'Yes. 30C is for the charger, not the vehicle. EV ownership status is irrelevant.' },
    ],
    howToClaim: [
      { name: 'Verify census tract eligibility', text: 'Run your address through the DOE Argonne 30C lookup tool before installing. Save a screenshot dated the day of install.' },
      { name: 'Save all receipts', text: 'Itemized invoice covering charger equipment, install labor, and any electrical panel upgrade tied directly to the charger.' },
      { name: 'File IRS Form 8911', text: 'Complete Form 8911 with your tax return. The credit is 30% of total cost up to $1,000 (residential).' },
      { name: 'Apply credit to Form 1040', text: 'Form 8911 result flows to Schedule 3 line 6m, then to your Form 1040.' },
    ],
    faq: [
      { q: 'My address is not in an eligible census tract — am I out of luck?', a: 'For 30C, yes. But state and utility EV charger rebates do not have the census tract restriction — many states pay $250–$1,000 for any home charger install.' },
      { q: 'Does 30C stack with state EV charger rebates?', a: 'Yes. State and utility rebates reduce the 30C cost basis but stacking still wins. Example: $1,500 charger minus $500 utility rebate equals $1,000 basis × 30% equals $300 federal credit.' },
      { q: 'Is 30C transferable to the installer?', a: 'No. Only 30D (new EV credit) is transferable. 30C must be claimed by the homeowner on their tax return.' },
      { q: 'Does the panel upgrade qualify under 30C?', a: 'Yes — but only the portion of the panel upgrade directly required to support the charger. A general panel replacement does not qualify under 30C.' },
      { q: 'Can businesses claim 30C?', a: 'Yes, with a higher cap of $100,000 per item of property — but eligibility rules differ. This page covers residential only.' },
    ],
    stackingNotes:
      '30C stacks with state EV charger rebates, utility EV TOU charger rebates (PG&E, ConEd, etc.), and Amazon affiliate hardware purchases. The biggest gotcha: census tract eligibility for the federal piece since 2024.',
  },
  {
    slug: '30d-clean-vehicle-credit',
    code: '30D',
    name: 'Clean Vehicle Credit',
    shortName: '30D New EV Credit',
    formNumber: 'IRS Form 8936',
    amount: 'Up to $7,500',
    amountDetail: '$3,750 for critical-minerals sourcing + $3,750 for battery-components sourcing. Income-capped. Transferable to dealer at point of sale since January 2024.',
    status: 'Active',
    validThrough: 'December 31, 2032',
    appliesTo: [
      'New plug-in electric vehicles (BEVs)',
      'Plug-in hybrid electric vehicles (PHEVs)',
      'Fuel cell electric vehicles (FCEVs)',
    ],
    techSlugs: ['ev'],
    refundable: false,
    transferable: true,
    pointOfSale: true,
    introAnswer:
      'The federal Section 30D Clean Vehicle Credit pays up to $7,500 toward a qualifying new EV — and since January 2024 you can transfer the credit to the dealer at point of sale, taking it as cash off the price instead of waiting for tax filing. The $7,500 splits into $3,750 for critical-minerals sourcing and $3,750 for battery-components sourcing. Modified Adjusted Gross Income (MAGI) caps apply: $300,000 married filing jointly, $225,000 head of household, $150,000 single. The MSRP cap is $80,000 for SUVs, vans, and trucks, $55,000 for cars.',
    tldr: [
      'Up to $7,500 transferable to dealer at point of sale',
      'Income-capped: $300k MFJ / $150k single MAGI',
      'Vehicle must meet US/free-trade sourcing rules — list at fueleconomy.gov',
    ],
    eligibility: [
      { q: 'What is the income cap?', a: '$300,000 MAGI married filing jointly, $225,000 head of household, $150,000 single. You can use the lower of the prior tax year MAGI or the year of delivery — so a high-income year does not disqualify you if last year was under the cap.' },
      { q: 'How do I find qualifying vehicles?', a: 'fueleconomy.gov maintains the official list of 30D-eligible vehicles by VIN, updated as manufacturers certify components.' },
      { q: 'Can I transfer the credit to the dealer?', a: 'Yes — since January 2024. Bring two recent tax returns and complete the dealer transfer form at purchase. The dealer applies the $7,500 (or partial) to the sale price.' },
      { q: 'What if my income exceeds the cap after I take the credit?', a: 'You must repay the full credit on your tax return. The point-of-sale transfer does not waive the income test.' },
    ],
    howToClaim: [
      { name: 'Confirm vehicle eligibility on fueleconomy.gov', text: 'Search by make/model/trim. The site lists current credit amount ($3,750 or $7,500) by VIN delivery date.' },
      { name: 'Verify your income falls under the MAGI cap', text: 'Check both the prior tax year and the delivery year — you can use the lower of the two.' },
      { name: 'Decide: transfer at sale or claim at filing', text: 'Point-of-sale transfer applies the credit immediately. Claim-at-filing requires waiting for your refund. The math is identical.' },
      { name: 'Sign IRS Form 15400 at the dealer', text: 'If transferring, the dealer files Form 15400 within 3 days of sale. You sign and keep a copy.' },
      { name: 'File IRS Form 8936', text: 'Whether transferred or claimed at filing, you must report 30D on Form 8936 with your tax return.' },
    ],
    faq: [
      { q: 'Does 30D stack with state EV rebates?', a: 'Yes. California, Colorado, New Jersey, New York, Connecticut, and 19+ other states stack their state EV rebate on top of the federal 30D.' },
      { q: 'What is the difference between 30D and 25E?', a: '30D is for new EVs ($7,500 cap). 25E is for used EVs ($4,000 cap, lower income limits, vehicle must be 2+ model years old).' },
      { q: 'Can I claim 30D if the dealer transferred it?', a: 'No double-dip. The transfer is the credit. You report it on Form 8936 to confirm eligibility but cannot claim again.' },
      { q: 'Can I claim 30D for a leased EV?', a: 'No — but the leasing company can claim the commercial 45W EV credit and many pass it through as a "lease bonus." Check the lease quote.' },
      { q: 'What if I exceed the income cap after taking POS transfer?', a: 'You must repay the full $7,500 on your tax return. The IRS treats this as a tax owed.' },
    ],
    stackingNotes:
      '30D stacks with state EV rebates (24+ states), utility EV TOU charger rebates, and 30C charger credit (separate property). Cannot be combined with the commercial 45W credit on the same vehicle (lease vs. purchase choice).',
  },
  {
    slug: '25e-used-clean-vehicle-credit',
    code: '25E',
    name: 'Previously-Owned Clean Vehicle Credit',
    shortName: '25E Used EV Credit',
    formNumber: 'IRS Form 8936',
    amount: 'Up to $4,000',
    amountDetail: '30% of sale price up to $4,000. Vehicle sale price must be $25,000 or less. Tighter income caps than 30D.',
    status: 'Active',
    validThrough: 'December 31, 2032',
    appliesTo: ['Used (previously-owned) EVs from a dealer'],
    techSlugs: ['ev'],
    refundable: false,
    transferable: true,
    pointOfSale: true,
    introAnswer:
      'The federal Section 25E Previously-Owned Clean Vehicle Credit pays 30% of the sale price up to $4,000 toward a used EV — making this one of the most underused incentives in the country. The vehicle must be at least 2 model years old, sale price under $25,001, purchased from a licensed dealer (not private party), and the buyer must meet tighter income caps than 30D. The credit is transferable to the dealer at point of sale, just like 30D.',
    tldr: [
      'Up to $4,000 (30% of sale price) on used EVs under $25,001',
      'Income capped at $150k MFJ / $75k single — half the 30D limits',
      'Must be 2+ model years old, dealer-purchased, first transfer post-IRA',
    ],
    eligibility: [
      { q: 'Vehicle eligibility?', a: 'Must be at least 2 model years older than the year of purchase, sale price ≤ $25,000, purchased from a licensed dealer, and on its first qualifying transfer since IRA enactment (Aug 2022).' },
      { q: 'Income caps?', a: '$150,000 MAGI married filing jointly, $112,500 head of household, $75,000 single — half the 30D thresholds.' },
      { q: 'How often can I claim 25E?', a: 'Once every three tax years.' },
    ],
    howToClaim: [
      { name: 'Verify the VIN qualifies', text: 'Check fueleconomy.gov used EV list — the dealer must confirm this is the first qualifying transfer.' },
      { name: 'Confirm dealer is registered with IRS Energy Credits Online', text: 'Only registered dealers can issue 25E. Ask before deposit.' },
      { name: 'Decide: transfer at sale or claim at filing', text: 'Same choice as 30D. Transfer wins for most buyers because it cuts the down payment.' },
      { name: 'File IRS Form 8936 with tax return', text: 'Report whether transferred or claimed at filing. Required for IRS audit trail.' },
    ],
    faq: [
      { q: 'Does 25E stack with state used-EV programs?', a: 'Yes. Several states (CA, MA, NY) have their own used-EV rebates that stack on the federal 25E.' },
      { q: 'Can I buy used EV from a private seller?', a: 'No. 25E requires a registered dealer transaction.' },
      { q: 'What if the used EV had a previous 25E claim?', a: 'Disqualified. 25E is per-VIN once across the vehicle lifetime.' },
    ],
    stackingNotes: '25E stacks with state used-EV rebates and EV charger 30C. Cannot stack with 30D — used EVs use 25E, not 30D.',
  },
  {
    slug: 'heehra-electrification-rebates',
    code: 'HEEHRA',
    name: 'High-Efficiency Electric Home Rebate Act',
    shortName: 'HEEHRA',
    formNumber: 'State energy office portal (no IRS form)',
    amount: 'Up to $14,000 per household',
    amountDetail: 'Income-capped point-of-sale rebate funded by IRA. Administered through state energy offices. Heat pumps up to $8,000, induction stoves up to $840, electric panel up to $4,000, wiring up to $2,500, heat pump water heaters up to $1,750, heat pump dryers up to $840, insulation/air sealing up to $1,600.',
    status: 'Active',
    validThrough: 'September 30, 2031 or until state allocation depleted',
    appliesTo: [
      'Heat pumps (up to $8,000)',
      'Heat pump water heaters (up to $1,750)',
      'Heat pump clothes dryers (up to $840)',
      'Induction/electric stoves (up to $840)',
      'Electric panel upgrades (up to $4,000)',
      'Electric wiring (up to $2,500)',
      'Insulation, air sealing, ventilation (up to $1,600)',
    ],
    techSlugs: ['heat-pump'],
    refundable: false,
    transferable: false,
    pointOfSale: true,
    introAnswer:
      'HEEHRA — the High-Efficiency Electric Home Rebate Act — is the larger of the two IRA home-energy rebate programs, delivering up to $14,000 in point-of-sale rebates to income-qualified households. Households at or below 80% Area Median Income (AMI) get 100% project costs covered up to the caps. Households between 80% and 150% AMI get 50% covered. The program runs through state energy offices, not the IRS — so the application process and rollout date varies by state. As of early 2026, most states have launched HEEHRA in pilot or full mode.',
    tldr: [
      'Up to $14,000 point-of-sale rebate, income-qualified',
      'Heat pumps alone qualify for up to $8,000',
      'Administered by state energy offices — check your state launch status',
    ],
    eligibility: [
      { q: 'What is the income cap?', a: 'Household income at or below 150% Area Median Income (AMI) for your county. ≤80% AMI = 100% cost coverage up to caps. 80–150% AMI = 50% cost coverage up to caps.' },
      { q: 'How do I find my AMI?', a: 'HUD publishes AMI by county at huduser.gov. State energy offices typically include an AMI lookup tool in the HEEHRA application portal.' },
      { q: 'Can renters benefit from HEEHRA?', a: 'Yes — landlords of buildings where 50%+ of tenants meet the income cap qualify.' },
    ],
    howToClaim: [
      { name: 'Check state launch status', text: 'Visit your state energy office HEEHRA page. As of 2026, most states are accepting applications. Some are still in pilot.' },
      { name: 'Verify income eligibility', text: 'Use the AMI calculator on the state portal. Have most recent tax return ready.' },
      { name: 'Choose a HEEHRA-approved contractor', text: 'State portals list certified contractors. The contractor handles the rebate paperwork — most apply it as point-of-sale price reduction.' },
      { name: 'Reserve the rebate before installation', text: 'Most states require pre-approval. Funds are first-come, first-served against state allocation.' },
      { name: 'Confirm the discount on your invoice', text: 'The rebate appears as a line-item discount on the contractor invoice — reducing what you owe out of pocket.' },
    ],
    faq: [
      { q: 'Does HEEHRA stack with 25C?', a: 'No — not on the same item. Choose the larger of HEEHRA or 25C for any given upgrade. HEEHRA wins for income-qualified households.' },
      { q: 'Does HEEHRA stack with state and utility rebates?', a: 'Yes. State rebates and utility rebates layer on top of HEEHRA. The combined total cannot exceed 100% of project cost (no profit on rebates).' },
      { q: 'Why is HEEHRA so slow to launch?', a: 'Each state had to design its program, hire administrators, and set up dealer networks. Most states launched late 2024 through 2025; a handful (CA, NY, ME) are now in full operation.' },
      { q: 'How do I find HEEHRA-approved contractors?', a: 'Your state energy office portal lists certified contractors. Mass Save (MA), NYSERDA (NY), and Energy Trust of Oregon all have searchable directories.' },
    ],
    stackingNotes:
      'HEEHRA stacks with state and utility rebates but NOT with 25C on the same item. Pick the higher: HEEHRA wins for income-qualified, 25C wins for higher-income.',
  },
  {
    slug: 'homes-energy-efficiency-rebates',
    code: 'HOMES',
    name: 'Home Owner Managing Energy Savings Rebate Program',
    shortName: 'HOMES Rebate',
    formNumber: 'State energy office portal (no IRS form)',
    amount: 'Up to $8,000 per household',
    amountDetail: 'Performance-based whole-home retrofit rebate. Tied to modeled or measured energy savings. Income-amplified for households below 80% AMI.',
    status: 'Active',
    validThrough: 'September 30, 2031 or until state allocation depleted',
    appliesTo: [
      'Whole-home retrofits with modeled or measured energy savings ≥20%',
      'Insulation, air sealing, HVAC upgrades, windows, doors as part of a package',
    ],
    techSlugs: ['heat-pump'],
    refundable: false,
    transferable: false,
    pointOfSale: true,
    introAnswer:
      'HOMES — the Home Owner Managing Energy Savings Rebate Program — is the second IRA home-energy rebate program. Where HEEHRA targets specific electric appliances, HOMES rewards whole-home performance. Modeled or measured energy savings of 20% or more qualify for rebates up to $8,000 per household, doubled for households below 80% AMI. The program runs through state energy offices and pairs naturally with HEEHRA.',
    tldr: [
      'Up to $8,000 for whole-home retrofits with modeled/measured 20%+ savings',
      '2x rebate for households below 80% AMI',
      'Pair with HEEHRA — different items qualify under each program',
    ],
    eligibility: [
      { q: 'What energy savings threshold qualifies?', a: '20% modeled or measured savings unlocks the base rebate. 35%+ unlocks the higher tier ($4,000 / $8,000 income-amplified).' },
      { q: 'Modeled vs. measured savings — what is the difference?', a: 'Modeled = energy modeling software predicts savings before install. Measured = utility bills 12 months pre/post show actual reduction. Most homeowners use modeled.' },
      { q: 'Can I combine HOMES with HEEHRA?', a: 'Yes, but not on the same equipment. A heat pump goes through HEEHRA; the insulation and air-sealing package goes through HOMES.' },
    ],
    howToClaim: [
      { name: 'Hire a qualified energy auditor', text: 'BPI- or RESNET-certified contractor performs whole-home modeling and identifies the retrofit package.' },
      { name: 'Enroll through state energy office', text: 'Most state portals require pre-approval before work starts. Funds reserve from state allocation.' },
      { name: 'Complete the retrofit package', text: 'Insulation, air sealing, HVAC, windows — bundled to hit the 20% or 35% savings threshold.' },
      { name: 'Verify post-install', text: 'Modeled approach: contractor submits final modeling report. Measured approach: 12-month bill comparison.' },
      { name: 'Receive rebate', text: 'Most states issue HOMES as point-of-sale (contractor handles), some issue post-completion check.' },
    ],
    faq: [
      { q: 'Does HOMES double-stack with state utility rebates?', a: 'Yes. Mass Save, NYSERDA, Energy Trust of Oregon, and most state utility programs stack with HOMES. The total cannot exceed project cost.' },
      { q: 'Does HOMES stack with 25C?', a: 'Yes — different mechanism. 25C is a tax credit; HOMES is a state rebate. Most homeowners use HOMES for the package and 25C for items not in the package.' },
      { q: 'When does my state launch HOMES?', a: 'Check the DOE state HOMES tracker. As of 2026, ~40 states have launched or are in pilot.' },
    ],
    stackingNotes:
      'HOMES + 25C is the most powerful stack for whole-home retrofits — they target the same upgrades but the IRS does not consider HOMES to reduce the 25C basis (state rebate exclusion).',
  },
  {
    slug: '45l-new-energy-efficient-home-credit',
    code: '45L',
    name: 'New Energy Efficient Home Credit',
    shortName: '45L Builder Credit',
    formNumber: 'IRS Form 8908',
    amount: 'Up to $5,000 per home (builder/developer)',
    amountDetail: 'Builder credit — passed through to homebuyer if builder applies it as a price reduction. $2,500 ENERGY STAR-certified, $5,000 DOE Zero Energy Ready Home certified.',
    status: 'Active',
    validThrough: 'December 31, 2032',
    appliesTo: [
      'New homes meeting ENERGY STAR Single Family New Homes ($2,500)',
      'New homes meeting DOE Zero Energy Ready Home ($5,000)',
      'New manufactured homes — separate ENERGY STAR Manufactured Home requirements',
    ],
    techSlugs: ['solar', 'heat-pump'],
    refundable: false,
    transferable: false,
    pointOfSale: false,
    introAnswer:
      'The federal Section 45L New Energy Efficient Home Credit is a builder/developer credit — but homebuyers benefit when builders apply it as a price reduction or use it to fund higher-spec systems. The credit is $2,500 per home for ENERGY STAR Single Family New Homes certification or $5,000 per home for DOE Zero Energy Ready Home (ZERH) certification. Buyers shopping new construction should ask the builder whether they are claiming 45L — and whether the savings are reflected in price or upgrades.',
    tldr: [
      '$2,500 for ENERGY STAR new homes, $5,000 for DOE Zero Energy Ready',
      'Builder credit, not buyer — but savings often pass through',
      'Ask new-build sales rep: "Are you claiming 45L on this home?"',
    ],
    eligibility: [
      { q: 'Who claims 45L?', a: 'The eligible contractor — typically the builder or developer. Homebuyers do not file 45L.' },
      { q: 'How does the buyer benefit?', a: 'Builders typically apply 45L savings as a price reduction or upgrade allowance (better windows, heat pumps, solar) at no extra cost.' },
    ],
    howToClaim: [
      { name: 'Ask the builder', text: 'Confirm at contract whether the builder claims 45L and how the value is delivered.' },
      { name: 'Request the certification', text: 'Get a copy of the ENERGY STAR or ZERH certification — useful for insurance, refi, and resale.' },
      { name: 'Stack with 25D and 25C', text: 'A new ENERGY STAR home with builder-installed solar and heat pump still qualifies you for 25D and 25C — 45L is the builder credit, separate.' },
    ],
    faq: [
      { q: 'Can I claim 45L as a buyer?', a: 'No. 45L is the builder credit. Buyers claim 25C and 25D for components installed during construction (solar, heat pump).' },
      { q: 'How do I find ENERGY STAR or ZERH builders?', a: 'energystar.gov maintains a builder partner directory. Local utilities also list ZERH-certified builders.' },
    ],
    stackingNotes:
      '45L is independent of buyer credits. A new ZERH home buyer can claim 25D for solar, 25C for heat pump (if separately purchased), and 30D for the EV — all stacking with the builder 45L behind the scenes.',
  },
];

export const FEDERAL_BY_SLUG: Record<string, FederalCredit> = Object.fromEntries(
  FEDERAL.map((f) => [f.slug, f])
);

// Display label that never doubles the code — most shortNames already start with it
// (e.g. '30D New EV Credit'), so prepending code again gives '30D 30D New EV Credit'.
export function creditLabel(f: { code: string; shortName: string }): string {
  return f.shortName.startsWith(f.code) ? f.shortName : `${f.code} ${f.shortName}`;
}
