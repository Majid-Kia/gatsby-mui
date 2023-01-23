import React from 'react';
import Grid from '@mui/material/Grid';
import VpsDropDown from './VpsDropDown';
import { pages } from '../data/menu.data';
import CustomLink from '../../../components/link/CustomLink';
import GetStartedButton from './GetStartedButton';
import SignInButton from './SignInButton';
import CustomButton from '../../../components/button/CustomButton';

const ExpandedMenu = () => {
  return (
    <Grid
      container
      display={{ xs: 'none', md: 'flex' }}
      justifyContent="space-between"
    >
      <Grid item xs={7} sx={{ display: 'flex' }}>
        <VpsDropDown />
        {pages.map((page) => {
          return (
            <CustomLink
              navigationObject={page}
              className={'navbarLink'}
              key={page.name}
            >
              <CustomButton
                variant={'text'}
                contentText={page.name}
                className="navbarLink"
                textSize={'subtitle1'}
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  spacing: 0,
                  paddingY: 0.75,
                  textTransform: 'none',
                }}
              />
            </CustomLink>
          );
        })}
      </Grid>
      <Grid
        item
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        {/* <SignInDropDown /> */}
        <SignInButton />
        <GetStartedButton />
      </Grid>
    </Grid>
  );
};

export default ExpandedMenu;
