import React from 'react';
import Grid from '@mui/material/Grid';
import FooterLogo from "../../components/logo/FooterLogo"
import FooterSocialLinks from './footer-logo-part/FooterSocialLinks';
import FooterLinks from './footer-links-part/FooterLinks';
import FooterReviewPart from './footer-review-part/FooterReviewPart';

const FooterSection = () => {
    return (
        <Grid container paddingTop={20} justifyContent={{ lg: 'space-between', md: 'space-between', sm: 'center', xs: 'center' }} >
            <Grid item lg={6} md={6} sm={12} xs={12} paddingBottom={3}>
                <FooterLogo />
            </Grid>

            <Grid item justifySelf="center" order={{ lg: 2, md: 2, sm: 3, xs: 3 }} mt={{ xs: 7, md: 0}}>
                <FooterSocialLinks />
            </Grid>

            <Grid item lg={12} md={12} sm={12} xs={12} order={{ lg: 3, md: 3, sm: 2, xs: 2 }} paddingTop={{ lg: 3, md: 0, sm: 0, xs: 0 }} p={3}
                sx={(theme) => ({
                    borderTop: 1,
                    borderColor: theme.palette.grey['A100'],
                })}>
                <FooterLinks />
            </Grid>

            <Grid container item lg={12} md={12} sm={12} xs={12} mt={{ lg: 11, md: 11, sm: 4, xs: 4 }} order={3} mb={2}>
                <FooterReviewPart />
            </Grid>
        </Grid>
    )
}

export default FooterSection;