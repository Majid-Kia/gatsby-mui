import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import CustomCollapseBody from '../../../../components/collapse/CustomCollapseBody';
import CustomLink from '../../../../components/link/CustomLink';
import Typography from '@mui/material/Typography';

const FooterCollapseBody = ({ navigationObject, expanded }) => {
  return (
    <CustomCollapseBody expanded={expanded}>
      <Grid container>
        <Grid item lg={12} pt={1}>
          <CustomLink className="footerLink" navigationObject={navigationObject} style={{ textDecoration: 'none' }}>
            <Typography variant='body2' sx={(theme) => ({
              color: theme.palette.grey['A400']
            })}>
              {navigationObject.title}
            </Typography>
          </CustomLink>
        </Grid>
      </Grid>
    </CustomCollapseBody>
  );
};

FooterCollapseBody.propTypes = {
  expanded: PropTypes.bool.isRequired,
  navigationObject: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

export default FooterCollapseBody;
