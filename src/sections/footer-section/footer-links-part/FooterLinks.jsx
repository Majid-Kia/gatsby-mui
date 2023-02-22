import React from 'react';
import Grid from '@mui/material/Grid';
import FooterLargeMode from './footer-links-large-mode/FooterLargeMode';
import { useStaticQuery, graphql } from 'gatsby';

const FooterLinks = () => {
  const data = useStaticQuery(graphql`
    query FooterLinks {
      allFooterLinksJson {
    edges {
      node {
        FooterLinkTitle
        FooterLinkItems {
          isCollapse
          items {
            link
            title
          }
          link
          title
        }
      }
    }
  }
    }
  `);

  const {
    allFooterLinksJson: { edges: FooterLinksData },
  } = data;
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <FooterLargeMode FooterLinksData={FooterLinksData} />
      </Grid>
    </Grid>
  );
};

export default FooterLinks;
