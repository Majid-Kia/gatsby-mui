import React from 'react';
import Grid from '@mui/material/Grid';
import FooterCustomCollapse from '../footer-collapse/FooterCustomCollapse';
import PropTypes from 'prop-types';

const FooterLinksCollapseMode = ({ link }) => {
  return (
    <Grid container>
      <Grid item mb={1}>
        <FooterCustomCollapse title={link.title} links={link.items} />
      </Grid>
    </Grid>
  );
};

FooterLinksCollapseMode.prototype = {
  link: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    isCollapse: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }))
  }))
}

export default FooterLinksCollapseMode;