import React from 'react';
import Grid from '@mui/material/Grid';
import FooterSmallMode from './FooterSmallMode';

const FooterLinks = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <FooterSmallMode />
      </Grid>
    </Grid>
  );
};

export default FooterLinks;
