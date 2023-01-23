import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import templatesConfig from 'src/config/templates.config.js';
import LocalBusinessSchema from './schema-part/LocalBusinessSchema';
import ProductSchema from './schema-part/ProductSchema';
import ArticleSchema from './schema-part/ArticleSchema';
import { ratingCount, ratingValue } from '../../repository/reviews.repository';
import stringUtil from '../../util/string.util';
import routeUtil from '../../util/route.util';
import titleAndDescriptionMapper from './data/titleAndDescriptionMapper.data';

const SeoOfHeadingAttributes = ({
  description,
  lang,
  title,
  canonical,
  slug,
  image,
}) => {
  const url = routeUtil.normalizeWithPostfix(
    `${process.env.GATSBY_SITE_URL}/${slug}`,
    '/',
  );
  const openGraphTags = [
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:url',
      content: url,
    },
    {
      property: 'og:image:alt',
      content: image.alt,
    },
    {
      property: 'og:image',
      content: routeUtil.normalizeWithPostfix(image.path, '/'),
    },
    {
      property: 'og:image:width',
      content: image.width,
    },
    {
      property: 'og:image:height',
      content: image.height,
    },
    {
      property: 'og:image:type',
      content: image.type,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
        prefix: 'og:https://ogp.me/ns#',
      }}
      title={title}
      titleTemplate={title}
      link={[
        {
          rel: 'canonical',
          href: routeUtil.normalizeWithPostfix(
            `${process.env.GATSBY_SITE_URL}/${canonical || slug}`,
            '/',
          ),
        },
      ]}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'yandex-verification',
          content: 'd5ac442301bf8945',
        },
        ...openGraphTags,
      ]}
    />
  );
};

SeoOfHeadingAttributes.defaultProps = {
  lang: 'en',
  image: {},
};

SeoOfHeadingAttributes.propTypes = {
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    path: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  lang: PropTypes.string,
  canonical: PropTypes.string,
};

function generateSeoTitleAndDescription(slug, title, description, isArticle) {
  if (isArticle) {
    return {
      seoTitle: title ? title : titleAndDescriptionMapper[slug]?.seoTitle,
      seoDescription: description
        ? description
        : titleAndDescriptionMapper[slug]?.metaDescription,
    };
  }
  return {
    seoTitle: title,
    seoDescription: description,
  };
}

const Seo = (props) => {
  const {
    description,
    lang,
    title,
    canonical,
    slug,
    image,
    date,
    writerId,
    frontMatterTitle,
    templateType,
  } = props;
  const fillableProps = {
    title,
    description,
  };
  stringUtil.fillGlobalVariablesOnStringAttributesOfObject(fillableProps);
  const isLanding =
    templateType === templatesConfig.LANDING ||
    templateType === templatesConfig.LOCATION ||
    templateType === templatesConfig.CLOUD;
  const isArticle =
    templateType === templatesConfig.KNOWLEDGE_BASE ||
    templateType === templatesConfig.BLOG;

  const { seoTitle, seoDescription } = generateSeoTitleAndDescription(
    slug,
    fillableProps.title,
    fillableProps.description,
    isArticle,
  );

  return (
    <React.Fragment key={slug}>
      <SeoOfHeadingAttributes
        slug={slug}
        title={seoTitle}
        description={seoDescription}
        image={image}
        canonical={canonical}
        lang={lang}
      />
      {isArticle && (
        <ArticleSchema
          title={frontMatterTitle}
          imagePath={image.path}
          date={date}
          writerId={writerId}
        />
      )}
      {isLanding && (
        <ProductSchema
          imagePath={image.path}
          ratingCount={ratingCount}
          ratingValue={ratingValue}
          description={seoDescription}
          slug={slug}
        />
      )}

      <LocalBusinessSchema
        isLanding={isLanding}
        ratingCount={ratingCount}
        ratingValue={ratingValue}
        slug={slug}
      />
    </React.Fragment>
  );
};

Seo.propTypes = {
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    path: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  lang: PropTypes.string,
  date: PropTypes.string,
  canonical: PropTypes.string,
  writerId: PropTypes.string,
  frontMatterTitle: PropTypes.string,
};

export default Seo;
