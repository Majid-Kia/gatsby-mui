import React from 'react';
import CustomButton from '../../../components/button/CustomButton';
import { getStarted } from '../data/menu.data';

const GetStartedButton = () => {
  return (
    <CustomButton
      variant="contained"
      color="primary"
      contentText="GET STARTED"
      navigationObject={getStarted}
      textSize={'buttonSmall'}
      disableElevation
      sx={{
        ml: 1.5,
        paddingX: 2,
        paddingY: `${0.75 * 8 + 1}px`,
      }}
    />
  );
};

export default GetStartedButton;
