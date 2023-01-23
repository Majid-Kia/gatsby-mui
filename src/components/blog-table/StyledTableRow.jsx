import React from 'react';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd) td': {
    backgroundColor: theme.palette.grey['50'],
  },
  '&:nth-of-type(even) td': {
    backgroundColor: theme.palette.white.default,
  },
}));

export default StyledTableRow;
