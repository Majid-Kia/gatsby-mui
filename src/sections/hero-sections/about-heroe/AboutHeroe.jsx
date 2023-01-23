import React from 'react';
import Grid from '@mui/material/Grid';
import background from '../../../images/about-heroe/about-heroe-mask.png';
import { AboutHeroeImg } from './about-heroe-img/AboutHeroeImg';
import { PerformanceFeature } from 'components/performance-features/PerformanceFeatures';
import { AboutHeroeDescription } from './about-heroe-description/AboutHeroeDescription';
import FullWidthContainer from 'components/container/FullWidthContainer';
import PropTypes from "prop-types";

const AboutHero = ({ mt }) => {
  return (
    <FullWidthContainer
        pt={mt}
      backgroundPositionX="left"
      backgroundImage={{
        xl: background,
        lg: background,
        md: background,
      }}
      backgroundSize={{
        lg: 'auto 120%',
        md: 'auto 120%',
      }}
    >
      <Grid
        container
        justifyContent="center"
        spacing={{ lg: 4, md: 0, xs: 5, sm: 4 }}
        pt={{ lg: 11, md: 13, xs: 8 }}
        pb={{ lg: 25, md: 12, xs: 0 }}
        mb={{lg: -27,md: -17, sm: -6, xs: 0}}
      >
        <Grid
          item
          lg={5}
          md={5}
          sm={12}
          xs={12}
          sx={{
            display: { xs: 'flex' },
            alignItems: { md: 'flex-start', xs: 'center' },
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <AboutHeroeDescription />
        </Grid>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Grid container height={1} spacing={{ xs: 1 }}>
            <Grid item xs={12} justifyContent="center" sx={{ display: 'flex' }}>
              <AboutHeroeImg />
            </Grid>
            <Grid item xs={12} mb={{ lg: -12, sm: -10, xs: 0 }}>
              <PerformanceFeature />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FullWidthContainer>
  );
};

AboutHero.prototype = {
    mt: PropTypes.object.isRequired
}

export default AboutHero;