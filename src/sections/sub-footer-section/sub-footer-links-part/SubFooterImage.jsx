import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const SubFooterImage = ({ imagePath, alt }) => {
  const subFooterData = useStaticQuery(graphql`
    query GetSubFooterImage {
      allFile(filter: { relativePath: { regex: "/payment-icon/" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);
  const image = subFooterData?.allFile?.nodes?.find(
    (item) => item.relativePath === imagePath,
  );
  return (
    <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} alt={alt} />
  )
};

export default SubFooterImage;
