import React from 'react';
import Grid from '@mui/material/Grid';
import FooterLargeMode from './footer-links-large-mode/FooterLargeMode';
import { useStaticQuery, graphql } from 'gatsby';
import FooterSmallMode from './FooterSmallMode';

const FooterLinks = () => {
  const data = useStaticQuery(graphql`
    query FooterLinks {
       allMobileFooterLinksJson {
    edges {
      node {
        FooterLinkTitle
        FooterLinkItems {
          link
          title
        }
      }
    }
  }
    }
  `);

  const {
    allMobileFooterLinksJson: { edges: FooterLinksData },
  } = data;
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <FooterSmallMode FooterLinksSmallModeData={FooterLinksData} />
      </Grid>
    </Grid>
  );
};

export default FooterLinks;
