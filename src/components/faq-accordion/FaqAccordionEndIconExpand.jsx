import React from 'react';
// import CustomImage from '../media/CustomImage';
import Box from '@mui/material/Box';
import * as styles from './endIcon.module.css';
import FaqPlusIcon from 'images/faq-section/faqPlusIcon.inline.svg';

const FaqAccordionEndIconExpand = () => {
  return (
    <Box>
      {/* <CustomImage className={styles.svgTagger} relativePath="faq-section/faqPlusIcon.svg" /> */}
      <FaqPlusIcon />
    </Box>
  );
};

export default FaqAccordionEndIconExpand;
