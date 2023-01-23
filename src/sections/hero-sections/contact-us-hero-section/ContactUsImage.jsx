import PropTypes from 'prop-types';
import React from 'react';
import Box from '@mui/material/Box';
import { StaticImage } from "gatsby-plugin-image";


const ContactUsImage = ({title}) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "& img": {
                    minWidth: "100%",
                    minHeight: "100%"
                }
            }}
        >
            <StaticImage src={'./data/contactUsImage.png'} alt={title} />
        </Box>
    )
}


ContactUsImage.prototype = {
    title: PropTypes.string.isRequired,
}

export default ContactUsImage;