import React from 'react';
import FooterLinksCollapseMode from './FooterLinksCollapseMode';
import FooterRegularLinkMode from './FooterRegularLinkMode';
import PropTypes from 'prop-types';

const FooterColumnValue = ({ columnValue }) => {
  if (columnValue.isCollapse === true) {
    return (
      <FooterLinksCollapseMode link={columnValue} />
    );
  } else {
    return (
      <FooterRegularLinkMode navigationObject={columnValue} />
    );
  }
};

FooterColumnValue.propTypes = {
  columnLink: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isCollapse: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })),
  }))
}

export default FooterColumnValue;
