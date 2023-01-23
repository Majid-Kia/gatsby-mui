import PropTypes from 'prop-types';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CustomImage from '../../../../components/media/CustomImage';
import PerformanceFeatureDescription from './PerformanceFeatureDescription';

const PerformanceFeature = ({ iconPath, title, description }) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent={{ md: 'center', xs: 'flex-start' }}
      spacing={2}
      sx={(theme) => ({
        [theme.breakpoints.down('sm')]: {
          width: 230,
        },
      })}
    >
      <Grid
        item
        sx={{
          'div svg': {
            display: 'flex',
            alignItems: 'center',
          },
        }}
      >
        <CustomImage relativePath={iconPath} />
      </Grid>
      <Grid item>
        <PerformanceFeatureDescription
          title={title}
          description={description}
        />
      </Grid>
    </Grid>
  );
};

PerformanceFeature.prototype = {
  iconPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PerformanceFeature;
