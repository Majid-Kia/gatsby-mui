import React from 'react';
import Grid from '@mui/material/Grid';
import SubFooterLinks from './sub-footer-links-part/SubFooterLinks';

const SubFooterSection = () => {
  return (
    <Grid
      container
      direction={{ lg: 'row', md: 'column', sm: 'column', xs: 'column' }}
      justifyContent="center"
      alignItems="center"
      marginTop={0}
      paddingY={{ lg: 2.5, md: 3, sm: 3, xs: 3 }}
    >
      <Grid
        item
        order={{ lg: 2, md: 1, sm: 1, xs: 1 }}
        marginBottom={{ lg: 0, md: 1, sm: 0, xs: 0 }}
      >
        <SubFooterLinks />
      </Grid>
    </Grid>
  );
};

export default SubFooterSection;
