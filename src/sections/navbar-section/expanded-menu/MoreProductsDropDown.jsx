import React, { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { moreProducts } from '../data/menu.data';
import Typography from '@mui/material/Typography';
import CustomLink from '../../../components/link/CustomLink';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const MoreProductsDropDown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Box
        className="moreProducts"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        width="100%"
        display="flex"
        alignItems="center"
        pr={2}
        sx={{ background: (theme) => open && theme.palette.primary.light }}
      >
        <Typography
          variant="body2"
          fontWeight={open && 500}
          color="textPrimary"
          sx={{ padding: '6px 16px', width: '100%' }}
        >
          More
        </Typography>
        <KeyboardArrowRightIcon fontSize="small" sx={{ height: '100%' }} />
      </Box>

      <Menu
        id="moreProductsMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby={'basic-button'}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        disableScrollLock
      >
        {moreProducts.map((item) => {
          return (
            <MenuItem
              sx={{
                padding: '0',
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.primary.light,
                },
              }}
              key={item.key}
              onClick={() => handleClose()}
            >
              <CustomLink
                className="navbarLink"
                navigationObject={item}
                key={item.name}
                style={{ padding: '6px 16px', width: '100%' }}
              >
                <Typography variant="body2" color="textPrimary">
                  {item.name}
                </Typography>
              </CustomLink>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default MoreProductsDropDown;
