import React from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import PropTypes from 'prop-types';
import ContactUsContent from "./ContactUsContent";
import contactUsData from './data/contactUs.data';
import ContactUsImage from "./ContactUsImage";

const ContactUsHeroSection = ({pt}) => {
    return (
        <Box pt={pt}>
            <Grid container spacing={{lg: 3, md: 2.5, sm: 3, xs: 2}}>
                <Grid item md={6} xs={12}>
                    <ContactUsContent
                        title={contactUsData.title}
                        description={contactUsData.description}/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <ContactUsImage title={contactUsData.title}/>
                </Grid>
            </Grid>
        </Box>
    )
}

ContactUsHeroSection.prototype = {
    pt: PropTypes.object.isRequired
}

export default ContactUsHeroSection;