import List from '@mui/material/List';
import React from 'react';
import Grid from '@mui/material/Grid';
import SignInDescription from '../../SignInDescription';
import VpsCollapse from './VpsCollapse';
import PagesList from './PageList';
import SignInButtons from './SignInButtons';
import GetStartedButtonMobile from './GetStartedButtonMobile';
import PropTypes from 'prop-types';

const DrawerMenuItemsList = ({ isTablet, handleDrawerState }) => {
  const [subItemOpen, setSubItemOpen] = React.useState(false);
  const handleClick = () => {
    setSubItemOpen(!subItemOpen);
  };

  return (
    <Grid
      container
      paddingX={{ sm: 4, xs: 3 }}
      spacing={3}
      paddingTop={1}
      paddingBottom={{ sm: 6, xs: 4 }}
    >
      <Grid item xs={12}>
        <List component="nav" aria-labelledby="nested-list-subheader">
          <VpsCollapse handleClick={handleClick} subItemOpen={subItemOpen} />
          <PagesList />
        </List>
      </Grid>
      <Grid item xs={12} display={isTablet && 'none'}>
        <GetStartedButtonMobile handler={handleDrawerState} />
      </Grid>
      <Grid item xs={12}>
        <SignInButtons />
      </Grid>
      <Grid item xs={12}>
        <SignInDescription />
      </Grid>
    </Grid>
  );
};

DrawerMenuItemsList.propTypes = {
  isTablet: PropTypes.bool.isRequired,
  handleDrawerState: PropTypes.func.isRequired,
};

export default DrawerMenuItemsList;
