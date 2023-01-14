import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import CustomLink from '../../../../components/link/CustomLink';
import Typography from '@mui/material/Typography';
const FooterRegularLinkMode = ({ navigationObject }) => {
  return (
    <Grid container>
      <Grid item mb={1}>
        <CustomLink className="footerLink" navigationObject={navigationObject} style={{ textDecoration: 'none' }}>
          <Typography variant='body2' sx={(theme) => ({
            color: theme.palette.grey['A400']
          })}>
            {navigationObject.title}
          </Typography>
        </CustomLink>
      </Grid>
    </Grid>
  );
};

FooterRegularLinkMode.prototype = {
  navigationObject: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }))
}

export default FooterRegularLinkMode;
