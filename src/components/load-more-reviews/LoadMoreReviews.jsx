import React from 'react';
import Grid from '@mui/material/Grid';
import CustomButton from '../button/CustomButton';
import Proptypes from 'prop-types';

const LoadMoreReviews = ({ text, clickHandler, disabled }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <CustomButton
          contentText={text}
          onClick={clickHandler}
          variant="contained"
          textColor={(theme) => theme.palette.primary.main}
          color="info"
          disabled={disabled}
        />
      </Grid>
    </Grid>
  );
};

LoadMoreReviews.prototype = {
  text: Proptypes.string.isRequired,
  clickHandler: Proptypes.func.isRequired,
  disabled: Proptypes.bool
};

export default LoadMoreReviews;
