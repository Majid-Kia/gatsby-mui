import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import PropTypes from 'prop-types';

const CustomSnackbar = ({
  title,
  message,
  isOpen,
  onClose,
  variant,
  severity,
}) => {
  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={onClose}>
      <Alert
        onClose={onClose}
        variant={variant || 'filled'}
        severity={severity || 'info'}
        sx={{ width: '280px' }}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Snackbar>
  );
};

CustomSnackbar.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  variant: PropTypes.string,
  severity: PropTypes.string,
};

export default CustomSnackbar;
