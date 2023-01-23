import Grid from '@mui/material/Grid';
import React from 'react';
import ProgressBar from 'react-scroll-progress-bar'; //Add t

const CustomProgressBar = () => {
  return (
    <Grid container>
      <Grid
        item
        sx={{
          div: {
            zIndex: '1111!important',
            top: '5rem!important',
            height: '3px!important',
          },
        }}
      >
        <ProgressBar bgcolor="#2D31A6" />
      </Grid>
    </Grid>
  );
};

export default CustomProgressBar;
