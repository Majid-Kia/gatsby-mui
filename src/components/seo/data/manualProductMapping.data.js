const mapper = {
  'buy-rdp': {
    '@context': 'http://schema.org',
    '@type': 'Product',
    name: 'RDP VPS',
    description:
      'Buy RDP for only $7.95/m✅ Buy Cheap RDP 24/7 online with BTC⭐️15 different locations✅ FREE setup & DDoS protection⭐️ with Admin access',
    image: '{{imagePath}}',
    sku: 'VPSHosting',
    offers: {
      '@type': 'AggregateOffer',
      availability: 'InStock',
      priceValidUntil: '2023-06-01',
      url: 'https://cloudzy.com/buy-rdp/',
      priceCurrency: 'USD',
      lowPrice: '7.95',
      highPrice: '54.95',
      offerCount: 4,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingCount: 75,
      ratingValue: 4.9,
      bestRating: '5',
      worstRating: '1',
    },
    brand: { '@type': 'Organization', name: 'Cloudzy' },
  },
  'usa-rdp': {
    '@context': 'http://schema.org',
    '@type': 'Product',
    name: 'USA RDP',
    description:
      '🇺🇸 USA RDP servers deliver the ultrafast, high-performance infrastructure necessary to create your ideal remote desktop ⭐️ With guaranteed 99.95% uptime',
    image: '{{imagePath}}',
    sku: 'VPSHosting',
    mpn: 'VPS Hosting',
    offers: {
      '@type': 'AggregateOffer',
      availability: 'InStock',
      priceValidUntil: '2023-06-01',
      url: 'https://cloudzy.com/usa-rdp',
      priceCurrency: 'USD',
      lowPrice: '7.95',
      highPrice: '54.95',
      offerCount: 4,
    },
    brand: { '@type': 'Organization', name: 'Cloudzy' },
  },
};

export const getMapping = (slug, imagePath) => {
  const customSchema = mapper[slug];
  if (!customSchema) {
    return;
  }

  customSchema.image = imagePath;
  return customSchema;
};
