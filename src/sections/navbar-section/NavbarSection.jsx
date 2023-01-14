import React from 'react';
import { StyledAppBar } from './Appbar';
import { StyledToolbar } from './Toolbar';
import NavbarLogo from '../../components/logo/NavbarLogo';
import DrawerMenu from './drawer-menu/DrawerMenu';
import ExpandedMenu from './expanded-menu/ExpandedMenu';
import Grid from '@mui/material/Grid';
import CustomizedContainer from '../../components/container/CustomizedContainer';
import CustomLink from '../../components/link/CustomLink';
import PolymorphicOnResizeContainer from '../../components/container/PolymorphicOnResizeContainer'



const NavbarSection = () => {
  return (
    <StyledAppBar position="sticky">
      <CustomizedContainer>
        <StyledToolbar disableGutters>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item lg={3.6} md={3} xs={4}>
              <CustomLink navigationObject={{ link: '/' }}>
                <NavbarLogo />
              </CustomLink>
            </Grid>
            <PolymorphicOnResizeContainer
                smallModeComponent={
                    <Grid item container xs={8} lg={2.4} justifyContent='flex-end'>
                      <DrawerMenu />
                    </Grid>
                }
                largeModeComponent={
                    <Grid item lg={8.4} md={9}>
                      <ExpandedMenu />
                    </Grid>
                }
                breakpoint={900}
            />
          </Grid>
        </StyledToolbar>
      </CustomizedContainer>
    </StyledAppBar>
  );
};

export default NavbarSection;
