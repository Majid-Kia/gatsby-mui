import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  ratingCount,
  ratingValue,
} from '../../../repository/reviews.repository';
import CustomLink from '../../../components/link/CustomLink';
import Rating from '@mui/material/Rating';

const FooterReviewPart = () => {
  const naturalizer = 0.2;
  return (
    <>
      <Grid
        item
        container
        xs={12}
        md={6}
        justifyContent={{ md: 'flex-start', xs: 'center' }}
        alignItems="center"
        order={{ xs: 1, md: 0 }}
      >
        <Typography
          variant="caption"
          sx={(theme) => ({ color: theme.palette.grey['A400'] })}
        >
          © 2008-{new Date().getFullYear()} Cloudzy. All rights reserved.
        </Typography>
      </Grid>

      <Grid
        item
        container
        xs={12}
        md={6}
        justifyContent={{ md: 'flex-end', xs: 'center' }}
        alignItems="center"
        mb={{ md: 0, xs: 1.75 }}
        order={{ xs: 0, md: 1 }}
      >
        <Grid
          item
          container
          xs={12}
          justifyContent={{ lg: 'flex-end', xs: 'center' }}
        >
          <Grid item height={22} mr={1.4}>
            <CustomLink navigationObject={{ link: '/vps-reviews/' }}>
              <Typography
                component="span"
                variant="body2"
                sx={(theme) => ({
                  color: theme.palette.grey['A400'],
                  ml: 1,
                })}
              >
                {ratingCount} Reviews
              </Typography>
            </CustomLink>
            <Typography
              component="span"
              variant="body2"
              sx={(theme) => ({
                color: theme.palette.grey['A400'],
                ml: 1,
              })}
            >
              |
            </Typography>
            <Typography
              component="span"
              variant="body2"
              sx={(theme) => ({
                color: theme.palette.grey['A400'],
                ml: 1,
              })}
            >
              {ratingValue} Average
            </Typography>
          </Grid>

          <Grid item height={22}>
            <Rating
              name="footer-rating"
              value={ratingValue - naturalizer}
              precision={0.1}
              readOnly
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FooterReviewPart;
