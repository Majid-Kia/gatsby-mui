import React, { useContext, useState } from 'react';
import FrontMatterContext from '../../context/FrontMatter.context';
import Box from '@mui/material/Box';
import { ReactSVG } from 'react-svg';
import Skeleton from '@mui/material/Skeleton';
import PropType from 'prop-types';

const CustomSvg = ({ relativePath, className }) => {
  const [svgElement, setSvgElement] = useState(null);
  let mounted = true;
  const frontMatterContext = useContext(FrontMatterContext);

  const autoImport = () => {
    if (relativePath?.indexOf('/') !== -1) {
      import('../../images/' + relativePath).then((dataModule) => {
        mounted && setSvgElement(dataModule?.default);
      });
    }
  };

  React.useEffect(() => {
    if (!svgElement) {
      autoImport();
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Box className={className} id={relativePath}>
      {svgElement ? (
        <ReactSVG
          key={relativePath}
          loading={() => (
            <Skeleton variant={'rectangular'} animation={'wave'} />
          )}
          className={className}
          src={String(svgElement)}
        />
      ) : (
        <></>
      )}
    </Box>
  );
};

CustomSvg.propTypes = {
  relativePath: PropType.string.isRequired,
  className: PropType.string,
  alt: PropType.string,
};

export default CustomSvg;
