export type Tech = {
  slug: string;
  name: string;
  shortName: string;
  pluralLower: string;
  federalCredit: string;
  federalCreditSlug: string;
  federalAmount: string;
  primaryRebatePartner: 'modernize' | 'networx' | 'amazon' | 'tesla' | 'energysage';
  description: string;
  averageProjectCost: string;
  averageSavings: string;
  topRebateExamples: string[];
};

export const TECH: Tech[] = [
  {
    slug: 'solar',
    name: 'Solar Panels',
    shortName: 'Solar',
    pluralLower: 'solar rebates',
    federalCredit: 'Section 25D Residential Clean Energy Credit',
    federalCreditSlug: '25d-residential-clean-energy',
    federalAmount: '30% of total system cost',
    primaryRebatePartner: 'modernize',
    description:
      'Federal 25D pays 30% of system cost with no cap. State and utility rebates can stack on top, often adding $1,000–$10,000. Net metering and SREC markets add ongoing income.',
    averageProjectCost: '$15,000–$25,000 (8 kW system, before incentives)',
    averageSavings: '30% federal + state/utility avg $2,000–$4,000 = ~$7,500 typical stacked savings',
    topRebateExamples: [
      'California SGIP (battery component)',
      'New York NY-Sun MW Block',
      'Massachusetts SMART Tariff',
      'Illinois Shines / SREC market',
      'Texas Oncor Solar PV Standard Offer',
    ],
  },
  {
    slug: 'heat-pump',
    name: 'Heat Pumps',
    shortName: 'Heat Pump',
    pluralLower: 'heat pump rebates',
    federalCredit: 'Section 25C Energy Efficient Home Improvement Credit',
    federalCreditSlug: '25c-energy-efficient-home-improvement',
    federalAmount: '30% up to $2,000/year for heat pumps',
    primaryRebatePartner: 'networx',
    description:
      'Federal 25C covers 30% of heat pump cost up to $2,000 per year — and you can claim again next year for a different upgrade. IRA HEEHRA adds up to $8,000 for income-qualified households. State and utility rebates often add $500–$3,500.',
    averageProjectCost: '$8,000–$18,000 installed (3-ton air-source whole-home)',
    averageSavings: '$2,000 federal + state/utility avg $1,500 + HEEHRA up to $8,000 (income-qualified)',
    topRebateExamples: [
      'Mass Save Heat Pump Rebate ($10,000)',
      'NY Clean Heat (up to $5,000)',
      'Efficiency Maine ($8,000+)',
      'Energy Trust of Oregon ($1,800)',
      'Xcel Colorado Heat Pump',
    ],
  },
  {
    slug: 'ev',
    name: 'Electric Vehicles',
    shortName: 'EV',
    pluralLower: 'EV rebates',
    federalCredit: 'Section 30D Clean Vehicle Credit',
    federalCreditSlug: '30d-clean-vehicle-credit',
    federalAmount: '$7,500 (new) or $4,000 (used) at point of sale',
    primaryRebatePartner: 'tesla',
    description:
      'Federal 30D delivers $7,500 off a qualifying new EV — transferable at point of sale since 2024. 25E adds $4,000 for used EVs. State rebates from $500 to $7,500 stack on top in 24+ states.',
    averageProjectCost: '$45,000 average new EV transaction price (2026)',
    averageSavings: '$7,500 federal + state avg $2,000–$5,000 + utility charger rebate avg $500',
    topRebateExamples: [
      'California Clean Vehicle Rebate Project',
      'Colorado EV Tax Credit ($5,000)',
      'New Jersey Charge Up ($4,000)',
      'New York Drive Clean Rebate ($2,000)',
      'Connecticut CHEAPR ($4,250)',
    ],
  },
  {
    slug: 'battery',
    name: 'Home Batteries',
    shortName: 'Battery',
    pluralLower: 'battery rebates',
    federalCredit: 'Section 25D Residential Clean Energy Credit',
    federalCreditSlug: '25d-residential-clean-energy',
    federalAmount: '30% of total cost (3 kWh+ standalone since 2023)',
    primaryRebatePartner: 'amazon',
    description:
      'Federal 25D covers 30% of battery cost — standalone batteries (no solar required) qualified starting tax year 2023. State programs like California SGIP pay $150–$1,000 per kWh on top.',
    averageProjectCost: '$10,000–$20,000 (10–13 kWh system installed)',
    averageSavings: '30% federal + SGIP up to $1,000/kWh in California',
    topRebateExamples: [
      'California SGIP ($150–$1,000/kWh)',
      'Massachusetts ConnectedSolutions',
      'Connecticut Energy Storage Solutions',
      'Hawaii Battery Bonus',
      'Vermont Green Mountain Power Resilient Home',
    ],
  },
  {
    slug: 'geothermal',
    name: 'Geothermal Heat Pumps',
    shortName: 'Geothermal',
    pluralLower: 'geothermal rebates',
    federalCredit: 'Section 25D Residential Clean Energy Credit',
    federalCreditSlug: '25d-residential-clean-energy',
    federalAmount: '30% of total system cost',
    primaryRebatePartner: 'networx',
    description:
      'Federal 25D pays 30% of geothermal heat pump cost — uncapped. State and utility rebates from $500 to $5,000 are common. Operating savings are 50–70% vs propane and 25–50% vs gas.',
    averageProjectCost: '$20,000–$40,000 (3-ton ground-source installed)',
    averageSavings: '30% federal + utility avg $1,500 + state credits in 12 states',
    topRebateExamples: [
      'NY Clean Heat Geothermal ($1,500/ton)',
      'Mass Save Ground Source Heat Pump',
      'Maryland Clean Energy Grant',
      'Iowa Geothermal Tax Credit',
      'Indiana CenterPoint GeoSmart',
    ],
  },
];

export const TECH_BY_SLUG: Record<string, Tech> = Object.fromEntries(
  TECH.map((t) => [t.slug, t])
);
