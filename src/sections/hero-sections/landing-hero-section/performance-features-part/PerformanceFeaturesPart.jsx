import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import PerformanceFeaturesData from '../data/performanceFeatures.data';
import React from 'react';
import PerformanceFeature from './PerformanceFeature';

const PerformanceFeaturesPart = () => {
  return (
    <Card
      sx={{
        paddingY: 4,
        paddingX: { lg: 7, md: 5, sm: 5, xs: 1 },
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 2,
      }}
    >
      <Grid
        container
        flexDirection={{ sm: 'row', xs: 'column' }}
        justifyContent={{
          lg: 'center',
          md: 'center',
          sm: 'flex-start',
          xs: 'center',
        }}
        alignItems="center"
        rowSpacing={{ lg: 4, md: 4, sm: 3, xs: 3 }}
        columnSpacing={{ lg: 4, md: 0 }}
      >
        {PerformanceFeaturesData.map((item) => {
          return (
            <Grid item lg={'auto'} md={4} sm={6} xs={'auto'} key={item.title}>
              <PerformanceFeature
                iconPath={item.iconPath}
                description={item.description}
                title={item.title}
              />
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
};

export default PerformanceFeaturesPart;
