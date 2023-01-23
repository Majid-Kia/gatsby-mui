import { styled } from '@mui/material/styles';
import React from 'react';
import List from '@mui/material/List';

const StyledUnorderedList = styled(List)(({ theme }) => ({
  listStyle: 'none',
  paddingLeft: '20px',
  '& li:before': {
    content: '""',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
    lineHeight: theme.typography.h5.lineHeight,
    display: 'inline-block',
    width: '8px',
    height: '8px',
    marginLeft: '-1em',
    marginRight: '18px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
    position: 'absolute',
    top: '14px',
  },
}));

export default StyledUnorderedList;
