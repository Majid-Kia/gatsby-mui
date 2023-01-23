import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import CustomButton from '../../components/button/CustomButton';
import Grid from '@mui/material/Grid';
import CustomImage from '../../components/media/CustomImage';
import * as styles from './GdprSection.module.css';
import { GDPR_CONSENT } from '../../config/cookieTypes.config';

const GdprSection = () => {
  const checkConsent = () => {
    const consentStatus = localStorage.getItem(GDPR_CONSENT);
    // for now, if the user has clicked on any button, return true
    return !consentStatus;
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleAccept = () => {
    setIsOpen(false);
    localStorage.setItem(GDPR_CONSENT, '1');
  };

  const handleReject = () => {
    setIsOpen(false);
    localStorage.setItem(GDPR_CONSENT, '0');
  };

  useEffect(() => {
    setIsOpen(checkConsent());
  }, []);

  return (
    isOpen && (
      <AppBar position="fixed" color="white" sx={{ top: 'auto', bottom: 0 }}>
        <Grid container direction="column">
          <Grid
            item
            xs={12}
            mt={2}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid item display="flex" alignItems="center" mr={1.25}>
              <CustomImage
                className={styles.cookieVector}
                relativePath="gdpr/cookie.svg"
              />
            </Grid>
            <Grid item xs={10} md={7} lg={5}>
              <Typography variant="body2">
                Our website uses cookies to improve your experience. We'll
                assume you're ok with this, but you can opt-out if you wish.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            mt={1.25}
            mb={2}
          >
            <Grid item>
              <CustomButton
                contentText="reject all"
                color="primary"
                variant="outlined"
                textSize="small"
                sx={{ py: 0.5 }}
                onClick={handleReject}
              />
            </Grid>
            <Grid item ml={1.5}>
              <CustomButton
                contentText="accept all"
                color="primary"
                variant="contained"
                textSize="small"
                sx={{ py: 0.5 * 8 + 1 + 'px' }}
                onClick={handleAccept}
              />
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    )
  );
};

export default GdprSection;
