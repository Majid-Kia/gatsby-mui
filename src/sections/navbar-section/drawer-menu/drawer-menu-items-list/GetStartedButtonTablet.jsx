import React from 'react';
import CustomButton from '../../../../components/button/CustomButton';
import { getStarted } from '../../data/menu.data';
import PropTypes from 'prop-types';

const GetStartedButtonTablet = ({ handler }) => {
  return (
    <CustomButton
      onClick={handler}
      variant="contained"
      color="primary"
      contentText="GET STARTED"
      navigationObject={getStarted}
      size="small"
      textSize={'buttonSmall'}
      sx={{
        marginRight: 1.5,
        paddingX: 2.5,
        paddingY: 0.5,
      }}
    />
  );
};

GetStartedButtonTablet.propTypes = {
  handler: PropTypes.func,
};

export default GetStartedButtonTablet;
