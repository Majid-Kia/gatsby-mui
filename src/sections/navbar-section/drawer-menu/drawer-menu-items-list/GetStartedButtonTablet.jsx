import React from 'react';
import CustomButton from '../../../../components/button/CustomButton';
import { getStarted } from '../../data/menu.data';
import PropTypes from 'prop-types';
import CustomLink from '../../../../components/link/CustomLink';

const GetStartedButtonTablet = ({ handler }) => {
  return (
    <CustomLink
      navigationObject={getStarted}
      className='getStarted'
      targetNotBlank='true'
    >
      <CustomButton
        onClick={handler}
        variant="contained"
        color="primary"
        contentText="GET STARTED"
        size="small"
        textSize={'buttonSmall'}
        sx={{
          marginRight: 1.5,
          paddingX: 2.5,
          paddingY: 0.5,
        }}
      />
    </CustomLink>
  );
};

GetStartedButtonTablet.propTypes = {
  handler: PropTypes.func,
};

export default GetStartedButtonTablet;
