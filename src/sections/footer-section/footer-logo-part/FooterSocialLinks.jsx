import React from 'react';
import Grid from '@mui/material/Grid';
import CustomLink from '../../../components/link/CustomLink';
import CustomImage from '../../../components/media/CustomImage';
import socialLinksData from '../data/FooterSocialLink.data';
import PropTypes from 'prop-types';
import routeUtil from '../../../util/route.util';

const FooterSocialLinks = () => {
  return (
    <Grid container justifyContent="right" alignItems="center">
      {socialLinksData.map((socialLink) => {
        return (
          <Grid
            item
            sx={{
              px: 1.5,
              '& svg:hover': {
                filter:
                  'invert(49%) sepia(89%) saturate(364%) hue-rotate(324deg) brightness(103%) contrast(103%);',
              },
            }}
            key={socialLink.iconPath}
          >
            <CustomLink
              navigationObject={{
                link: routeUtil.normalizeWithPostfix(socialLink.path, '/'),
              }}
              sx={(theme) => ({ color: theme.palette.grey['A700'] })}
            >
              <CustomImage relativePath={socialLink.iconPath} />
            </CustomLink>
          </Grid>
        );
      })}
    </Grid>
  );
};

FooterSocialLinks.propTypes = {
  socialLink: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      iconPath: PropTypes.shape({
        relativePath: PropTypes.string.isRequired,
      }),
    }),
  ),
};

export default FooterSocialLinks;
