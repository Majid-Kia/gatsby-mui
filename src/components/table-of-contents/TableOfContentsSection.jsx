import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import React from 'react';
import PropTypes from 'prop-types';
import TableOfContentHeadings from './TableOfContentHeadings';

const TableOfContentsSection = ({ toc, mt }) => {
  return (
    <Grid
      container
      mt={mt}
      px={2}
      py={2.5}
      borderRadius={2}
      sx={(theme) => ({
        border: 1,
        flexDirection: 'column',
        flexWrap: 'noWrap',
        borderColor: (theme) => theme.palette.grey['200'],
        [theme.breakpoints.up('lg')]: {
          overflowY: 'auto',
          height: `calc(100vh - 260px)`,
        },
      })}
    >
      <Grid item xs={12} sx={{ flexBasis: 'initial !important' }}>
        <Typography variant="subtitle1" color="textPrimary" mb={2}>
          Table Of Contents
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ flexGrow: 1 }}>
        <TableOfContentHeadings toc={toc} />
      </Grid>
    </Grid>
  );
};

TableOfContentsSection.prototype = {
  toc: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      depth: PropTypes.number.isRequired,
      mt: PropTypes.object,
    }),
  ),
};

export default TableOfContentsSection;
