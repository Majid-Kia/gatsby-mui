import React from 'react';
import Grid from '@mui/material/Grid';
import PolymorphicOnResizeContainer from '../../../components/container/PolymorphicOnResizeContainer';
import FooterLargeMode from './footer-links-large-mode/FooterLargeMode';
import FooterSmallMode from './FooterSmallMode';

const FooterLinks = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <PolymorphicOnResizeContainer
          largeModeComponent={<FooterLargeMode />}
          smallModeComponent={<FooterSmallMode />}
        />
      </Grid>
    </Grid>
  );
};

export default FooterLinks;
