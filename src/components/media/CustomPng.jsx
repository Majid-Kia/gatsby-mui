import PropType from 'prop-types';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const CustomPng = ({ data, className, alt, pngSize }) => {
  return (
    <GatsbyImage
      alt={alt}
      image={data}
      className={className}
      style={{ width: pngSize?.width, height: pngSize?.height }}
      // width={60}
      // height={60}
    />
  );
};

CustomPng.prototype = {
  data: PropType.object,
  className: PropType.string.isRequired,
  alt: PropType.string,
  pngSize: PropType.shape({
    width: PropType.number,
    height: PropType.number,
  }),
};

export default CustomPng;
