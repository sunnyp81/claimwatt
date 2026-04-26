export type State = {
  code: string;
  name: string;
  slug: string;
  population: number;
  climateZone: string;
  topUtility: string;
  topProgram: string;
  solarPotential: 'High' | 'Very High' | 'Moderate' | 'Low';
  heatPumpFit: 'Excellent' | 'Strong' | 'Good' | 'Variable';
};

export const STATES: State[] = [
  { code: 'AL', name: 'Alabama', slug: 'alabama', population: 5108000, climateZone: '3A', topUtility: 'Alabama Power', topProgram: 'TVA EnergyRight', solarPotential: 'High', heatPumpFit: 'Excellent' },
  { code: 'AK', name: 'Alaska', slug: 'alaska', population: 733000, climateZone: '7-8', topUtility: 'Chugach Electric', topProgram: 'AHFC Home Energy Rebate', solarPotential: 'Low', heatPumpFit: 'Variable' },
  { code: 'AZ', name: 'Arizona', slug: 'arizona', population: 7431000, climateZone: '2B-4B', topUtility: 'APS', topProgram: 'APS Solar Communities', solarPotential: 'Very High', heatPumpFit: 'Strong' },
  { code: 'AR', name: 'Arkansas', slug: 'arkansas', population: 3068000, climateZone: '3A-4A', topUtility: 'Entergy Arkansas', topProgram: 'Entergy Solutions', solarPotential: 'High', heatPumpFit: 'Excellent' },
  { code: 'CA', name: 'California', slug: 'california', population: 38940000, climateZone: '3B-5B', topUtility: 'PG&E', topProgram: 'SGIP Battery Rebate', solarPotential: 'Very High', heatPumpFit: 'Strong' },
  { code: 'CO', name: 'Colorado', slug: 'colorado', population: 5878000, climateZone: '5B-7', topUtility: 'Xcel Energy', topProgram: 'Xcel Solar*Rewards', solarPotential: 'High', heatPumpFit: 'Good' },
  { code: 'CT', name: 'Connecticut', slug: 'connecticut', population: 3617000, climateZone: '5A', topUtility: 'Eversource', topProgram: 'EnergizeCT Heat Pump', solarPotential: 'Moderate', heatPumpFit: 'Strong' },
  { code: 'DE', name: 'Delaware', slug: 'delaware', population: 1032000, climateZone: '4A', topUtility: 'Delmarva Power', topProgram: 'Energize Delaware', solarPotential: 'High', heatPumpFit: 'Excellent' },
  { code: 'FL', name: 'Florida', slug: 'florida', population: 22610000, climateZone: '1A-2A', topUtility: 'Florida Power & Light', topProgram: 'FPL SolarTogether', solarPotential: 'Very High', heatPumpFit: 'Excellent' },
  { code: 'GA', name: 'Georgia', slug: 'georgia', population: 11030000, climateZone: '2A-3A', topUtility: 'Georgia Power', topProgram: 'Georgia Power Rebates', solarPotential: 'High', heatPumpFit: 'Excellent' },
  { code: 'HI', name: 'Hawaii', slug: 'hawaii', population: 1435000, climateZone: '1A', topUtility: 'Hawaiian Electric', topProgram: 'Hawaii Energy', solarPotential: 'Very High', heatPumpFit: 'Excellent' },
  { code: 'ID', name: 'Idaho', slug: 'idaho', population: 1965000, climateZone: '5B-6B', topUtility: 'Idaho Power', topProgram: 'Idaho Power Rebates', solarPotential: 'High', heatPumpFit: 'Good' },
  { code: 'IL', name: 'Illinois', slug: 'illinois', population: 12550000, climateZone: '4A-5A', topUtility: 'ComEd', topProgram: 'Illinois Shines', solarPotential: 'Moderate', heatPumpFit: 'Good' },
  { code: 'IN', name: 'Indiana', slug: 'indiana', population: 6863000, climateZone: '4A-5A', topUtility: 'AES Indiana', topProgram: 'Indiana Energy Saver', solarPotential: 'Moderate', heatPumpFit: 'Good' },
  { code: 'IA', name: 'Iowa', slug: 'iowa', population: 3207000, climateZone: '5A-6A', topUtility: 'MidAmerican', topProgram: 'MidAmerican EnergyAdvantage', solarPotential: 'Moderate', heatPumpFit: 'Good' },
  { code: 'KS', name: 'Kansas', slug: 'kansas', population: 2941000, climateZone: '4A-5A', topUtility: 'Evergy', topProgram: 'Evergy Rebates', solarPotential: 'High', heatPumpFit: 'Good' },
  { code: 'KY', name: 'Kentucky', slug: 'kentucky', population: 4527000, climateZone: '4A', topUtility: 'LG&E and KU', topProgram: 'LG&E HVAC Rebate', solarPotential: 'Moderate', heatPumpFit: 'Excellent' },
  { code: 'LA', name: 'Louisiana', slug: 'louisiana', population: 4574000, climateZone: '2A-3A', topUtility: 'Entergy Louisiana', topProgram: 'Entergy Quick Start', solarPotential: 'High', heatPumpFit: 'Excellent' },
  { code: 'ME', name: 'Maine', slug: 'maine', population: 1395000, climateZone: '6A-7', topUtility: 'CMP', topProgram: 'Efficiency Maine Heat Pumps', solarPotential: 'Moderate', heatPumpFit: 'Strong' },
  { code: 'MD', name: 'Maryland', slug: 'maryland', population: 6181000, climateZone: '4A', topUtility: 'BGE', topProgram: 'EmPOWER Maryland', solarPotential: 'High', heatPumpFit: 'Excellent' },
  { code: 'MA', name: 'Massachusetts', slug: 'massachusetts', population: 7001000, climateZone: '5A', topUtility: 'Eversource', topProgram: 'Mass Save', solarPotential: 'Moderate', heatPumpFit: 'Strong' },
  { code: 'MI', name: 'Michigan', slug: 'michigan', population: 10037000, climateZone: '5A-6A', topUtility: 'DTE Energy', topProgram: 'DTE Insight Rebates', solarPotential: 'Moderate', heatPumpFit: 'Good' },
  { code: 'MN', name: 'Minnesota', slug: 'minnesota', population: 5737000, climateZone: '6A-7', topUtility: 'Xcel Energy', topProgram: 'Xcel Solar*Rewards', solarPotential: 'Moderate', heatPumpFit: 'Good' },
  { code: 'MS', name: 'Mississippi', slug: 'mississippi', population: 2940000, climateZone: '2A-3A', topUtility: 'Mississippi Power', topProgram: 'Mississippi Power Rebates', solarPotential: 'High', heatPumpFit: 'Excellent' },
  { code: 'MO', name: 'Missouri', slug: 'missouri', population: 6196000, climateZone: '4A-5A', topUtility: 'Ameren Missouri', topProgram: 'Ameren Energy Efficiency', solarPotential: 'High', heatPumpFit: 'Good' },
  { code: 'MT', name: 'Montana', slug: 'montana', population: 1132000, climateZone: '6B-7', topUtility: 'NorthWestern Energy', topProgram: 'NorthWestern E+ Rebates', solarPotential: 'Moderate', heatPumpFit: 'Good' },
  { code: 'NE', name: 'Nebraska', slug: 'nebraska', population: 1988000, climateZone: '5A', topUtility: 'OPPD', topProgram: 'OPPD Rebates', solarPotential: 'High', heatPumpFit: 'Good' },
  { code: 'NV', name: 'Nevada', slug: 'nevada', population: 3178000, climateZone: '3B-5B', topUtility: 'NV Energy', topProgram: 'NV Energy Solar Rebate', solarPotential: 'Very High', heatPumpFit: 'Strong' },
  { code: 'NH', name: 'New Hampshire', slug: 'new-hampshire', population: 1402000, climateZone: '5A-6A', topUtility: 'Eversource', topProgram: 'NHSaves Heat Pump', solarPotential: 'Moderate', heatPumpFit: 'Strong' },
  { code: 'NJ', name: 'New Jersey', slug: 'new-jersey', population: 9290000, climateZone: '4A-5A', topUtility: 'PSE&G', topProgram: 'NJ Clean Energy Program', solarPotential: 'High', heatPumpFit: 'Excellent' },
  { code: 'NM', name: 'New Mexico', slug: 'new-mexico', population: 2114000, climateZone: '3B-5B', topUtility: 'PNM', topProgram: 'PNM Power Saver Rebates', solarPotential: 'Very High', heatPumpFit: 'Strong' },
  { code: 'NY', name: 'New York', slug: 'new-york', population: 19571000, climateZone: '4A-6A', topUtility: 'ConEdison', topProgram: 'NY-Sun + Clean Heat', solarPotential: 'Moderate', heatPumpFit: 'Strong' },
  { code: 'NC', name: 'North Carolina', slug: 'north-carolina', population: 10835000, climateZone: '3A-4A', topUtility: 'Duke Energy', topProgram: 'Duke Energy Smart $aver', solarPotential: 'High', heatPumpFit: 'Excellent' },
  { code: 'ND', name: 'North Dakota', slug: 'north-dakota', population: 783000, climateZone: '6A-7', topUtility: 'Xcel Energy', topProgram: 'Xcel Solar*Rewards', solarPotential: 'Moderate', heatPumpFit: 'Good' },
  { code: 'OH', name: 'Ohio', slug: 'ohio', population: 11785000, climateZone: '4A-5A', topUtility: 'AEP Ohio', topProgram: 'AEP Energy Efficient Products', solarPotential: 'Moderate', heatPumpFit: 'Good' },
  { code: 'OK', name: 'Oklahoma', slug: 'oklahoma', population: 4054000, climateZone: '3A-4A', topUtility: 'OG&E', topProgram: 'OG&E SmartHours', solarPotential: 'High', heatPumpFit: 'Excellent' },
  { code: 'OR', name: 'Oregon', slug: 'oregon', population: 4234000, climateZone: '4C-5B', topUtility: 'PGE', topProgram: 'Energy Trust of Oregon', solarPotential: 'Moderate', heatPumpFit: 'Strong' },
  { code: 'PA', name: 'Pennsylvania', slug: 'pennsylvania', population: 12961000, climateZone: '4A-5A', topUtility: 'PECO', topProgram: 'Pennsylvania Sunshine', solarPotential: 'Moderate', heatPumpFit: 'Good' },
  { code: 'RI', name: 'Rhode Island', slug: 'rhode-island', population: 1095000, climateZone: '5A', topUtility: 'Rhode Island Energy', topProgram: 'EnergyWise Rebates', solarPotential: 'Moderate', heatPumpFit: 'Strong' },
  { code: 'SC', name: 'South Carolina', slug: 'south-carolina', population: 5374000, climateZone: '3A', topUtility: 'Duke Energy', topProgram: 'Duke Smart $aver', solarPotential: 'High', heatPumpFit: 'Excellent' },
  { code: 'SD', name: 'South Dakota', slug: 'south-dakota', population: 920000, climateZone: '5A-6A', topUtility: 'Black Hills Energy', topProgram: 'Black Hills Rebates', solarPotential: 'Moderate', heatPumpFit: 'Good' },
  { code: 'TN', name: 'Tennessee', slug: 'tennessee', population: 7126000, climateZone: '3A-4A', topUtility: 'TVA', topProgram: 'TVA EnergyRight', solarPotential: 'High', heatPumpFit: 'Excellent' },
  { code: 'TX', name: 'Texas', slug: 'texas', population: 30503000, climateZone: '2A-3B', topUtility: 'Oncor', topProgram: 'Oncor Take A Load Off Texas', solarPotential: 'Very High', heatPumpFit: 'Excellent' },
  { code: 'UT', name: 'Utah', slug: 'utah', population: 3417000, climateZone: '3B-5B', topUtility: 'Rocky Mountain Power', topProgram: 'Wattsmart Rebates', solarPotential: 'High', heatPumpFit: 'Strong' },
  { code: 'VT', name: 'Vermont', slug: 'vermont', population: 647000, climateZone: '6A', topUtility: 'Green Mountain Power', topProgram: 'Efficiency Vermont', solarPotential: 'Moderate', heatPumpFit: 'Strong' },
  { code: 'VA', name: 'Virginia', slug: 'virginia', population: 8716000, climateZone: '4A', topUtility: 'Dominion Energy', topProgram: 'Dominion Energy Conservation', solarPotential: 'High', heatPumpFit: 'Excellent' },
  { code: 'WA', name: 'Washington', slug: 'washington', population: 7812000, climateZone: '4C-5B', topUtility: 'Puget Sound Energy', topProgram: 'PSE Rebates', solarPotential: 'Moderate', heatPumpFit: 'Strong' },
  { code: 'WV', name: 'West Virginia', slug: 'west-virginia', population: 1770000, climateZone: '4A-5A', topUtility: 'Appalachian Power', topProgram: 'AEP Take Charge WV', solarPotential: 'Moderate', heatPumpFit: 'Good' },
  { code: 'WI', name: 'Wisconsin', slug: 'wisconsin', population: 5910000, climateZone: '5A-6A', topUtility: 'We Energies', topProgram: 'Focus on Energy', solarPotential: 'Moderate', heatPumpFit: 'Good' },
  { code: 'WY', name: 'Wyoming', slug: 'wyoming', population: 584000, climateZone: '6B-7', topUtility: 'Rocky Mountain Power', topProgram: 'Wattsmart Rebates', solarPotential: 'High', heatPumpFit: 'Good' },
];

export const STATE_BY_SLUG: Record<string, State> = Object.fromEntries(
  STATES.map((s) => [s.slug, s])
);
