import React from 'react';
import globalVariables from '../../../repository/global-variable.repository';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { getMapping } from '../data/manualProductMapping.data';
const DynamicProductSchema = ({
  description,
  imagePath,
  slug,
  ratingCount,
  ratingValue,
}) => {
  const structuredJson = {
    '@context': 'http://schema.org',
    '@type': 'Product',
    name: 'VPS Hosting', //
    description: description,
    image: imagePath,
    sku: 'VPSHosting',
    mpn: 'VPS Hosting',
    offers: {
      '@type': 'AggregateOffer',
      availability: 'InStock',
      priceValidUntil: '2023-06-01',
      url: `${process.env.GATSBY_SITE_URL}/${slug}`,
      priceCurrency: 'USD',
      lowPrice: globalVariables.STARTING_PRICE_WITHOUT_UNIT,
      highPrice: globalVariables.HIGHEST_PRICE_WITHOUT_UNIT,
      offerCount: globalVariables.PRICE_OFFER_COUNT,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingCount: ratingCount,
      ratingValue: ratingValue,
      bestRating: '5',
      worstRating: '1',
    },
    brand: {
      '@type': 'Organization',
      name: 'Cloudzy',
    },
    review: {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: '🥇Cloudzy🥇',
      },
    },
  };
  return (
    <Helmet>
      <script type={'application/ld+json'}>
        {JSON.stringify(structuredJson)}
      </script>
    </Helmet>
  );
};

DynamicProductSchema.propTypes = {
  description: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  ratingCount: PropTypes.number.isRequired,
  ratingValue: PropTypes.number.isRequired,
};

const ProductSchema = ({
  description,
  imagePath,
  slug,
  ratingCount,
  ratingValue,
}) => {
  const customSchema = getMapping(slug, imagePath);
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
    <DynamicProductSchema
      description={description}
      imagePath={imagePath}
      slug={slug}
      ratingValue={ratingValue}
      ratingCount={ratingCount}
    />
  );
};

ProductSchema.propTypes = {
  description: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  ratingCount: PropTypes.number.isRequired,
  ratingValue: PropTypes.number.isRequired,
};
export default ProductSchema;
