const SITE = 'https://claimwatt.com';

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url.startsWith('http') ? it.url : `${SITE}${it.url}`,
    })),
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ClaimWatt',
    url: SITE,
    logo: `${SITE}/logo.svg`,
    description:
      'ClaimWatt tracks every US federal, state, county, city, and utility renewable-energy rebate, tax credit, and incentive — solar, heat pump, EV, battery, geothermal — so homeowners can find and stack every dollar they qualify for.',
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ClaimWatt',
    url: SITE,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

type Program = {
  name: string;
  amount: string;
  type: string;
  authority: string;
  url?: string;
  state?: string;
  expiry?: string;
};

export function governmentServiceSchema(p: Program & { description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    name: p.name,
    description: p.description,
    serviceType: p.type,
    provider: { '@type': 'GovernmentOrganization', name: p.authority },
    areaServed: p.state
      ? { '@type': 'AdministrativeArea', name: p.state }
      : { '@type': 'Country', name: 'United States' },
    audience: { '@type': 'Audience', audienceType: 'Homeowner' },
    offers: {
      '@type': 'Offer',
      price: p.amount,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      ...(p.expiry ? { validThrough: p.expiry } : {}),
    },
    ...(p.url ? { url: p.url } : {}),
  };
}

export function collectionPageSchema(opts: {
  url: string; name: string; description: string; items: { name: string; url: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: opts.name,
    description: opts.description,
    url: `${SITE}${opts.url}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: opts.items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.name,
        url: `${SITE}${it.url}`,
      })),
    },
  };
}

export function faqSchema(qa: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function howToSchema(opts: { name: string; steps: { name: string; text: string }[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function articleSchema(opts: {
  url: string; headline: string; description: string; datePublished: string; dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: `${SITE}${opts.url}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { '@type': 'Organization', name: 'ClaimWatt' },
    publisher: {
      '@type': 'Organization',
      name: 'ClaimWatt',
      logo: { '@type': 'ImageObject', url: `${SITE}/logo.svg` },
    },
  };
}

export function jsonLd(...blocks: object[]) {
  return blocks.map((b) => JSON.stringify(b)).join('\n');
}
