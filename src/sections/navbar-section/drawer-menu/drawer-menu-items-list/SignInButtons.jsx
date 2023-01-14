import Grid from '@mui/material/Grid';
import CustomButton from '../../../../components/button/CustomButton';
import React from 'react';
import { signInContent } from '../../data/menu.data';

const SignInButtons = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={6} xs={12}>
        <CustomButton
          variant={'outlined'}
          color="primary"
          contentText={signInContent.VPS_LOGIN.text}
          navigationObject={signInContent.VPS_LOGIN}
          fullWidth={true}
          textSize={'buttonMedium'}
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <CustomButton
          variant="outlined"
          color="primary"
          navigationObject={signInContent.CLOUD_LOGIN}
          contentText={signInContent.CLOUD_LOGIN.text}
          fullWidth={true}
          textSize={'buttonMedium'}
        />
      </Grid>
    </Grid>
  );
};

export default SignInButtons;
