import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import React from 'react';
import Typography from "@mui/material/Typography";

const PerformanceFeatureDescription = ({title, description}) => {
    return (
        <Grid container alignContent="space-between" alignItems="start" flexDirection="column" justifyContent="center">
            <Grid item>
                <Typography
                    variant="h6"
                    color="textPrimary"
                >
                    {title}
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    variant="body2"
                    sx={{color: (theme) => theme.palette.primary.main}}
                >
                    {description}
                </Typography>
            </Grid>
        </Grid>
    )
}

PerformanceFeatureDescription.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default PerformanceFeatureDescription;