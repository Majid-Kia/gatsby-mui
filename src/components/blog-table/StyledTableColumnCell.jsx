import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';

const StyledTableColumnCell = styled(TableCell)(({ theme }) => ({
  padding: 16,
  color: theme.palette.text.primary,
  ':not(:first-child)': {
    textAlign: 'left',
  },
}));

export default StyledTableColumnCell;
