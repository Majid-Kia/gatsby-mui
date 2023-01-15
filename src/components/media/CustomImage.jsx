import React from 'react';
import PropType from 'prop-types';

const CustomImage = ({ relativePath, className, alt, pngSize }) => {
  // if (relativePath?.indexOf('/') == -1 && imageContext[relativePath]) {
  //   return (
  //     <CustomPng relativePath={relativePath} className={className} alt={alt} pngSize={pngSize}/>
  //   );
  // }

  // return <CustomSvg relativePath={relativePath} className={className} />;
  return <div></div>
};

CustomImage.propTypes = {
  relativePath: PropType.string.isRequired,
  className: PropType.string,
  alt: PropType.string,
  pngSize: PropType.shape({
    width: PropType.number,
    height: PropType.number
  })
};

export default CustomImage;
