import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CustomButton from '../../../components/button/CustomButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import DangerouslySetTypography from '../../../components/typography/DangerouslySetTypography';

const LocationsHeroDescription = ({
  locationName,
  title,
  description,
  action,
}) => {
  const theme = useTheme();
  return (
    <Grid container justifyContent="space-between" sx={{ textAlign: 'center' }}>
      <Grid item xs={12}>
        <DangerouslySetTypography
          component="h1"
          variant="h6"
          lineHeight="1.5em"
          sx={{ color: (theme) => theme.palette.grey['A200'] }}
        >
          {locationName}
        </DangerouslySetTypography>
      </Grid>
      <Grid item xs={12} mt={0.5}>
        <DangerouslySetTypography
          component="h2"
          variant="h1"
          lineHeight="1.5em"
          color={theme.palette.background.default}
        >
          {title}
        </DangerouslySetTypography>
      </Grid>
      <Grid item xs={12} mt={{ lg: 4, md: 4, sm: 3, xs: 2 }}>
        <DangerouslySetTypography
          content={description}
          variant="h6"
          color={theme.palette.grey['A200']}
        >
          {description}
        </DangerouslySetTypography>
      </Grid>
      <Grid item xs={12} mt={{ lg: 5, md: 4, sm: 3, xs: 2 }}>
        <CustomButton
          id="landingHeroStartingButton"
          contentText={action.text}
          navigationObject={action}
          endIcon={<ArrowDownwardIcon />}
          color="secondary"
          variant="contained"
          sx={{ boxShadow: 'none' }}
        />
      </Grid>
    </Grid>
  );
};

LocationsHeroDescription.prototype = {
  locationName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.objectOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      sectionId: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default LocationsHeroDescription;
