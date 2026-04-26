export type StateTechProgram = {
  name: string;
  amount: string;
  type: 'Rebate' | 'Tax credit' | 'Loan' | 'Net metering' | 'Performance payment' | 'Grant';
  authority: string;
  expiry?: string;
};

export type StateTech = {
  stateSlug: string;
  techSlug: string;
  totalAvailable: string;
  topProgram: string;
  deadline: string;
  answerFirst: string;
  tldr: string[];
  programs: StateTechProgram[];
  eligibility: { q: string; a: string }[];
  faq: { q: string; a: string }[];
  stackingExample: string;
};

export const STATE_TECH: StateTech[] = [
  {
    stateSlug: 'california',
    techSlug: 'solar',
    totalAvailable: '$30%+ federal + state SGIP battery up to $1,000/kWh + NEM 3.0 export credits',
    topProgram: 'Self-Generation Incentive Program (SGIP) — Battery Storage',
    deadline: 'SGIP funded through 2025 with rolling step-down',
    answerFirst:
      'California homeowners installing solar in 2026 stack the federal 25D credit (30% uncapped) with the state SGIP battery rebate (when paired with storage) and net energy metering NEM 3.0 export compensation. SGIP delivers the highest-value state-level adder — $150 to $1,000 per kWh of battery storage depending on equity tier — and pairs well with new solar installs because batteries shift export-side economics dramatically under NEM 3.0. The PUC closed NEM 2.0 to new applicants in April 2023; new installs export at avoided-cost-calculator rates that average $0.05–$0.15 per kWh, compared to $0.30+ for retail-rate NEM 2.0. Battery storage is no longer optional in California — it is the difference between a 6-year and an 11-year payback.',
    tldr: [
      '30% federal 25D + SGIP battery rebate up to $1,000/kWh',
      'NEM 3.0 economics make battery essentially mandatory',
      'PG&E, SCE, SDG&E all administer NEM and SGIP — same rules statewide',
    ],
    programs: [
      { name: 'Federal 25D Residential Clean Energy Credit', amount: '30% of total system cost', type: 'Tax credit', authority: 'IRS', expiry: 'Dec 31 2032 (then phasedown)' },
      { name: 'SGIP Equity Resiliency', amount: 'Up to $1,000 per kWh', type: 'Rebate', authority: 'California Public Utilities Commission', expiry: 'Until allocation depleted' },
      { name: 'SGIP Equity Budget', amount: '$850 per kWh', type: 'Rebate', authority: 'CPUC', expiry: 'Step-down by reservation block' },
      { name: 'SGIP General Market', amount: '$150 per kWh', type: 'Rebate', authority: 'CPUC', expiry: 'Step-down by reservation block' },
      { name: 'NEM 3.0 (Net Billing Tariff)', amount: 'Avoided-cost export rate', type: 'Net metering', authority: 'CPUC' },
      { name: 'Property Tax Exclusion for Solar', amount: '100% of added home value', type: 'Tax credit', authority: 'California State Board of Equalization', expiry: 'Active through 2027 (legislative renewal)' },
      { name: 'DAC-SASH (Disadvantaged Communities)', amount: 'Up to $7/W upfront for income-qualified', type: 'Rebate', authority: 'GRID Alternatives' },
      { name: 'Property Assessed Clean Energy (PACE)', amount: 'Up to 100% project finance', type: 'Loan', authority: 'Various PACE administrators' },
    ],
    eligibility: [
      { q: 'Do I need a battery to qualify for solar incentives in California?', a: 'No — but NEM 3.0 export economics make batteries essentially required for reasonable payback. The federal 25D credit applies to solar without storage, and SGIP only kicks in when you add storage.' },
      { q: 'Am I eligible for SGIP Equity tier?', a: 'You qualify for the Equity tier (much higher rebate) if your household income is at or below 80% Area Median Income, you live in a Disadvantaged Community (DAC) census tract, or you participate in CARE/FERA utility programs.' },
      { q: 'Do tribal lands have separate California programs?', a: 'Yes. The DAC-SASH program prioritizes tribal communities, and SGIP includes a tribal allocation.' },
      { q: 'Does NEM 3.0 apply if I added solar before April 2023?', a: 'No. NEM 2.0 grandfathers existing customers for 20 years from interconnection date.' },
    ],
    faq: [
      { q: 'Does California state solar rebate stack with federal 30D EV credit?', a: 'They are unrelated — 30D is the EV credit, not solar. But yes, you can claim 25D for solar plus 30D for an EV plus 30C for a home charger plus state EV rebate (Clean Vehicle Rebate Project) all in the same tax year.' },
      { q: 'Are there income limits on California solar incentives?', a: 'No income limit on federal 25D. SGIP General Market has no income limit. SGIP Equity tier requires ≤80% AMI or DAC residency. DAC-SASH targets ≤80% AMI.' },
      { q: 'How much does SGIP pay for a Tesla Powerwall in 2026?', a: 'Powerwall 3 has 13.5 kWh of usable capacity. General Market tier pays roughly $2,025 ($150 × 13.5). Equity tier pays roughly $11,475 ($850 × 13.5). Equity Resiliency for medical baseline / wildfire zones can pay up to $13,500 per Powerwall.' },
      { q: 'Can I claim the state property-tax exclusion?', a: 'Automatically. Solar additions are excluded from property tax assessment through 2027 in California — your assessor cannot raise your assessed value because you added solar.' },
      { q: 'PG&E vs SCE vs SDG&E — does utility matter for incentives?', a: 'NEM 3.0 and SGIP rules are statewide. Utility-specific differences are mostly in interconnection timelines (PG&E typically slowest) and avoided-cost export rates.' },
      { q: 'Is community solar in California different from rooftop?', a: 'Community solar shares (off-site) do NOT qualify for federal 25D or California SGIP — those are owner-installed only. Community solar pays via subscription credits.' },
      { q: 'How does TOU billing affect solar value?', a: 'Time-of-use rates make solar generation worth more during 4–9pm peak. NEM 3.0 export rates also follow TOU — afternoon export pays a fraction of evening retail. Battery shifts solar from low-value 1pm export to high-value 7pm self-consumption.' },
      { q: 'Can I claim SGIP if I install batteries without solar?', a: 'Yes. Standalone batteries qualify for SGIP. They also qualify for federal 25D since 2023 (3 kWh+ minimum).' },
      { q: 'What about the California EV solar bonus?', a: 'No specific bonus, but pairing solar + EV charging unlocks PG&E EV2-A residential rate plan with extremely low overnight rates ($0.27/kWh midnight) — effectively powering your EV at solar wholesale cost.' },
      { q: 'Are roof replacements covered?', a: 'No, generally — but structural reinforcement directly required for solar mounting may be includable in the federal 25D basis. Standard re-roofing is not credit-eligible.' },
    ],
    stackingExample:
      'A $25,000 8 kW solar + 13.5 kWh battery system in San Francisco: $25,000 × 30% federal 25D = $7,500 credit. SGIP General Market ~$2,025. Net cost ~$15,475. Add $5/W upfront if Equity tier qualified.',
  },
  {
    stateSlug: 'texas',
    techSlug: 'solar',
    totalAvailable: '30% federal + Oncor/CPS/Austin/Pedernales utility rebates ($2,500–$8,500 typical)',
    topProgram: 'Oncor Take A Load Off Texas Solar PV Standard Offer',
    deadline: 'Annual program enrollment — Oncor caps reset each January',
    answerFirst:
      'Texas does not offer a state-level solar tax credit, but the major utilities — Oncor, CPS Energy, Austin Energy, Pedernales Electric Cooperative, and Garland Power & Light — run rebate programs that stack on top of the federal 25D credit. Oncor pays roughly $2,500 for a typical 6 kW residential install through the Solar PV Standard Offer Program. Austin Energy pays $2,500 flat and CPS Energy in San Antonio pays $0.60/W (capped). Texas property tax law also exempts the added home value from solar — meaningful in a state with property tax averaging 1.7%. Texas has no statewide net metering mandate, so export economics depend on your retail electric provider — Green Mountain Energy and Reliant offer 1:1 buyback plans on retail competitive territory.',
    tldr: [
      '30% federal 25D + utility rebate $2,500–$8,500 typical',
      'No state credit, but property-tax exemption on added value',
      'Net metering depends on REP (Texas has retail competition)',
    ],
    programs: [
      { name: 'Federal 25D Residential Clean Energy Credit', amount: '30% of system cost', type: 'Tax credit', authority: 'IRS', expiry: 'Dec 31 2032' },
      { name: 'Oncor Solar PV Standard Offer Program', amount: '~$2,500 for 6 kW residential', type: 'Performance payment', authority: 'Oncor Electric Delivery', expiry: 'Annual cap, first-come first-served' },
      { name: 'Austin Energy Solar Rebate', amount: '$2,500 flat', type: 'Rebate', authority: 'Austin Energy', expiry: 'Annual budget cap' },
      { name: 'CPS Energy Solar Rebate', amount: '$0.60 per watt up to $4,500', type: 'Rebate', authority: 'CPS Energy (San Antonio)', expiry: 'Until annual fund depleted' },
      { name: 'Pedernales Electric Cooperative Rebate', amount: '$2,500 typical residential', type: 'Rebate', authority: 'PEC', expiry: 'Member program' },
      { name: 'Garland Power & Light Solar Buyback', amount: '$3,500 flat', type: 'Rebate', authority: 'GP&L' },
      { name: 'Texas Property Tax Exemption (Solar)', amount: '100% of added home value', type: 'Tax credit', authority: 'Texas Comptroller', expiry: 'Permanent' },
      { name: 'Net Metering (REP-dependent)', amount: 'Varies — Green Mountain, Reliant offer 1:1 buyback', type: 'Net metering', authority: 'Retail Electric Providers' },
    ],
    eligibility: [
      { q: 'Do I need to be in Oncor territory for the Oncor rebate?', a: 'Yes. Oncor is the wires utility for Dallas-Fort Worth and most of north and west Texas. The rebate applies regardless of your Retail Electric Provider, as long as your meter is on Oncor lines.' },
      { q: 'Is there an Austin Energy income requirement?', a: 'No income cap on the standard rebate, but Austin Energy Customer Renewable Energy Solutions (CRES) program offers higher per-kW rebates to income-qualified households.' },
      { q: 'How does CPS Energy (San Antonio) compare?', a: 'CPS Energy pays $0.60/W up to $4,500. A 6 kW install nets $3,600 on top of the federal 30%. CPS also operates a community solar option for renters.' },
    ],
    faq: [
      { q: 'Is Texas a good state for solar in 2026?', a: 'Yes — Texas has the second-best solar resource in the US after Arizona/California, low installer costs ($2.50–$3.00/W typical), and meaningful utility rebates in major metros. The lack of state mandate is offset by competitive REP buyback rates.' },
      { q: 'How does Texas net metering work?', a: 'There is no state mandate. Customers in deregulated territory choose their REP, and some plans (Green Mountain Renewable Rewards, Reliant Truly Free Nights & Solar Days, Chariot Energy) offer 1:1 export buyback. Customers in cooperative or municipal utility territory follow the local utility tariff.' },
      { q: 'Can I sell SRECs in Texas?', a: 'There is no compliance SREC market in Texas (no statewide RPS). A small voluntary market exists but pricing is below $5/MWh — effectively zero compared to NJ ($200+) or DC.' },
      { q: 'Will Oncor approve my install fast?', a: 'Oncor interconnection averages 4–8 weeks post-permit. The Standard Offer Program rebate is reserved at application — installer files paperwork.' },
      { q: 'Does Texas tax solar income?', a: 'Texas has no state income tax. Solar income (REP buyback) is federal-taxable but not state-taxable.' },
      { q: 'What about ERCOT vs SPP territory?', a: 'Most Texas residential solar is on ERCOT (the state grid). Far west Texas (El Paso) and far east Texas are on different grids. Your wires utility determines rebate eligibility.' },
      { q: 'Can renters benefit from Texas solar incentives?', a: 'Federal 25D requires homeownership. CPS Energy and Austin Energy community solar programs let renters subscribe to off-site generation.' },
      { q: 'Does the property tax exemption need an application?', a: 'Yes. File Form 50-123 with your county appraisal district within one year of the solar install.' },
      { q: 'Are batteries covered by Texas utility rebates?', a: 'Oncor offers a separate Commercial Solar Photovoltaic and Storage Standard Offer for commercial. Residential battery rebates are limited — federal 25D 30% remains the primary battery incentive.' },
      { q: 'How much does typical 6 kW Texas install cost in 2026?', a: 'Quotes range $14,000–$19,000 pre-incentive. After 30% federal credit and ~$2,500 utility rebate, net is typically $7,300–$10,800. Payback 7–9 years at $0.13/kWh average residential rate.' },
    ],
    stackingExample:
      'Dallas homeowner with 8 kW system at $20,000: federal 25D credit $6,000 + Oncor rebate ~$3,300 = $9,300 incentives. Net cost $10,700. With Reliant Truly Free Nights & Solar Days, payback ~6 years.',
  },
  {
    stateSlug: 'florida',
    techSlug: 'solar',
    totalAvailable: '30% federal + property-tax exemption + sales-tax exemption + 1:1 net metering',
    topProgram: 'Florida 1:1 Net Metering (state-mandated)',
    deadline: 'Net metering protected through legislative session 2026; SB 1024 vetoed 2024',
    answerFirst:
      'Florida has no state solar rebate or state income tax credit, but it offers something arguably more valuable: a permanent property-tax exemption on solar-added home value, a permanent sales-tax exemption on solar equipment, and statewide 1:1 net metering. With Florida average residential rates at $0.16/kWh and abundant sunshine, the no-rebate problem is offset by exceptional production and full-retail export credit. The 30% federal 25D credit applies. Solar payback in Florida averages 6–9 years — among the strongest in the country. The biggest watchpoint is net metering politics: SB 1024 (2022) tried to gut net metering and was vetoed by Governor DeSantis; the legislature has not revived it through 2025.',
    tldr: [
      '30% federal 25D + 100% property-tax exemption + sales-tax exemption',
      '1:1 net metering — among most valuable in the country',
      'Florida payback 6–9 years on rooftop solar at average rates',
    ],
    programs: [
      { name: 'Federal 25D Residential Clean Energy Credit', amount: '30% of cost', type: 'Tax credit', authority: 'IRS', expiry: 'Dec 31 2032' },
      { name: 'Property Tax Abatement for Renewable Energy', amount: '100% of added home value', type: 'Tax credit', authority: 'Florida Department of Revenue', expiry: 'Permanent' },
      { name: 'Sales Tax Exemption for Solar Energy Systems', amount: '100% of equipment sales tax', type: 'Tax credit', authority: 'Florida Department of Revenue', expiry: 'Permanent' },
      { name: 'Net Metering (1:1 retail rate)', amount: 'Full retail rate per kWh exported', type: 'Net metering', authority: 'Florida PSC' },
      { name: 'Solar and Energy Loan Fund (SELF)', amount: 'Up to $50,000 low-interest', type: 'Loan', authority: 'SELF nonprofit' },
      { name: 'Property Assessed Clean Energy (PACE)', amount: 'Up to 100% project finance', type: 'Loan', authority: 'Multiple PACE administrators' },
      { name: 'JEA Solar Net Billing (Jacksonville)', amount: 'Wholesale rate buyback (lower)', type: 'Net metering', authority: 'JEA municipal utility' },
      { name: 'Orlando Utilities Commission (OUC) Net Metering', amount: 'Tiered rate buyback', type: 'Net metering', authority: 'OUC municipal' },
    ],
    eligibility: [
      { q: 'Does Florida 1:1 net metering apply to all utilities?', a: 'Investor-owned utilities (FPL, Duke, TECO) follow the PSC 1:1 rule. Municipal utilities (JEA, OUC, Lakeland, Tallahassee) and rural cooperatives set their own — most are similar but a few use lower wholesale rates.' },
      { q: 'How do I apply for the property-tax exemption?', a: 'File Form DR-418C with your county property appraiser. Submit before the property assessment date (typically January 1).' },
    ],
    faq: [
      { q: 'How much does solar save in Florida?', a: 'Average 8 kW system in Florida produces ~12,000 kWh/year. At $0.16/kWh that is $1,920/year. Total system cost $20,000 → 30% credit = $14,000 net → 7.3-year payback.' },
      { q: 'What happens if Florida ends net metering?', a: 'SB 1024 (2022) attempted to phase out 1:1 net metering and impose grid fees on solar customers. Governor DeSantis vetoed it. Legislative attempts may return — installs completed under current rules grandfather for 20 years.' },
      { q: 'Are there hurricane-related solar concerns?', a: 'Florida solar must meet wind-load standards (typically 150+ mph for coastal counties). Modern systems with proper engineering survive Category 4 hurricanes — but battery backup adds resilience value beyond rebates.' },
      { q: 'Can I claim the property-tax exemption on a primary or secondary home?', a: 'Both. The exemption applies to any Florida residential property with eligible solar improvement.' },
      { q: 'Is JEA a worse net metering deal than FPL?', a: 'Yes. JEA pays wholesale (~$0.04/kWh) for excess generation. FPL pays full retail (~$0.13/kWh). For Jacksonville homeowners this matters — battery storage has stronger economics on JEA territory.' },
      { q: 'Are batteries eligible for Florida sales-tax exemption?', a: 'Yes. The state exemption covers the entire solar energy system including batteries — written broadly enough to include storage components.' },
      { q: 'Does PACE financing affect my mortgage?', a: 'PACE is a property-tax-attached loan. It transfers with the home but most mortgage lenders require PACE payoff at refinance. Check before signing.' },
      { q: 'Are there utility-specific Florida rebates?', a: 'No major investor-owned utility offers a solar PV rebate in 2026. OUC operates a small loyalty rebate. Most value comes from the federal credit + property/sales-tax exemptions + net metering.' },
      { q: 'Florida payback vs other states?', a: 'Florida ranks top-10 nationally for solar payback despite no state rebate, thanks to high production + 1:1 net metering + tax exemptions.' },
      { q: 'Can renters get solar in Florida?', a: 'Federal 25D requires homeownership. Sunrun and SunPower offer leases that include 25-year warranties without homeowner credit eligibility — but the leasing company captures the federal credit.' },
    ],
    stackingExample:
      'Tampa homeowner with 8 kW system at $20,000: 30% federal 25D = $6,000 + sales-tax savings ~$1,200 (6%) + 1:1 net metering credit = effective payback 7 years.',
  },
  {
    stateSlug: 'new-york',
    techSlug: 'solar',
    totalAvailable: '30% federal + 25% NY state credit (up to $5,000) + NY-Sun MW Block + property-tax exemption',
    topProgram: 'NY-Sun MW Block + NY State Solar Tax Credit',
    deadline: 'NY-Sun budget reset annually; NY State credit through 2032',
    answerFirst:
      'New York stacks the federal 25D credit (30%) with one of the most generous state-level solar tax credits in the country: 25% of system cost up to $5,000. On top, NY-Sun MW Block administered by NYSERDA pays per-kW upfront rebates that vary by zone — currently $0.20–$0.40 per watt. Local property-tax exemptions apply in 80%+ of New York jurisdictions (15-year exemption is the default). Net metering uses the Value of Distributed Energy Resources (VDER) tariff — slightly lower than full retail but still meaningful, around $0.10–$0.13/kWh in ConEd territory. Total stack regularly delivers 50%+ system cost coverage for downstate homeowners.',
    tldr: [
      '30% federal + 25% NY state credit (up to $5,000) + NY-Sun upfront rebate',
      'Local property-tax exemption (15-year) — opt-in by jurisdiction',
      'VDER tariff replaces 1:1 NEM but still pays meaningful credits',
    ],
    programs: [
      { name: 'Federal 25D Residential Clean Energy Credit', amount: '30%', type: 'Tax credit', authority: 'IRS', expiry: 'Dec 31 2032' },
      { name: 'NY State Solar Energy System Equipment Credit', amount: '25% up to $5,000', type: 'Tax credit', authority: 'NY Department of Taxation and Finance', expiry: 'Through 2032' },
      { name: 'NY-Sun MW Block', amount: '$0.20–$0.40 per watt upfront', type: 'Rebate', authority: 'NYSERDA', expiry: 'Annual block — until depleted' },
      { name: 'NY-Sun Affordable Solar (Income-qualified)', amount: '$0.80–$1.00 per watt upfront', type: 'Rebate', authority: 'NYSERDA' },
      { name: 'Property Tax Exemption (RPTL §487)', amount: '100% added value, 15-year', type: 'Tax credit', authority: 'Local jurisdictions opt-in', expiry: '15 years' },
      { name: 'NYC Real Property Tax Abatement', amount: 'Up to 30% project cost over 4 years', type: 'Tax credit', authority: 'NYC Department of Buildings', expiry: 'Apply before installation' },
      { name: 'VDER Net Metering', amount: 'Value of DER stack: energy + capacity + demand reduction + LSRV + environmental', type: 'Net metering', authority: 'NY PSC' },
      { name: 'Sales Tax Exemption (Solar Equipment)', amount: '100% state + local sales tax', type: 'Tax credit', authority: 'NY State', expiry: 'Permanent' },
      { name: 'On-Bill Recovery Loan', amount: 'Up to $25,000 — repaid via utility bill', type: 'Loan', authority: 'NYSERDA / Energy Finance Solutions' },
    ],
    eligibility: [
      { q: 'Do all NY counties offer the property-tax exemption?', a: 'No — the RPTL §487 exemption is opt-in by jurisdiction. Most major counties (Westchester, Suffolk, Nassau, NYC, Albany) participate. A handful of Long Island school districts do not.' },
      { q: 'How does NYC property-tax abatement differ from RPTL §487?', a: 'NYC uses its own Solar Electric Generating System (SEGS) Property Tax Abatement — up to 30% of project cost spread over 4 years. Apply before installation begins.' },
      { q: 'Income limits for NY-Sun Affordable Solar?', a: '≤80% Area Median Income for the Affordable Solar tier. Roughly 2x the standard rebate per watt.' },
    ],
    faq: [
      { q: 'How does the NY State Solar Tax Credit work?', a: 'Form IT-255 — claim 25% of total system cost up to $5,000 against NY state income tax. Carryforward up to 5 years if the credit exceeds tax owed.' },
      { q: 'Does NY-Sun stack with the state tax credit?', a: 'Yes. The NY-Sun upfront rebate reduces the cost basis used for both federal 25D and state credit calculations. State rebate first, then 30% federal then 25% state on the reduced basis.' },
      { q: 'What is VDER and why did NY drop 1:1 net metering?', a: 'Value of Distributed Energy Resources is a stack of credits — energy value + capacity + demand reduction + locational system relief value + environmental — that approximates the locational value of distributed solar. For ConEd (NYC) territory, residential VDER is comparable to retail (~$0.18/kWh blended). For upstate utilities, VDER is lower than retail.' },
      { q: 'Can renters benefit?', a: 'Community Distributed Generation (CDG) — community solar shares — let renters subscribe to local solar farms and get bill credits without owning equipment. CDG does not qualify for federal/state credits but lowers utility bills 5–15%.' },
      { q: 'How long does NY-Sun MW Block reservation take?', a: 'Installer files reservation post-contract. Approval typically 2–4 weeks. Reservations expire after 12 months — install must complete by then.' },
      { q: 'What about sales tax on inverters/batteries?', a: 'NY exempts the entire solar energy system (panels, inverters, mounting, batteries) from state and local sales tax permanently.' },
      { q: 'Does ConEdison or PSEG matter for incentives?', a: 'NY-Sun and state credit are statewide. VDER values vary by utility load zone — ConEdison Zone J (NYC) has the highest LSRV in the state.' },
      { q: 'Are batteries covered by NY-Sun?', a: 'Standalone batteries are not under NY-Sun (which is solar-specific). NYSERDA Energy Storage Incentive pays $250–$350 per kWh for residential battery storage paired with solar.' },
      { q: 'NYC building department permits — how complex?', a: 'NYC solar permitting requires PE-stamped drawings, DOB submission, and FDNY review for batteries. Typical timeline 3–6 months. Long Island/Westchester much faster (4–8 weeks).' },
      { q: 'On-Bill Recovery Loan — is it recommended?', a: 'OBR ties loan repayment to your utility bill at fixed APR (typically 3.49–6.49%). Cleaner than HELOC for many homeowners. Approval requires utility account standing.' },
    ],
    stackingExample:
      'Brooklyn homeowner, 7 kW system at $22,000: NY-Sun rebate $1,400 ($0.20/W) → basis $20,600. Federal 25D 30% = $6,180. NY State 25% = $5,000 cap. NYC SEGS abatement ~$5,500 over 4 years. Total incentives ~$18,080 on $22,000 system.',
  },
  {
    stateSlug: 'arizona',
    techSlug: 'solar',
    totalAvailable: '30% federal + 25% state credit up to $1,000 + APS/SRP/TEP utility rebates',
    topProgram: 'APS Solar Communities + Arizona Residential Solar Energy Tax Credit',
    deadline: 'Net metering replaced by Resource Comparison Proxy (RCP) in 2017',
    answerFirst:
      'Arizona homeowners installing solar in 2026 stack the federal 25D credit (30%) with the Arizona Residential Solar Energy Tax Credit (25% of system cost up to $1,000) plus Arizona-specific property and sales-tax exemptions. Major utilities — APS, SRP, and TEP — each have their own rate tariffs and incentive programs that significantly affect economics. APS uses Resource Comparison Proxy (RCP) export rates roughly $0.087/kWh, well below retail. SRP uses E-27 demand-charge tariffs that penalize solar without storage. TEP pays slightly better but caps system size at 100% of prior-year usage. Arizona has the second-best solar resource in the US — payback averages 6–9 years with proper utility planning.',
    tldr: [
      '30% federal + 25% AZ state credit (capped at $1,000)',
      'APS/SRP/TEP each have different rate tariffs that hurt solar without batteries',
      'Property tax + sales tax exemption permanent',
    ],
    programs: [
      { name: 'Federal 25D Residential Clean Energy Credit', amount: '30%', type: 'Tax credit', authority: 'IRS', expiry: 'Dec 31 2032' },
      { name: 'Arizona Residential Solar Energy Tax Credit', amount: '25% up to $1,000', type: 'Tax credit', authority: 'Arizona DOR', expiry: 'Permanent' },
      { name: 'Energy Equipment Property Tax Exemption', amount: '100% added value', type: 'Tax credit', authority: 'AZ DOR' },
      { name: 'Solar Energy Equipment Sales Tax Exemption', amount: '100% state sales tax', type: 'Tax credit', authority: 'AZ DOR' },
      { name: 'APS Solar Communities (income-qualified)', amount: 'Free leased rooftop solar — no upfront cost', type: 'Rebate', authority: 'APS', expiry: 'Limited enrollment' },
      { name: 'SRP Battery Storage Rebate', amount: '$250 per kWh up to $3,600', type: 'Rebate', authority: 'SRP', expiry: 'Annual budget' },
      { name: 'APS Resource Comparison Proxy (RCP)', amount: '~$0.087/kWh export', type: 'Net metering', authority: 'APS' },
      { name: 'TEP Net Metering', amount: 'Avoided-cost rate ~$0.04/kWh', type: 'Net metering', authority: 'TEP' },
    ],
    eligibility: [
      { q: 'Does the AZ state credit cap at $1,000 even on a $30,000 system?', a: 'Yes. The Arizona credit is 25% but capped at $1,000 per residence, total. The federal 30% credit has no cap.' },
      { q: 'APS vs SRP vs TEP — which is best for solar?', a: 'TEP slightly best for solar economics (Tucson). APS second. SRP worst — the E-27 demand charge tariff penalizes solar customers significantly without battery storage.' },
      { q: 'Income limits on APS Solar Communities?', a: 'Yes — the no-upfront-cost program is for income-qualified APS customers. Income limit varies by household size.' },
    ],
    faq: [
      { q: 'Why does SRP demand charge matter for solar?', a: 'SRP residential customers on E-27 pay a demand charge based on highest 30-min usage in peak hours. Solar reduces total kWh but does not affect demand charge — meaning solar without batteries cuts savings significantly. Battery storage shaves the demand spike and restores payback.' },
      { q: 'Is solar still worth it in Arizona despite RCP?', a: 'Yes, for most homeowners. Arizona average residential rate is $0.13/kWh and production is among the highest in the US (1,650+ kWh per kW installed annually). Even at $0.087/kWh export, self-consumption arbitrage drives 7–9 year payback.' },
      { q: 'What about the SRP battery storage rebate?', a: 'SRP pays $250 per kWh up to $3,600 for residential battery storage. Combined with federal 25D 30%, a Powerwall 3 (13.5 kWh, ~$15,000 installed) nets ~$3,375 SRP + $4,500 federal = $7,875 incentives.' },
      { q: 'Is TEP net metering still 1:1?', a: 'No. TEP transitioned to avoided-cost export rates in 2017. Current export rate ~$0.04/kWh. Self-consumption is where Tucson solar pays.' },
      { q: 'Does AZ allow solar leases?', a: 'Yes. Sunrun, Sunnova, and SunPower all operate in Arizona. Leases do not qualify for federal 25D but transfer risk to leasing company. APS Solar Communities is essentially a free lease for income-qualified.' },
      { q: 'Property tax exemption — automatic?', a: 'Yes — applies automatically through the AZ DOR. Solar is not added to assessed value for property tax purposes.' },
      { q: 'What is the AZ state credit form?', a: 'Form 310 — Arizona Credit for Solar Energy Devices. Attach to AZ Form 140.' },
      { q: 'Can I claim the AZ credit and federal in the same year?', a: 'Yes. The AZ credit reduces state tax owed. The federal 25D reduces federal tax owed. Both apply to the same system in the same year.' },
      { q: 'How does Phoenix vs Tucson differ?', a: 'Phoenix has slightly more sun (Tucson 6.6 kWh/m²/day vs Phoenix 6.5). Bigger difference is utility — Phoenix is APS or SRP territory; Tucson is TEP.' },
      { q: 'What about HOAs blocking solar?', a: 'Arizona Solar Rights Act (ARS 33-439) prevents HOAs from prohibiting solar but does allow reasonable aesthetic restrictions. HOA cannot effectively prohibit solar.' },
    ],
    stackingExample:
      'Phoenix homeowner with 8 kW APS install at $22,000: federal 25D 30% = $6,600 + AZ state 25% capped at $1,000 = $7,600 total credits. Net cost $14,400. With APS RCP export and self-consumption, payback ~7 years.',
  },
  {
    stateSlug: 'new-york',
    techSlug: 'heat-pump',
    totalAvailable: 'Federal 25C + HEEHRA + NYSERDA Clean Heat (up to $5,000) + NYC Healthy Homes',
    topProgram: 'NYSERDA Clean Heat (Statewide Heat Pump Program)',
    deadline: 'NYSERDA Clean Heat funded through 2030',
    answerFirst:
      'New York operates the NYSERDA Clean Heat program — among the most generous statewide heat pump rebates in the US — offering $1,500 to $5,000 per ton depending on equipment type and utility territory. Combined with the federal 25C credit (30% up to $2,000) and IRA HEEHRA rebates (up to $8,000 for income-qualified households), New York heat pump installs frequently see 60–80% cost coverage. Cold-climate ductless mini-splits and ground-source heat pumps qualify at higher per-ton rates than ducted air-source units. Con Edison customers in NYC also access utility-specific incentives via the Clean Heat NYC marketplace.',
    tldr: [
      'NYSERDA Clean Heat $1,500–$5,000 per ton',
      'Stacks with federal 25C ($2,000) and HEEHRA ($8,000 income-qualified)',
      'Ground-source heat pumps get top-tier rebates ($1,500/ton + $3,000 incentive)',
    ],
    programs: [
      { name: 'NYSERDA Clean Heat (Air-Source Heat Pump)', amount: '$1,000–$2,000 per ton', type: 'Rebate', authority: 'NYSERDA / Utilities' },
      { name: 'NYSERDA Clean Heat (Ground-Source Heat Pump)', amount: '$1,500/ton + $3,000 base', type: 'Rebate', authority: 'NYSERDA / Utilities' },
      { name: 'NYSERDA Clean Heat (Heat Pump Water Heater)', amount: '$700–$1,000', type: 'Rebate', authority: 'NYSERDA / Utilities' },
      { name: 'Federal 25C Energy Efficient Home Improvement Credit', amount: '30% up to $2,000 (heat pump portion)', type: 'Tax credit', authority: 'IRS', expiry: 'Dec 31 2032' },
      { name: 'HEEHRA Electrification Rebate', amount: 'Up to $8,000 (income-qualified)', type: 'Rebate', authority: 'NY State Energy Office' },
      { name: 'EmPower NY (Income-Qualified)', amount: 'Free or reduced heat pump install', type: 'Grant', authority: 'NYSERDA' },
      { name: 'NYC Healthy Homes Incentive', amount: 'Up to $5,000', type: 'Rebate', authority: 'NYC HPD' },
    ],
    eligibility: [
      { q: 'Are NYSERDA Clean Heat rebates utility-specific?', a: 'Yes. ConEd, National Grid, NYSEG, RG&E, Central Hudson, and Orange & Rockland each administer slightly different rebate amounts. Statewide minimums apply but utilities can pay more.' },
      { q: 'Cold-climate ASHP requirement?', a: 'Equipment must be on the NEEP Cold Climate Air Source Heat Pump list to qualify for full Clean Heat rebate.' },
      { q: 'Can I do partial heat pump (supplement gas)?', a: 'Yes — partial-displacement heat pumps qualify, but rebate per ton is lower than full whole-home displacement.' },
    ],
    faq: [
      { q: 'How much does a heat pump cost in NY before incentives?', a: '3-ton ducted air-source heat pump installed: $12,000–$18,000. Ground-source: $25,000–$45,000 including ground loop.' },
      { q: 'Does Clean Heat work with HEEHRA?', a: 'Yes — they stack. Clean Heat reduces upfront cost; HEEHRA covers additional cost for income-qualified households up to $8,000.' },
      { q: 'How is "ton" calculated for the rebate?', a: '1 ton = 12,000 BTU/hr cooling capacity. A whole-home 3-ton heat pump qualifies for 3 × $1,500 = $4,500 minimum on ASHP track.' },
      { q: 'Is ductless mini-split eligible?', a: 'Yes. Ductless and ducted both qualify. Ductless rebates are typically slightly lower per ton because of multi-zone scaling rules.' },
      { q: 'Can I claim 25C the same year I claim Clean Heat?', a: 'Yes. Clean Heat reduces basis; federal 25C is calculated on the reduced basis at 30% up to $2,000.' },
      { q: 'NYC Healthy Homes — what is it?', a: 'NYC HPD Healthy Homes pairs heat pump installs with healthy-home upgrades (lead, asthma triggers) for income-qualified rentals and 1–4 family homes. Up to $5,000 additional.' },
      { q: 'Is geothermal subsidized more than air-source?', a: 'Yes. Ground-source heat pumps get $1,500/ton plus $3,000 base under Clean Heat — meaningful for the higher install cost.' },
      { q: 'How do I find a participating contractor?', a: 'NYSERDA Clean Heat contractor search at cleanheatconnects.com.' },
      { q: 'What about heat pump water heaters?', a: 'NYSERDA Clean Heat pays $700–$1,000 for HPWHs. Federal 25C also covers them under the $2,000 heat pump cap.' },
      { q: 'Does Clean Heat cover dual-fuel hybrid systems?', a: 'Yes. Hybrid heat pump + furnace setups qualify. Rebate scales with displaced fossil fuel BTU.' },
    ],
    stackingExample:
      'Buffalo homeowner replaces gas furnace with 3-ton cold-climate ASHP at $14,000: NYSERDA Clean Heat ~$4,500 → basis $9,500. Federal 25C 30% = $2,000 cap. Income-qualified add HEEHRA up to $8,000. Total incentives potentially $14,500 on $14,000 install.',
  },
  {
    stateSlug: 'massachusetts',
    techSlug: 'heat-pump',
    totalAvailable: 'Mass Save up to $10,000 + federal 25C + HEEHRA',
    topProgram: 'Mass Save Whole-Home Heat Pump Rebate',
    deadline: 'Mass Save funded annually — verify current PA incentive levels',
    answerFirst:
      'Massachusetts runs Mass Save — the most generous statewide heat pump rebate program in the US — offering up to $10,000 for whole-home cold-climate heat pump installs that fully replace fossil-fuel heating. Partial-displacement installs receive $1,250 per ton up to $4,000. The Mass Save rebate stacks with the federal 25C credit (30% up to $2,000) and IRA HEEHRA rebates for income-qualified households. Mass Save also covers heat pump water heaters at $750 and ductless mini-split rebates at higher per-ton rates than ducted equivalents.',
    tldr: [
      'Mass Save up to $10,000 for whole-home heat pump (full fossil displacement)',
      'Stacks with federal 25C ($2,000) and HEEHRA',
      'Partial-displacement ASHP gets $1,250/ton up to $4,000',
    ],
    programs: [
      { name: 'Mass Save Whole-Home Heat Pump Rebate', amount: 'Up to $10,000', type: 'Rebate', authority: 'Eversource / National Grid / Unitil' },
      { name: 'Mass Save Partial Heat Pump Rebate', amount: '$1,250 per ton up to $4,000', type: 'Rebate', authority: 'Eversource / National Grid / Unitil' },
      { name: 'Mass Save Heat Pump Water Heater Rebate', amount: '$750', type: 'Rebate', authority: 'Eversource / National Grid / Unitil' },
      { name: 'Mass Save HEAT Loan', amount: '0% APR up to $50,000', type: 'Loan', authority: 'Mass Save / Local banks' },
      { name: 'Federal 25C', amount: '30% up to $2,000', type: 'Tax credit', authority: 'IRS' },
      { name: 'HEEHRA', amount: 'Up to $8,000', type: 'Rebate', authority: 'MA Dept of Energy Resources' },
      { name: 'Mass Save Income-Eligible Heating', amount: 'No-cost installation', type: 'Grant', authority: 'Mass Save' },
    ],
    eligibility: [
      { q: 'Whole-home vs partial — what triggers $10,000?', a: 'Whole-home install displaces 100% of fossil fuel heating (no backup, no dual-fuel hybrid). Partial keeps the existing furnace as backup.' },
      { q: 'Cold-climate equipment requirement?', a: 'Must be on NEEP Cold Climate ASHP list and meet HSPF2 thresholds set annually.' },
    ],
    faq: [
      { q: 'How much does whole-home heat pump cost in MA?', a: 'Typical 3-ton ducted ASHP: $14,000–$22,000 installed in Massachusetts (high labor costs). Ductless multi-zone: $18,000–$30,000 for 4-zone whole-home.' },
      { q: 'Mass Save vs HEEHRA — which goes first?', a: 'Mass Save reduces basis first. HEEHRA may apply to income-qualified households on top. Federal 25C calculates on reduced basis.' },
      { q: 'Mass Save HEAT Loan — really 0%?', a: 'Yes. Up to $50,000 at 0% APR over 7 years for energy-efficient improvements. Mass Save subsidizes the interest. Approval through participating banks (BankFive, Bay State Savings, etc.).' },
      { q: 'Is geothermal under Mass Save?', a: 'Yes — separate ground-source heat pump rebate, typically $4,500–$6,500.' },
      { q: 'Does MA pay for backup electric resistance?', a: 'No. Mass Save will not subsidize electric resistance heating, even as backup. Hybrid systems must use heat pump as primary.' },
    ],
    stackingExample:
      'Boston homeowner whole-home retrofit, 3-ton ducted cold-climate ASHP at $18,000: Mass Save $10,000 → basis $8,000. Federal 25C 30% = $2,000 cap. Total incentives $12,000 on $18,000 install (67% coverage).',
  },
  {
    stateSlug: 'california',
    techSlug: 'heat-pump',
    totalAvailable: 'TECH Clean California $1,000–$3,000 + federal 25C + IRA HEEHRA + utility rebates',
    topProgram: 'TECH Clean California Heat Pump Incentive',
    deadline: 'TECH Clean California funded through 2026 with annual block resets',
    answerFirst:
      'California runs the TECH Clean California program — a statewide $1,000 to $3,000 incentive for residential heat pump space heating and water heating, focused on accelerating cold-climate ASHP adoption in coastal and inland markets. The federal 25C credit (30% up to $2,000) and IRA HEEHRA rebates (up to $8,000 income-qualified) stack on top. PG&E, SCE, SDG&E, and SCG each operate utility-specific heat pump rebates that typically add $500 to $2,000. California Title 24 building code increasingly favors heat pumps in new construction and major retrofits.',
    tldr: [
      'TECH Clean California $1,000–$3,000 statewide',
      'Stacks with federal 25C, HEEHRA, and utility rebates',
      'PG&E + SCE + SDG&E rebates typically $500–$2,000 additional',
    ],
    programs: [
      { name: 'TECH Clean California Heat Pump Space Heating', amount: '$1,000–$3,000', type: 'Rebate', authority: 'TECH (CPUC)' },
      { name: 'TECH Clean California HPWH', amount: '$1,000–$2,500', type: 'Rebate', authority: 'TECH (CPUC)' },
      { name: 'PG&E Heat Pump Rebate', amount: '$1,000', type: 'Rebate', authority: 'PG&E' },
      { name: 'SCE Heat Pump Rebate', amount: '$1,200', type: 'Rebate', authority: 'SCE' },
      { name: 'SoCalGas Heat Pump Water Heater', amount: '$1,000', type: 'Rebate', authority: 'SoCalGas' },
      { name: 'Federal 25C', amount: '30% up to $2,000', type: 'Tax credit', authority: 'IRS' },
      { name: 'HEEHRA', amount: 'Up to $8,000 income-qualified', type: 'Rebate', authority: 'CA Energy Commission' },
      { name: 'BayREN Home+ Rebate', amount: 'Up to $5,000', type: 'Rebate', authority: 'BayREN (9 Bay Area counties)' },
    ],
    eligibility: [
      { q: 'TECH Clean California eligibility?', a: 'Single-family or multifamily residential. Equipment must be on the TECH-approved product list with installer participating in the program.' },
      { q: 'Income limits?', a: 'TECH base rebate has no income cap. HEEHRA (separate) has 150% AMI cap.' },
    ],
    faq: [
      { q: 'Heat pump cost in California?', a: '3-ton ducted ASHP installed: $11,000–$17,000. Ductless mini-split multi-zone: $14,000–$25,000. Heat pump water heater: $4,000–$6,000.' },
      { q: 'Best Bay Area program?', a: 'BayREN Home+ stacks with TECH Clean California in 9 Bay Area counties — additional $1,000–$5,000 depending on whole-home retrofit scope.' },
      { q: 'Is HPWH worth it?', a: 'Federal 25C $2,000 cap covers HPWH. SCE pays $1,000. PG&E pays $300–$500. Total incentives can exceed installed cost difference vs gas — making HPWH effectively free for many households.' },
    ],
    stackingExample:
      'San Diego homeowner installs 3-ton heat pump at $14,000: TECH Clean California $2,000 → basis $12,000. SDG&E rebate $800 → $11,200. Federal 25C 30% = $2,000 cap. Total incentives ~$4,800 plus HEEHRA if income-qualified.',
  },
  {
    stateSlug: 'california',
    techSlug: 'ev',
    totalAvailable: 'Federal $7,500 + CVRP up to $7,500 + SCE/PG&E charger rebates + HOV access',
    topProgram: 'California Clean Vehicle Rebate Project (CVRP) — paused/restructured 2024',
    deadline: 'CVRP paused November 2023 — replaced by CVAP/CC4A successor programs in 2025+',
    answerFirst:
      'California offers the largest stack of EV incentives in the country, but the landscape changed in 2024 when the Clean Vehicle Rebate Project (CVRP) was paused and replaced by income-targeted successor programs (Clean Vehicle Assistance Program, Clean Cars 4 All). The federal 30D credit ($7,500 transferable to dealer at point of sale) remains the largest single incentive. SCE, PG&E, and SDG&E all run home charger rebates ($300–$1,000) and EV TOU rate plans that cut overnight charging costs to $0.14–$0.27/kWh. HOV lane access (CAV decal) remains a meaningful daily-commuter perk in major metros.',
    tldr: [
      'Federal 30D $7,500 point-of-sale (most significant)',
      'CVRP paused — CC4A and CVAP successor programs target income-qualified',
      'PG&E EV2-A rate plan cuts charging cost by ~50%',
    ],
    programs: [
      { name: 'Federal 30D Clean Vehicle Credit', amount: 'Up to $7,500 (transferable POS)', type: 'Tax credit', authority: 'IRS' },
      { name: 'Federal 25E Used Clean Vehicle Credit', amount: 'Up to $4,000', type: 'Tax credit', authority: 'IRS' },
      { name: 'Clean Vehicle Assistance Program (CVAP)', amount: 'Up to $7,500 grant + $2,000 charging credit', type: 'Grant', authority: 'CA Air Resources Board (income-qualified)' },
      { name: 'Clean Cars 4 All (CC4A)', amount: 'Up to $12,000 (vehicle replacement, income-qualified)', type: 'Grant', authority: 'Air Districts (Bay Area, SCAQMD, etc.)' },
      { name: 'PG&E Pre-Owned EV Rebate', amount: '$1,000–$4,000 (income-qualified)', type: 'Rebate', authority: 'PG&E' },
      { name: 'PG&E EV2-A Rate Plan', amount: 'Reduced overnight charging rate', type: 'Net metering', authority: 'PG&E' },
      { name: 'SCE Pre-Owned EV Rebate', amount: '$1,000', type: 'Rebate', authority: 'SCE' },
      { name: 'SCE Charge Ready Home', amount: 'Up to $1,000 charger install', type: 'Rebate', authority: 'SCE' },
      { name: 'CVAP Charging Credit', amount: '$2,000', type: 'Rebate', authority: 'CARB' },
      { name: 'HOV Lane Access (CAV Decal)', amount: 'No cost benefit (time saved)', type: 'Rebate', authority: 'CA DMV' },
      { name: 'Federal 30C EV Charger Credit', amount: '30% up to $1,000 (eligible census tract)', type: 'Tax credit', authority: 'IRS' },
    ],
    eligibility: [
      { q: 'CVRP pause — what should I apply for now?', a: 'CVRP closed to new applicants November 2023. CARB redirected funds to CVAP (income-qualified, ≤300% Federal Poverty Level) and CC4A (vehicle scrap-and-replace, income-qualified by air district).' },
      { q: '30D income cap?', a: '$300,000 MFJ / $150,000 single MAGI. Use the lower of prior tax year or delivery year MAGI.' },
      { q: 'CC4A — which air districts run it?', a: 'Bay Area Air Quality Management District, South Coast AQMD (Los Angeles), San Joaquin Valley AQMD, Sacramento Metro AQMD operate CC4A. Other regions vary.' },
    ],
    faq: [
      { q: 'Best EV rebate for low-income California buyer in 2026?', a: 'CVAP or CC4A combined with federal 30D point-of-sale. CVAP can deliver $7,500 grant + $2,000 charging credit + $7,500 federal = up to $17,000 total off the EV.' },
      { q: 'Can I claim 30D AND CVAP?', a: 'Yes. CVAP grants are not federal credits — they reduce the cost basis but you still claim 30D on the post-grant cost.' },
      { q: 'PG&E EV2-A — how much does it save?', a: 'Off-peak (midnight–3pm) rate ~$0.27/kWh vs Tier 2 standard $0.50+/kWh. For a 30 mi/day commuter charging 9 kWh nightly, savings ~$700/year.' },
      { q: 'Is the CAV decal still issued?', a: 'Yes — clean air vehicle decals continue. Currently white decal for hydrogen FCEV, no new decals issued for BEVs since 2022 (existing decals expire 2026). Plug-in hybrid yellow decals issued through specific years.' },
    ],
    stackingExample:
      'Los Angeles homeowner buys $42,000 new EV: federal 30D $7,500 POS = $34,500 effective price. SCE charger $1,000 rebate. Federal 30C $300–$600 (if eligible census tract). Total stacked savings $8,800–$9,100.',
  },
  {
    stateSlug: 'new-jersey',
    techSlug: 'ev',
    totalAvailable: 'Federal $7,500 + Charge Up NJ up to $4,000 + EZ-Pass discount + sales-tax exemption',
    topProgram: 'Charge Up New Jersey',
    deadline: 'Charge Up NJ funded annually — typically opens July, depleted by October',
    answerFirst:
      'New Jersey runs Charge Up New Jersey — a $4,000 point-of-sale rebate for new EVs purchased from participating dealers — among the most generous state-level EV rebates in the country. Combined with the federal 30D credit ($7,500 POS), New Jersey buyers see up to $11,500 off a qualifying EV. New Jersey also offers a 100% sales-tax exemption on EVs (saving 6.625% on a typical $45,000 EV, or roughly $3,000) and EZ-Pass discounts on the Garden State Parkway and Turnpike. Charge Up NJ is famously fast-depleting — funds typically open in July and are exhausted by October, so timing matters.',
    tldr: [
      'Charge Up NJ $4,000 POS — but funds deplete fast',
      'Federal 30D $7,500 POS stacks',
      '100% sales-tax exemption (~$3,000 on $45k EV)',
    ],
    programs: [
      { name: 'Federal 30D Clean Vehicle Credit', amount: '$7,500 POS', type: 'Tax credit', authority: 'IRS' },
      { name: 'Charge Up New Jersey', amount: 'Up to $4,000 POS', type: 'Rebate', authority: 'NJ BPU', expiry: 'Annual funding cycle' },
      { name: 'NJ Sales Tax Exemption (EVs)', amount: '6.625% of purchase price', type: 'Tax credit', authority: 'NJ Treasury' },
      { name: 'EZ-Pass Green Pass Discount', amount: '10% off Garden State Parkway off-peak tolls', type: 'Rebate', authority: 'NJ Turnpike Authority' },
      { name: 'PSE&G EV Charger Incentive', amount: 'Up to $1,500 + free Level 2 charger', type: 'Rebate', authority: 'PSE&G' },
      { name: 'JCP&L EV Driven Program', amount: 'Make-ready charger install', type: 'Rebate', authority: 'JCP&L' },
      { name: 'Federal 30C EV Charger Credit', amount: '30% up to $1,000', type: 'Tax credit', authority: 'IRS' },
    ],
    eligibility: [
      { q: 'Charge Up NJ income limits?', a: 'No income cap on the base $4,000 rebate. Must purchase from a participating NJ dealer.' },
      { q: 'MSRP cap?', a: '$55,000 MSRP cap on new vehicles eligible for Charge Up NJ.' },
    ],
    faq: [
      { q: 'When does Charge Up NJ open?', a: 'Annually around July 1. Funds typically deplete by October. Confirm at chargeupnewjersey.com before delivery.' },
      { q: 'Can leases qualify for Charge Up NJ?', a: 'Yes — leases of 36 months or more qualify for a prorated rebate.' },
      { q: 'Sales tax exemption — automatic at purchase?', a: 'Yes. NJ-registered EVs are exempt from 6.625% sales tax automatically. Dealer applies the exemption.' },
      { q: 'Used EV rebate?', a: 'Charge Up NJ does not cover used EVs. Federal 25E ($4,000) covers used EVs sold from registered dealers.' },
    ],
    stackingExample:
      'NJ buyer of $42,000 EV: federal 30D $7,500 POS + Charge Up NJ $4,000 POS + sales-tax exemption ~$2,800 = $14,300 stacked savings. Effective price $27,700.',
  },
  {
    stateSlug: 'california',
    techSlug: 'battery',
    totalAvailable: 'Federal 25D 30% + SGIP up to $1,000/kWh + utility critical-load rebates',
    topProgram: 'Self-Generation Incentive Program (SGIP) — Battery Storage',
    deadline: 'SGIP rolling step-down by reservation block',
    answerFirst:
      'California runs the Self-Generation Incentive Program (SGIP) — the most generous statewide battery storage rebate in the US — paying $150 to $1,000 per kWh of installed battery capacity. SGIP combines with the federal 25D credit (30% uncapped) for residential battery storage of 3 kWh or larger. Equity tier (≤80% AMI or DAC residency) and Equity Resiliency tier (medical baseline customers, wildfire fire-threat zones) deliver the highest per-kWh rebates. PG&E, SCE, and SDG&E all administer SGIP. Standalone batteries qualify under both federal 25D (since 2023) and SGIP — solar prerequisite is no longer required for either.',
    tldr: [
      'SGIP $150–$1,000/kWh statewide',
      'Federal 25D 30% (uncapped) + SGIP — both apply to standalone batteries',
      'Equity Resiliency tier $1,000/kWh for medical baseline / wildfire zones',
    ],
    programs: [
      { name: 'SGIP General Market', amount: '$150 per kWh', type: 'Rebate', authority: 'CPUC' },
      { name: 'SGIP Equity Budget', amount: '$850 per kWh', type: 'Rebate', authority: 'CPUC' },
      { name: 'SGIP Equity Resiliency', amount: '$1,000 per kWh', type: 'Rebate', authority: 'CPUC' },
      { name: 'Federal 25D Residential Clean Energy Credit', amount: '30% uncapped', type: 'Tax credit', authority: 'IRS' },
      { name: 'PG&E EV2-A Rate (battery+EV pairing)', amount: 'Reduced TOU charging', type: 'Net metering', authority: 'PG&E' },
      { name: 'Tesla Powerwall Virtual Power Plant', amount: '~$2 per kWh exported during events', type: 'Performance payment', authority: 'PG&E + SCE pilots' },
    ],
    eligibility: [
      { q: 'How is Equity tier determined?', a: '≤80% Area Median Income, residence in a Disadvantaged Community (DAC) census tract per CalEnviroScreen, or participation in CARE/FERA utility programs.' },
      { q: 'Equity Resiliency tier?', a: 'Medical baseline customers, residents in Tier 2/3 fire-threat districts (CalFire FHSZ), or those in Public Safety Power Shutoff (PSPS) zones with prior outages.' },
    ],
    faq: [
      { q: 'How much does Tesla Powerwall 3 cost in California?', a: '13.5 kWh usable capacity, $11,500–$15,000 installed including gateway. Federal 25D 30% = ~$3,500 credit. SGIP General Market $2,025. Equity tier $11,475. Equity Resiliency $13,500.' },
      { q: 'Standalone battery without solar — does SGIP apply?', a: 'Yes. SGIP does not require solar pairing. Federal 25D since 2023 also applies to standalone 3+ kWh batteries.' },
      { q: 'How fast do SGIP blocks fill?', a: 'General Market reservations open by step (declining $/kWh). Each step depletes within months. Reserve through installer at contract.' },
      { q: 'Tesla Powerwall VPP — meaningful payment?', a: 'PG&E + Tesla VPP pilots paid ~$2 per kWh exported during grid events in 2023–2024. Annual income $200–$600 for typical customer.' },
    ],
    stackingExample:
      'San Francisco homeowner adds 13.5 kWh Powerwall 3 at $13,000: federal 25D 30% = $3,900. SGIP Equity Resiliency $13,500 (if qualified) — exceeds install cost (capped at install). Net cost $0 for qualifying medical baseline customer.',
  },
  {
    stateSlug: 'texas',
    techSlug: 'battery',
    totalAvailable: 'Federal 25D 30% + Oncor Take A Load Off battery rider',
    topProgram: 'Oncor Take A Load Off Texas — Battery Storage Standard Offer',
    deadline: 'Annual program — Oncor caps reset each January',
    answerFirst:
      'Texas does not have a state-level battery storage rebate, but Oncor — the wires utility for Dallas-Fort Worth and most of north Texas — offers a Battery Storage Standard Offer that pays roughly $0.50 to $0.85 per watt-hour of installed capacity. The federal 25D credit (30% uncapped) applies to batteries 3 kWh or larger. Texas grid resilience after the February 2021 winter storm Uri made battery storage demand surge — Powerwall installs in 2025–2026 frequently include critical-load backup for water pumps, refrigeration, and medical equipment. Battery economics on retail-competitive ERCOT plans (Reliant, Green Mountain) are improved by REP-specific TOU plans that pair with home batteries.',
    tldr: [
      'Federal 25D 30% (uncapped) on standalone batteries 3+ kWh',
      'Oncor Standard Offer ~$0.50–$0.85/Wh in DFW territory',
      'Storm Uri-driven demand has lowered installed cost via volume',
    ],
    programs: [
      { name: 'Federal 25D Residential Clean Energy Credit', amount: '30% uncapped', type: 'Tax credit', authority: 'IRS' },
      { name: 'Oncor Battery Storage Standard Offer', amount: '$0.50–$0.85 per Wh installed', type: 'Performance payment', authority: 'Oncor' },
      { name: 'Reliant TrueLease Battery (Tesla Powerwall lease)', amount: '$45–$65/mo all-inclusive', type: 'Loan', authority: 'Reliant Energy' },
      { name: 'Sunnova Battery Lease', amount: 'Lease-based monthly', type: 'Loan', authority: 'Sunnova' },
    ],
    eligibility: [
      { q: 'Do I need to be in Oncor territory?', a: 'Yes for the Oncor Battery Standard Offer. Most DFW, west Texas, and rural north Texas residents are on Oncor lines regardless of REP choice.' },
    ],
    faq: [
      { q: 'Tesla Powerwall 3 cost in Texas?', a: '$11,000–$13,500 installed for 13.5 kWh. Lower than California due to cheaper labor.' },
      { q: 'Does the Oncor rebate stack with federal 25D?', a: 'Yes. Oncor reduces basis; federal 25D applies 30% to reduced basis.' },
      { q: 'Are batteries useful in ERCOT outages?', a: 'Yes — critical-load backup for refrigeration, water pumps, medical equipment is the primary value proposition. Storm Uri (2021) and Hurricane Beryl (2024) drove battery adoption sharply higher in Texas.' },
    ],
    stackingExample:
      'Dallas homeowner adds 13.5 kWh battery at $12,000: Oncor rebate ~$8,775 (at $0.65/Wh) → basis $3,225. Federal 25D 30% on full $12,000 (rebate is performance payment, may not reduce basis depending on structure) = $3,600. Effective net cost ~$0 in best case.',
  },
];

export const STATE_TECH_BY_KEY: Record<string, StateTech> = Object.fromEntries(
  STATE_TECH.map((st) => [`${st.stateSlug}|${st.techSlug}`, st])
);
