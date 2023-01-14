import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import FooterCollapseTitle from './FooterCollapseTitle';
import FooterCollapseBody from './FooterCollapseBody';

const FooterCustomCollapse = ({ title, links }) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Grid container flexDirection="column">
      <Grid item>
        <FooterCollapseTitle
          title={title}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      </Grid>
      {links.map((subLink) => {
        return (
          <Grid item pl={1} key={subLink.title}>
            <FooterCollapseBody navigationObject={subLink} expanded={expanded} />
          </Grid>
        );
      })}
    </Grid>
  );
};

FooterCustomCollapse.prototype = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ),
};

export default FooterCustomCollapse;
