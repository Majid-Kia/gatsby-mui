import Grid from '@mui/material/Grid';
import React from 'react';
import PropTypes from 'prop-types';
import CloudHeroDescriptionAndFeatures from './CloudHeroDescriptionAndFeatures';
import CloudHeroData from './data/CloudHero.data';
import FullWidthContainer from '../../../components/container/FullWidthContainer';
import backgroundLg from '../../../images/cloud-hero-section/Cloud-hero-LG.webp';
import backgroundXl from '../../../images/cloud-hero-section/Cloud-hero-XL-min.webp';
import backgroundMd from '../../../images/cloud-hero-section/Cloud-hero-MD-min.webp';
import backgroundXs from '../../../images/cloud-hero-section/Cloud-hero-XS-min.webp';
import PanelImage from './PanelImage';
import LearnMoreButton from '../../../components/button/LearnMoreButton';

const CloudHeroSection = ({ mt }) => {
  return (
    <FullWidthContainer
      backgroundImage={{
        lg: backgroundLg,
        xl: backgroundXl,
        md: backgroundMd,
        sm: backgroundMd,
        xs: backgroundXs,
      }}
      backgroundPositionX="center"
      backgroundSize={{
        lg: 'cover',
        xl: 'cover',
        xs: 'cover',
        sm: 'cover',
        md: 'cover',
      }}
    >
      <Grid container pt={mt} justifyContent="flex-start" alignItems="center">
        <Grid item lg={6} xs={12}>
          <CloudHeroDescriptionAndFeatures
            title={CloudHeroData.title}
            subTitle={CloudHeroData.subTitle}
            description={CloudHeroData.description}
            features={CloudHeroData.features}
          />
        </Grid>
        <Grid
          item
          xs={12}
          display={{ xs: 'flex', lg: 'none' }}
          mt={{ md: 4.5, sm: 5, xs: 4, lg: 0 }}
        >
          <PanelImage />
        </Grid>
        <Grid
          item
          mt={{ xs: 0, lg: 10, xl: 25 }}
          xs={12}
          display={{ xs: 'none', lg: 'flex' }}
          justifyContent="center"
          alignItems="center"
        >
          <LearnMoreButton action={CloudHeroData.action} />
        </Grid>
      </Grid>
    </FullWidthContainer>
  );
};

CloudHeroSection.propTypes = {
  mt: PropTypes.object.isRequired,
};

export default CloudHeroSection;
