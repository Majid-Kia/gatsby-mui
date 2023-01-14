import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CustomDrawer from './custom-drawer/CustomDrawer';
import DrawerMenuItemsList from './drawer-menu-items-list/DrawerMenuItemsList';
import DrawerHeader from './custom-drawer/CustomDrawerHeader';
import CustomIconButton from '../../../components/button/CustomIconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import GetStartedButtonTablet from './drawer-menu-items-list/GetStartedButtonTablet';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const DrawerMobile = () => {
  const [drawerState, setDrawerState] = React.useState(false);
  const isTablet = useMediaQuery('(min-width:600px)');
  const handleDrawerState = () => setDrawerState(false);

  return (
    <Grid item container justifyContent="flex-end" alignItems="center">
      {isTablet && (
        <>
          <GetStartedButtonTablet />
          <Grid py={1.5}>
            <Divider orientation="vertical" sx={{ height: '16px' }} />
          </Grid>
        </>
      )}

      <CustomIconButton
        onClick={() => setDrawerState(true)}
        sx={{
          '& .MuiSvgIcon-root': {
            minWidth: '18px',
            minHeight: '18px',
            fontSize: '28px',
          },
        }}
        color={'primary'}
        icon={<MenuIcon />}
      />

      <CustomDrawer drawerState={drawerState} handleDrawerState={handleDrawerState}>
        <DrawerHeader handleDrawerState={handleDrawerState} isTablet={isTablet} />
        <DrawerMenuItemsList isTablet={isTablet} handleDrawerState={handleDrawerState} />
      </CustomDrawer>
    </Grid>
  );
};

export default DrawerMobile;
