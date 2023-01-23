import CustomImage from '../../../components/media/CustomImage';
import React from 'react';
import Box from '@mui/material/Box';

const PanelImage = ({}) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        '& svg': {
          width: '100%',
          height: '100%',
        },
      }}
    >
      <CustomImage relativePath={'cloud-hero-section/panelMd.svg'} />
    </Box>
  );
};

export default PanelImage;
