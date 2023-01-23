import React from 'react';
import FullWidthContainer from 'components/container/FullWidthContainer';
import backgroundLg from '../../../images/review-hero/hero_lg.png';
import backgroundMd from '../../../images/review-hero/hero_md.png';
import backgroundSm from '../../../images/review-hero/hero_sm.png';
import backgroundXs from '../../../images/review-hero/hero_xs.png';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export const ReviewHero = () => {
  return (
    <FullWidthContainer
      backgroundPositionX="center"
      backgroundImage={{
        xl: backgroundLg,
        lg: backgroundLg,
        md: backgroundMd,
        sm: backgroundSm,
        xs: backgroundXs,
      }}
      backgroundSize={{
        xl: '100%',
        lg: '100%',
        md: '100%',
        xs: '100%',
        sm: '100%',
      }}
    >
      <Grid
        container
        justifyContent="center"
        pt={{ sm: 10, xs: 7.5 }}
        pb={{ sm: 10, xs: 7.5 }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              color: (theme) => theme.palette.white.default,
              textAlign: 'center',
            }}
            variant="h1"
            component="h1"
          >
            Customer Reviews
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.white.default,
              textAlign: 'center',
            }}
            mt={{ lg: 4, sm: 3.5, xs: 2 }}
            variant="h6"
            component="h4"
          >
            What some of our customers had to say about us.
          </Typography>
        </Grid>
      </Grid>
    </FullWidthContainer>
  );
};
