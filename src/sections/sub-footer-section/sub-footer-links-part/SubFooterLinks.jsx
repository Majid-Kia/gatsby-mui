import React from 'react';
import Grid from '@mui/material/Grid';
import SubFooterLinksData from './SubFooterLinks.data';
import SubFooterImage from './SubFooterImage';
import CustomLink from '../../../components/link/CustomLink';

const SubFooterLinks = () => {
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={1}>
      {SubFooterLinksData.map((item) => {
        return (
          <Grid
            item
            key={item.SubFooterIconPath}
            sx={{ cursor: 'pointer', paddingX: 1.5 }}
          >
            <CustomLink navigationObject={item.SubFooterPath}>
              <SubFooterImage
                imagePath={item.SubFooterIconPath}
                alt={item.SubFooterAlt}
              />
            </CustomLink>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SubFooterLinks;
