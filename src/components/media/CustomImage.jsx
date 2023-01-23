import React, { useContext } from 'react';
import PropType from 'prop-types';
import ImageContext from '../../context/Image.context';
import CustomPng from './CustomPng';
import CustomSvg from './CustomSvg';

const CustomImage = ({ relativePath, className, alt, pngSize }) => {
  if (relativePath?.indexOf('/') === -1) {
    const imageContext = useContext(ImageContext);
    if (!!imageContext[relativePath]) {
      return (
        <CustomPng
          className={className}
          data={imageContext[relativePath].data}
          alt={alt || imageContext[relativePath].alt}
          pngSize={pngSize}
        />
      );
    }
  }
  return <CustomSvg relativePath={relativePath} className={className} />;
};

CustomImage.propTypes = {
  relativePath: PropType.string.isRequired,
  className: PropType.string,
  alt: PropType.string,
  pngSize: PropType.shape({
    width: PropType.number,
    height: PropType.number,
  }),
};

export default CustomImage;
