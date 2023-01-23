import Grid from '@mui/material/Grid';
import StaffRepository from '../../repository/staff.repository';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import PropTypes from 'prop-types';
// import * as styles from './BlogAuthorAvatar.module.css';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Ale/////ex from '../../images/staffs/avatars/alex.inline.svg';
// import Aliz from '../../images/staffs/avatars/aliz.inline.svg';
// import Mahdi from '../../images/staffs/avatars/matt.inline.svg';
// import Ivar from '../../images/staffs/avatars/ivvar.inline.svg';
// import Lily from '../../images/staffs/avatars/zarras.inline.svg';
// import Emma from '../../images/staffs/avatars/emma.inline.svg';
// import Armin from '../../images/staffs/avatars/armin.inline.svg';
// import Pius from '../../images/staffs/avatars/pius.inline.svg';
// import Paulina from '../../images/staffs/avatars/paulina.inline.svg';
// import MarryH from '../../images/staffs/avatars/marryH.inline.svg';
// import Seo from '../../images/staffs/avatars/allen.inline.svg';
// import Cloudzy from '../../images/staffs/avatars/cloudzy.inline.svg';

const BlogAuthorAvatar = ({ writerId, width, bgcolor }) => {
  const writerInfo = StaffRepository.getStaffData(writerId);
  // const getIcon = (id) => {
  //   switch (id) {
  //     case 'alex-robbins':
  //       return <Alex />;
  //     case 'ali_izadi':
  //       return <Aliz />;
  //     case 'mahdi':
  //       return <Mahdi />;
  //     case 'Ivarr_vinter':
  //       return <Ivar />;
  //     case 'Lily':
  //       return <Lily />;
  //     case 'Emma':
  //       return <Emma />;
  //     case 'Armin':
  //       return <Armin />;
  //     case 'Pius':
  //       return <Pius />;
  //     case 'Paulina':
  //       return <Paulina />;
  //     case 'mary-h':
  //       return <MarryH />;
  //     case 'seo':
  //       return <Seo />;
  //     case 'Cloudzy':
  //       return <Cloudzy />;
  //     default:
  //       return <AccountCircleIcon />;
  //   }
  // };

  return (
    <Grid container>
      <Grid item xs="auto">
        <Avatar
          key={writerId}
          alt={writerInfo?.name}
          sx={{
            width: `${width}px`,
            height: `${width}px`,
            bgcolor,
          }}
        >
          {/*{getIcon(writerId)}*/}
        </Avatar>
      </Grid>
    </Grid>
  );
};

BlogAuthorAvatar.propTypes = {
  writerId: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  bgcolor: PropTypes.string,
};

export default BlogAuthorAvatar;
