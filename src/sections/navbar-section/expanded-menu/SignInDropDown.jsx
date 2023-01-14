import React from 'react';
import Typography from '@mui/material/Typography';
import CustomDropDown from '../../../components/drop-down/CustomDropDown';
import CustomButton from '../../../components/button/CustomButton';
import Grid from '@mui/material/Grid';
import CustomHorizontalDivider from '../../../components/divider/CustomHorizontalDivider';
import SignInDescription from '../SignInDescription';
import { signInContent } from '../data/menu.data';

const SignInDetailsContent = () => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      paddingY={1.5}
      paddingX={2}
      maxWidth={298}
    >
      <Grid item md={12}>
        <Typography variant="h6" color="textPrimary">
          Legacy Panel Login
        </Typography>
      </Grid>
      <Grid item md={12}>
        <CustomButton
          id="signInButtonVPS"
          color="primary"
          contentText={signInContent.VPS_LOGIN.text}
          variant={'contained'}
          fullWidth={true}
          navigationObject={signInContent.VPS_LOGIN}
          textSize={'buttonMedium'}
          sx={{ boxShadow: 0 }}
        />
      </Grid>
      <Grid item md={12}>
        <CustomHorizontalDivider />
      </Grid>
      <Grid item md={12}>
        <Typography variant="h6" color="textPrimary">
          Cloud VPS Panel Login
        </Typography>
      </Grid>
      <Grid item md={12}>
        <CustomButton
          id="signInButtonCloud"
          variant="outlined"
          color="primary"
          contentText={signInContent.CLOUD_LOGIN.text}
          navigationObject={signInContent.CLOUD_LOGIN}
          fullWidth={true}
          textSize={'buttonMedium'}
          sx={{ boxShadow: 0 }}
        />
      </Grid>
      <Grid item md={12}>
        <SignInDescription />
      </Grid>
    </Grid>
  );
};

const SignInDropDown = () => {
  return (
    <CustomDropDown
      buttonChild={
        <CustomButton
          variant={'outlined'}
          color={'primary'}
          contentText={'SIGN IN'}
          textSize={'buttonSmall'}
          sx={{
            boxShadows: (theme) => theme.shadows['0'],
            paddingX: 2,
            paddingY: 0.75,
          }}
        ></CustomButton>
      }
      menuChildren={[<SignInDetailsContent />]}
      menuSx={{ mt: 3.5, cursor: 'default' }}
      menuItemProps={{
        disableRipple: true,
        sx: {
          '&:hover': {
            backgroundColor: (theme) => theme.palette.background.default,
            cursor: 'default',
          },
        },
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      notCloseOnClickOnMenuItem={true}
    />
  );
};

export default SignInDropDown;
