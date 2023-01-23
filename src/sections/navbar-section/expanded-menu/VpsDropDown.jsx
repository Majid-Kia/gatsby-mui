import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { vpsItems } from '../data/menu.data';
import Typography from '@mui/material/Typography';
import CustomDropDown from '../../../components/drop-down/CustomDropDown';
import CustomButton from '../../../components/button/CustomButton';
import CustomLink from '../../../components/link/CustomLink';
import MoreProductsDropDown from './MoreProductsDropDown';

const VpsDropDown = () => {
  return (
    <CustomDropDown
      notCloseOnClickOnMenuItem
      buttonChild={
        <CustomButton
          variant={'text'}
          contentText={'Products'}
          className="navbarLink"
          textSize={'subtitle1'}
          sx={{
            color: (theme) => theme.palette.text.primary,
            spacing: 0,
            paddingY: 0.75,
            textTransform: 'none',
          }}
          endIcon={<KeyboardArrowDownIcon />}
        ></CustomButton>
      }
      menuChildren={vpsItems.map((item) => {
        if (item.name === 'More')
          return <MoreProductsDropDown />;
        else
        return (
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
        );
      })}
      menuItemProps={{
        sx: {
          padding: '0',
          '&:hover': {
            backgroundColor: (theme) => theme.palette.primary.light,
          },
        },
      }}
      menuSx={{ mt: 3 }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    />
  );
};

export default VpsDropDown;
