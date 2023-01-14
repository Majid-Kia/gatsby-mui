import React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';

const CustomDropDown = ({
  buttonChild,
  menuChildren,
  menuItemProps,
  menuSx,
  anchorOrigin,
  transformOrigin,
  notCloseOnClickOnMenuItem,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {buttonChild}
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby={'basic-button'}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        sx={menuSx}
        disableScrollLock
      >
        {menuChildren.map((item) => {
          return (
            <MenuItem
              {...menuItemProps}
              key={item.key}
              onClick={() => !notCloseOnClickOnMenuItem && handleClose()}
            >
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

CustomDropDown.prototype = {
  buttonChild: PropTypes.element,
  menuChildren: PropTypes.element,
  menuItemProps: PropTypes.object,
  menuSx: PropTypes.object,
  anchorOrigin: PropTypes.object,
  transformOrigin: PropTypes.object,
  notCloseOnClickOnMenuItem: PropTypes.bool,
};

export default CustomDropDown;
