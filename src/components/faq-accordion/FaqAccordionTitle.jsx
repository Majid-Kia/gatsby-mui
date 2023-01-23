import React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";


const FaqAccordionTitle = ({ title }) => {
    return (
        <Typography
            variant="h6"
            component="h3"
            sx={{ color: (theme) => theme.palette.text.primary }}
        >
            {title}
        </Typography>
    );
};

FaqAccordionTitle.prototype = {
    title: PropTypes.string.isRequired,
};

export default FaqAccordionTitle;
