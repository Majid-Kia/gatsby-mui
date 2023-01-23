import Grid from '@mui/material/Grid';
import StaffRepository from '../../repository/staff.repository';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import BlogAuthorAvatar from '../blog-author-avatar/BlogAuthorAvatar';

const WriterInfo = ({ writerId }) => {
  const name = StaffRepository.getStaffName(writerId);
  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item>
        <BlogAuthorAvatar writerId={writerId} width="28" />
      </Grid>
      <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography ml={0.3} variant="caption" color="textPrimary">
          {name}
        </Typography>
      </Grid>
    </Grid>
  );
};

WriterInfo.propTypes = {
  writerId: PropTypes.string.isRequired,
};

export default WriterInfo;
