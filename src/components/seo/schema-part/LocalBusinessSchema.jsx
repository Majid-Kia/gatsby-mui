import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import globalVariables from 'repository/global-variable.repository';
import { getMapping } from '../data/manualLocalBusinessMapping.data';

const DynamicLocalBusinessSchema = ({ slug, ratingCount, ratingValue }) => {
  const localBusinessJson = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Cloudzy',
    image: `${process.env.GATSBY_SITE_URL}/navbarLogo.svg`,
    '@id': 'https://cloudzy.com',
    url: `${process.env.GATSBY_SITE_URL}/${slug}`,
    telephone: '+1-332-600-4050',
    priceRange: `${globalVariables.STARTING_PRICE} - $${globalVariables.HIGHEST_PRICE_WITHOUT_UNIT}`,
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
      ratingValue: ratingValue,
      bestRating: '5',
      worstRating: '1',
      ratingCount: ratingCount,
    },
  };
  return (
    <Helmet>
      <script type={'application/ld+json'}>
        {JSON.stringify(localBusinessJson)}
      </script>
    </Helmet>
  );
};

DynamicLocalBusinessSchema.prototype = {
  slug: PropTypes.string.isRequired,
  ratingCount: PropTypes.number.isRequired,
  ratingValue: PropTypes.number.isRequired,
};

const LocalBusinessSchema = ({ slug, ratingCount, ratingValue, isLanding }) => {
  const customSchema = getMapping(slug);
  if (customSchema) {
    return (
      <Helmet>
        <script type={'application/ld+json'}>
          {JSON.stringify(customSchema)}
        </script>
      </Helmet>
    );
  }

  return (
    !isLanding && (
      <DynamicLocalBusinessSchema
        ratingCount={ratingCount}
        ratingValue={ratingValue}
        slug={slug}
      />
    )
  );
};

LocalBusinessSchema.propTypes = {
  slug: PropTypes.string.isRequired,
  ratingCount: PropTypes.number.isRequired,
  ratingValue: PropTypes.number.isRequired,
  isLanding: PropTypes.bool.isRequired,
};

export default LocalBusinessSchema;
