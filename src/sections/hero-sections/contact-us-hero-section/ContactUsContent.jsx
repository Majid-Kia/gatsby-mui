import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from 'prop-types';

const ContactUsContent = ({title, description}) => {
    return (
        <Grid container pt={{lg: 3.2, md: 0}}>
            <Grid item xs={12}>
                <Typography
                    variant="h1"
                    color="textPrimary"
                >
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={12} mt={4}>
                <Typography
                    variant="body1"
                    color="textSecondary"
                >
                    {description}
                </Typography>
            </Grid>
        </Grid>
    )
}

ContactUsContent.prototype = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ContactUsContent;