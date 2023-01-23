import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CustomHorizontalDivider from '../../../../components/divider/CustomHorizontalDivider';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { vpsItems, moreProducts } from '../../data/menu.data';
import PropTypes from 'prop-types';
import CustomLink from '../../../../components/link/CustomLink';

const VpsCollapse = ({ handleClick, subItemOpen }) => {
  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemText
          primary="Products"
          primaryTypographyProps={{ variant: 'subtitle1' }}
        />
        {subItemOpen ? (
          <ExpandLess color="primary" />
        ) : (
          <ExpandMore color="primary" />
        )}
      </ListItemButton>
      <CustomHorizontalDivider
        sx={{ borderColor: (theme) => theme.palette.border.map }}
      />
      <Collapse in={subItemOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {vpsItems.map((item) => {
            if (item.name === 'More') {
              return moreProducts.map((product, index) => {
                return (
                  <CustomLink key={product.name} navigationObject={product}>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary={product.name} />
                    </ListItemButton>
                  </CustomLink>
                );
              });
            }
            return (
              <CustomLink key={item.name} navigationObject={item}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </CustomLink>
            );
          })}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

VpsCollapse.prototype = {
  handleClick: PropTypes.func,
  subItemOpen: PropTypes.func,
};

export default VpsCollapse;
