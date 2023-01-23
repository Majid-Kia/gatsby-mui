import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from 'prop-types';
import React from 'react';
import CloudPerformanceFeatures from "./perforamance-features/CloudPerformanceFeatures";

const CloudHeroDescriptionAndFeatures = ({ title, subTitle, description, features }) => {
    return (
        <Grid container justifyContent="center" sx={{ textAlign: { lg: "left", xs: "center" } }} alignItems="center">
            <Grid item xs={12}>
                <Typography
                    variant="h5"
                    component="h1"
                    color="textSecondary"
                >
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={12} mt={2}>
                <Typography
                    variant="h1"
                    component="h2"
                    color="textPrimary"
                >
                    {subTitle}
                </Typography>
            </Grid>
            <Grid item
                xs={12}
                mt={4}
            >
                <Typography
                    variant="h6"
                    color="textSecondary"
                >
                    {description}
                </Typography>
            </Grid>
            <Grid item
                lg={12}
                md={9}
                sm={10}
                xs={12}
                mt={{ xl: 11, lg: 5, md: 5, sm: 4, xs: 4 }}
            >
                <CloudPerformanceFeatures features={features} />
            </Grid>
        </Grid>
    )
}

CloudHeroDescriptionAndFeatures.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired
}

export default CloudHeroDescriptionAndFeatures;