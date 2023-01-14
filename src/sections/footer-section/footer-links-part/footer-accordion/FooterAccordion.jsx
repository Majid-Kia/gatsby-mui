import React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StyledFooterAccordion from './StyledFooterAccordion';
import StyledFooterAccordionSummary from './StyledFooterAccordionSummary';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import CustomLink from '../../../../components/link/CustomLink';

export default function FooterAccordion({ links }) {
  return (
    <Grid container>
      {links.map((link) => {
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
            <StyledFooterAccordion>
              <StyledFooterAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  variant="subtitle1"
                  sx={(theme) => ({
                    color: theme.palette.grey['A400'],
                  })}
                >
                  {link.title}
                </Typography>
              </StyledFooterAccordionSummary>
              {link.items.map((element, index) => {
                return (
                  <AccordionDetails key={index}>
                    <CustomLink className="footerLink" navigationObject={{ link: element.link }}>
                      <Typography variant='body2' sx={(theme) => ({
                        color: theme.palette.grey['A400']
                      })}>
                        {element.title}
                      </Typography>
                    </CustomLink>
                  </AccordionDetails>
                );
              })}
            </StyledFooterAccordion>
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
