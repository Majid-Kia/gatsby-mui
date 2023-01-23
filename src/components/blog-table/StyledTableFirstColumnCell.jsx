import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';

const StyledTableFirstColumnCell = styled(TableCell)(({ theme }) => ({
  padding: 16,
  left: 0,
  position: 'sticky',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.white.default,

  ":after": {
    content: '" "',
    borderRight: '1px solid #E0E0E0',
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
  }
}));

export default StyledTableFirstColumnCell;
