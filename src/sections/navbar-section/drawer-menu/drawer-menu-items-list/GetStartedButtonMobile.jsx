import React from 'react';
import Grid from '@mui/material/Grid';
import CustomButton from '../../../../components/button/CustomButton';
import { getStarted } from '../../data/menu.data';
import PropTypes from 'prop-types';
import CustomLink from '../../../../components/link/CustomLink';

const GetStartedButtonMobile = ({ handler }) => {
  return (
    <Grid container>
      <Grid item sm={6} xs={12}>
        <CustomLink
          navigationObject={getStarted}
          className='getStarted'
          targetNotBlank='true'
        >
          <CustomButton
            color="primary"
            contentText={'GET STARTED'}
            variant={'contained'}
            fullWidth={true}
            textSize={'buttonMedium'}
            disableElevation
            onClick={handler}
          />
        </CustomLink>
      </Grid>
    </Grid>
  );
};

GetStartedButtonMobile.propTypes = {
  handler: PropTypes.func,
};

export default GetStartedButtonMobile;
