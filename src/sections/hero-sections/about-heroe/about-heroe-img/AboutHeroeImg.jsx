import React from 'react';
import CustomImage from '../../../../components/media/CustomImage';
import { StaticImage } from 'gatsby-plugin-image';

export const AboutHeroeImg = () => {
  return (
    <StaticImage
      src="../../../../images/about-heroe/about-heroe-image.png"
      alt="About Us"
    />
  );
};
