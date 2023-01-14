import React from 'react';
import CustomLink from '../../../components/link/CustomLink';
import CustomButton from '../../../components/button/CustomButton';
import { signInContent } from '../data/menu.data';

const SignInButton = () => {
  return (
    <CustomLink
      className="signInAction"
      navigationObject={signInContent.SIGN_IN_PAGE}
      targetNotBlank={true}
    >
      <CustomButton
        variant="outlined"
        color="primary"
        contentText="SIGN IN"
        textSize="buttonSmall"
        sx={{
          boxShadows: (theme) => theme.shadows['0'],
          paddingX: 2,
          paddingY: 0.75,
        }}
      />
    </CustomLink>
  );
};

export default SignInButton;
