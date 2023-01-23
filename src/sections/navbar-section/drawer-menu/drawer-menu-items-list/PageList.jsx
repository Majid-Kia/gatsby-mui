import React from 'react';
import { pages } from '../../data/menu.data';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CustomHorizontalDivider from '../../../../components/divider/CustomHorizontalDivider';
import CustomLink from '../../../../components/link/CustomLink';

const PagesList = () => {
  return (
    <React.Fragment>
      {pages.map((page) => {
        return (
          <React.Fragment key={page.name}>
            <CustomLink navigationObject={page} className="navbarLink">
              <ListItemButton>
                <ListItemText primaryTypographyProps={{ variant: 'subtitle1' }}>
                  {page.name}
                </ListItemText>
              </ListItemButton>
            </CustomLink>
            <CustomHorizontalDivider
              sx={{ borderColor: (theme) => theme.palette.border.map }}
            />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default PagesList;
