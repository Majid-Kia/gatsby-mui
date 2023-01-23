import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../src/themes/defaultTheme';

export default function TopLayout(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
