import Grid from '@mui/material/Grid';
import React from 'react';
import PropTypes from 'prop-types';
import LocationsHeroDescription from './LocationsHeroDescription';
import FullWidthContainer from '../../../components/container/FullWidthContainer';
import BackgroundXl from '../../../images/landing-hero-section/Landing-hero-XL.jpg';
import BackgroundMd from '../../../images/landing-hero-section/Landing-hero-MD.jpg';
import BackgroundLg from '../../../images/landing-hero-section/Landing-hero-LG.jpg';
import BackgroundXs from '../../../images/landing-hero-section/Landing-hero-XS.jpg';
import game_vps_hero from '../../../images/landing-hero-section/game-vps-hero.webp';
import PerformanceFeaturesPart from './performance-features-part/PerformanceFeaturesPart';
import globalVariableRepository from '../../../repository/global-variable.repository';

const LandingsHeroSection = ({ landingName, title, description, testFlag }) => {
  let backgroundImage = testFlag ? {
    xs: game_vps_hero,
    sm: game_vps_hero,
    md: game_vps_hero,
    lg: game_vps_hero,
    xl: game_vps_hero,
  } : {
    xs: BackgroundXs,
    sm: BackgroundMd,
    md: BackgroundLg,
    lg: BackgroundXl,
    xl: BackgroundXl,
  };

  return (
    <FullWidthContainer
      backgroundImage={backgroundImage}
      backgroundPositionX={'center'}
      backgroundSize={{ xs: 'cover' }}
      backgroundHeight={{ lg: '100%', md: '100%', sm: '100%', xs: '100%' }}
      mb={{ xs: 34, sm: 20, md: 18, lg: 12 }}
    >
      <Grid
        container
        justifyContent="center"
        height={{ xs: 596, sm: 633, md: 520, lg: 570, xl: 720 }}
      >
        <Grid 
          item 
          xs={12}
          alignSelf="flex-end" 
          py={4}
        >
          <LocationsHeroDescription
            locationName={landingName}
            title={title}
            description={description}
            action={{
              text: `starting from ${globalVariableRepository.STARTING_PRICE}`,
              sectionId: 'pricing', // TODO should it be dynamic?
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          alignSelf="flex-end"
          mb={{ xs: -28, sm: -15, md: -12.5, lg: -7 }}
        >
          <PerformanceFeaturesPart />
        </Grid>
      </Grid>
    </FullWidthContainer>
  );
};

LandingsHeroSection.propTypes = {
  landingName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  testFlag: PropTypes.bool
};

export default LandingsHeroSection;
