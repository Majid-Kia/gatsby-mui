import React from 'react';
import Grid from '@mui/material/Grid';
import NavbarLogo from '../../../../components/logo/NavbarLogo';
import CustomIconButton from '../../../../components/button/CustomIconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import GetStartedButtonTablet from '../drawer-menu-items-list/GetStartedButtonTablet';
import Divider from '@mui/material/Divider';

const DrawerHeader = ({ handleDrawerState, isTablet }) => {
  return (
    <Grid
      container
      height='80px'
      paddingX={{ sm: 4, xs: 3 }}
      justifyContent="space-between"
      alignItems="center"
      sx={{ boxShadow: (theme) => theme.shadows['3'] }}
    >
      <Grid item container xs={6}>
        <NavbarLogo />
      </Grid>
      <Grid item container xs={6} justifyContent="flex-end" alignItems="center">
        {isTablet && (
          <>
            <GetStartedButtonTablet handler={handleDrawerState} />
            <Grid py={1.5}>
              <Grid>
                <Divider orientation="vertical" sx={{ height: '16px' }} />
              </Grid>
            </Grid>
          </>
        )}

        <CustomIconButton
          variant="text"
          color="primary"
          icon={<CloseIcon fontSize="large" />}
          onClick={handleDrawerState}
          textSize={'buttonSmall'}
          sx={{
            minWidth: 0,
            '& .MuiSvgIcon-root': {
              minWidth: '18px',
              minHeight: '18px',
              fontSize: '28px',
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

DrawerHeader.propTypes = {
  handleDrawerState: PropTypes.func.isRequired,
  isTablet: PropTypes.bool.isRequired,
};

export default DrawerHeader;
