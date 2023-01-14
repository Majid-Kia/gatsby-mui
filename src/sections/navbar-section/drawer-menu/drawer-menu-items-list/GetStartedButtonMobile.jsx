import React from 'react';
import Grid from '@mui/material/Grid';
import CustomButton from '../../../../components/button/CustomButton';
import { getStarted } from '../../data/menu.data';
import PropTypes from 'prop-types';

const GetStartedButtonMobile = ({ handler }) => {
  return (
    <Grid container>
      <Grid item sm={6} xs={12}>
        <CustomButton
          color="primary"
          contentText={'GET STARTED'}
          navigationObject={getStarted}
          variant={'contained'}
          fullWidth={true}
          textSize={'buttonMedium'}
          disableElevation
          onClick={handler}
        />
      </Grid>
    </Grid>
  );
};

GetStartedButtonMobile.propTypes = {
  handler: PropTypes.func,
};

export default GetStartedButtonMobile;
