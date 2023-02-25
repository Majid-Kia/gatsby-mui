import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import CustomLink from '../../../../components/link/CustomLink';
export default function FooterAccordion({ links }) {
  return (
    <Grid container>
      {links.map((link) => {
        console.log(444444, link)
        return (
          <Grid
            key={link.title}
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={(theme) => ({
              borderBottom: 1,
              borderColor: theme.palette.grey['A100'],
            })}
          >
            <div>
              <div

              >
                <Typography
                  variant="subtitle1"
                  sx={(theme) => ({
                    color: theme.palette.grey['A400'],
                  })}
                >
                  {link.title}
                </Typography>
              </div>
              {link.node.FooterLinkItems.map((element, index) => {
                return (
                  <div key={index}>
                    <div>
                      <Typography variant='body2' sx={(theme) => ({
                        color: theme.palette.grey['A400']
                      })}>
                        {element.title}
                      </Typography>
                    </div>
                  </div>
                );
              })}
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}

FooterAccordion.prototype = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
};
