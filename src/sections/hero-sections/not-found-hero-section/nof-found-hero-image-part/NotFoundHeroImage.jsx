import Grid from '@mui/material/Grid';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const NotFoundHeroImage = () => {
  return (
    <StaticImage
      src="../../../../images/not-found-page/not-found-hero.png"
      loading="eager"
      alt="Error 404: What you were looking for was not found"
    />
  );
};

const NotFoundHeroImagePart = () => {
  return (
    <Grid item container justifyContent='center' xs={12}>
      <NotFoundHeroImage />
    </Grid>
  );
};

export default NotFoundHeroImagePart;
