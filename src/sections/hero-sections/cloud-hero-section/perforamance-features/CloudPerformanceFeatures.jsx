import PropTypes from "prop-types";
import Grid from '@mui/material/Grid';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from "@mui/material/Typography";

const Feature  = ({feature}) => {
    return (
        <Grid container
              flexWrap="nowrap"
             justifyContent="flex-start"
             alignItems="center"
        >
            <Grid item display="flex" justifyContent="center" mb={0.2}>
                <CheckCircleIcon color="primary" sx={{width: 21.5, height: 21.5}}/>
            </Grid>
            <Grid item ml={1}>
                <Typography
                    variant="subtitle1"
                    color="textPrimary"
                >
                    {feature.title}
                </Typography>
            </Grid>
            <Grid item ml={0.5}>
                <Typography
                    variant="body1"
                    color="textPrimary"
                >
                    {feature.description}
                </Typography>
            </Grid>
        </Grid>
    )
}

Feature.propTypes = {
    feature: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
}

const isEven = (number) => !number || (number/2 === 1)

const CloudPerformanceFeatures = ({features}) => {
    return (
        <Grid container spacing={{sm: 3, xs: 1.5}}>
            {features.map((feature, index) => {
                return (
                    <Grid item sm={isEven(index) ? 7:5} md={6} lg={6} xs={12} key={index}>
                        <Feature feature={feature} />
                    </Grid>
                )
            })}
        </Grid>
    );
}

CloudPerformanceFeatures.propTypes = {
    features: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired
}

export default CloudPerformanceFeatures;