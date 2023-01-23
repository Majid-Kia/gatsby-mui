import React from 'react';
import CustomButton from '../../../components/button/CustomButton';
import { getStarted } from '../data/menu.data';
import CustomLink from '../../../components/link/CustomLink';

const GetStartedButton = () => {
  return (
    <CustomLink
      navigationObject={getStarted}
      className='getStarted'
      targetNotBlank='true'
    >
      <CustomButton
        variant="contained"
        color="primary"
        contentText="GET STARTED"
        textSize={'buttonSmall'}
        disableElevation
        sx={{
          ml: 1.5,
          paddingX: 2,
          paddingY: `${0.75 * 8 + 1}px`,
        }}
      />
    </CustomLink>
  );
};

export default GetStartedButton;
