import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import stringUtil from 'util/string.util';
import PropTypes from 'prop-types';
import FullWidthContainer from 'components/container/FullWidthContainer';
import background from 'images/category-hero-section/category-hero.png';
import backgroundSm from 'images/category-hero-section/category-hero-sm.png';

const CategoryHeroSection = ({ title }) => {
  return (
    <FullWidthContainer
      backgroundImage={{
        xl: background,
        lg: background,
        md: background,
        sm: backgroundSm,
        xs: backgroundSm,
      }}
      backgroundSize={{
        lg: 'cover',
        xl: 'cover',
        xs: 'cover',
        sm: 'cover',
        md: 'cover',
      }}
    >
      <Grid container pt={{ md: 14.5, xs: 5.75 }} pb={{ md: 22, xs: 24.2 }}>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            align="center"
            sx={{ color: (theme) => theme.palette.text.primary }}
          >
            {stringUtil.capitalizeFirstLetter(title)}
          </Typography>
        </Grid>
      </Grid>
    </FullWidthContainer>
  );
};

CategoryHeroSection.prototype = {
  title: PropTypes.string.isRequired,
};

export default CategoryHeroSection;
