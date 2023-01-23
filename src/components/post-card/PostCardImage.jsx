import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './PostImage.module.css';

const PostCardImage = ({ imageData, alt, height }) => {
  return (
    <Box
      sx={{
        '& .gatsby-image-wrapper div': {
          height: height,
        },
      }}
    >
      <GatsbyImage image={imageData} alt={alt} className={styles.postImage} />
    </Box>
  );
};

PostCardImage.propTypes = {
  imageData: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.object,
};

export default PostCardImage;
