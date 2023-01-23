const mapper = {
  'usa-rdp': {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Cloudzy',
    image: 'https://cloudzy.com/navbarLogo.svg',
    '@id': 'https://cloudzy.com',
    url: 'https://cloudzy.com/',
    telephone: '+1-332-600-4050',
    priceRange: '$7.95 - $54.95',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11 Brooklyn',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: 'NY 100064',
      addressCountry: 'US',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      bestRating: '5',
      worstRating: '1',
      ratingCount: 75,
    },
  },
};

export const getMapping = (slug) => {
  return mapper[slug];
};
