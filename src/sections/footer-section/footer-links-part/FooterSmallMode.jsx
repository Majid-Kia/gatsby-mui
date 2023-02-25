import React from 'react';
import Grid from '@mui/material/Grid';
import FooterAccordion from './footer-accordion/FooterAccordion';
import FooterLinksSmallModeDataa from "../data/FooterLinksMobileMode.data";

const FooterSmallMode = ({ FooterLinksSmallModeData }) => {
  console.log(5555, FooterLinksSmallModeData)
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12} >
        <FooterAccordion links={FooterLinksSmallModeData} />
      </Grid>
    </Grid>
  );
};


export default FooterSmallMode;