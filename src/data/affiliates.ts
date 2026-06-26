// Central affiliate config — single source of truth for every AffiliateCard on the site.
// Fill in the real IDs/links below and flip `enabled: true`; all cards update automatically.
//
// STATUS (2026-06-26): ALL PLACEHOLDERS. These earn £0 until Sunny signs up + is approved:
//   - Modernize / Networx / EnergySage: apply for a publisher (lead-gen) account, paste the
//     tracking link from their dashboard into `url`.
//   - Tesla: paste your personal Tesla referral link.
//   - Amazon: register claimwatt.com in Amazon Associates, then set `tag` (e.g. 'claimwatt-21').
// Do NOT reuse another site's Amazon tag here — each site must be listed on the Associates account.

export type Partner = 'modernize' | 'networx' | 'amazon' | 'tesla' | 'energysage';

type LinkPartner = { enabled: boolean; url: string };
type AmazonPartner = { enabled: boolean; tag: string };

export const AFFILIATES: Record<Partner, LinkPartner | AmazonPartner> = {
  modernize:  { enabled: false, url: '' },
  networx:    { enabled: false, url: '' },
  energysage: { enabled: false, url: '' },
  tesla:      { enabled: false, url: '' },
  amazon:     { enabled: false, tag: '' },
};

// Resolve the outbound href for a partner. Returns '#' (inert) until the partner is enabled.
export function affiliateHref(partner: Partner, tech?: string): string {
  const cfg = AFFILIATES[partner];
  if (!cfg.enabled) return '#';
  if (partner === 'amazon') {
    const tag = (cfg as AmazonPartner).tag;
    if (!tag) return '#';
    const q = encodeURIComponent(tech ? `${tech} energy efficient` : 'home energy efficient');
    return `https://www.amazon.com/s?k=${q}&tag=${tag}`;
  }
  return (cfg as LinkPartner).url || '#';
}
