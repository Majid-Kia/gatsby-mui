import React from 'react';
import Grid from '@mui/material/Grid';
import NotFoundHeroImagePart from './nof-found-hero-image-part/NotFoundHeroImage';
import NotFoundHeroDescription from './not-found-hero-description/NotFoundHeroDescription';

const NotFoundHero = () => {
  return (
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row-reverse"
        pt={{ xl: 10 }}
        mb={{xs: 10, sm: 12.5, md: 25, lg: 22.5, xl: 32.25 }}
      >
        <Grid item justifyContent='center' xs={12} md={6} pt={{ xs: 6, sm: 7, md: 18.75, lg: 12.5 }}>
          <NotFoundHeroImagePart />
        </Grid>
        <Grid item xs={12} md={6} pt={{ xs: 6, sm: 7, md: 18.75, lg: 12.5 }}>
          <NotFoundHeroDescription />
        </Grid>
      </Grid>
  );
};

export default NotFoundHero;
