import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import FullWidthContainer from 'components/container/FullWidthContainer';
import background from 'images/category-hero-section/category-hero.png';
import backgroundSm from 'images/category-hero-section/category-hero-sm.png';
import BlogAuthorAvatar from 'components/blog-author-avatar/BlogAuthorAvatar';
import StaffRepository from 'repository/staff.repository';

const AuthorHeroSection = ({ writerId }) => {
  const name = StaffRepository.getStaffName(writerId);
  const bio = StaffRepository.getStaffBio(writerId);
  return (
    <FullWidthContainer
      backgroundImage={{
        xl: background,
        lg: background,
        md: background,
        sm: backgroundSm,
        xs: backgroundSm,
      }}
      backgroundSize={{
        lg: 'cover',
        xl: 'cover',
        xs: 'cover',
        sm: 'cover',
        md: 'cover',
      }}
    >
      <Grid
        container
        pt={{ lg: 10.75, md: 10, sm: 5.5, xs: 5.25 }}
        pb={{ lg: 13, md: 10, sm: 4.5, xs: 2.25 }}
      >
        <Grid container xs={12} display="flex" spacing={3} alignItems="center">
          <Grid item>
            <BlogAuthorAvatar writerId={writerId} width="64" />
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              sx={{ color: (theme) => theme.palette.text.primary }}
            >
              {name}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Typography
            variant="h6"
            component="p"
            sx={{ color: (theme) => theme.palette.common.tableCell }}
          >
            {bio}
          </Typography>
        </Grid>
      </Grid>
    </FullWidthContainer>
  );
};

AuthorHeroSection.prototype = {
  writerId: PropTypes.string.isRequired,
};

export default AuthorHeroSection;
