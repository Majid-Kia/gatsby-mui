import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import PropTypes from 'prop-types';

const FooterLinksTitle = ({ title }) => {
  return (
    <Grid container>
      <Grid item>
        <Typography
          variant="h6"
          sx={(theme) => ({
            color: theme.palette.white.default,
            mb: 1.5,
          })}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

FooterLinksTitle.prototype = {
  title: PropTypes.string.isRequired,
};

export default FooterLinksTitle;
