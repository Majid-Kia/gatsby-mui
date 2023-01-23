import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import StaffRepository from '../../../repository/staff.repository';

const ArticleSchema = ({ title, imagePath, date, writerId }) => {
  const name = StaffRepository.getStaffName(writerId);
  const articleJson = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: title,
    image: imagePath,
    datePublished: date,
    dateModified: date,
    author: [
      {
        '@type': 'Person',
        name,
        url: `${process.env.GATSBY_SITE_URL}/author/${writerId}`,
      },
    ],
  };
  return (
    <Helmet>
      <script type={'application/ld+json'}>
        {JSON.stringify(articleJson)}
      </script>
    </Helmet>
  );
};

ArticleSchema.prototype = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  writerId: PropTypes.string.isRequired,
};

export default ArticleSchema;
