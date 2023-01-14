import React from 'react';
import Grid from '@mui/material/Grid';
import FooterLinksData from '../../data/FooterLinks.data';
import FooterLinksTitle from './FooterLinksTitle';
import FooterColumnValue from './FooterColumnValue';
import PropTypes from 'prop-types';

const FooterColumn = ({ column }) => {
  return (
    <React.Fragment>
      <FooterLinksTitle title={column.title} />
      <Grid container flexDirection="column">
        {column.items.map((columnValue) => {
          return (
            <Grid item key={columnValue.title}>
              <FooterColumnValue columnValue={columnValue} />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

FooterColumn.propTypes = {
  column: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        isCollapse: PropTypes.bool,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
          }),
        ),
        link: PropTypes.string,
      }),
    ).isRequired,
  }),
};

const FooterLargeMode = () => {
  return (
    <Grid container spacing={4} justifyContent="space-between">
      {FooterLinksData.map((column) => {
        return (
          <Grid item key={column.title}>
            <FooterColumn column={column} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FooterLargeMode;
