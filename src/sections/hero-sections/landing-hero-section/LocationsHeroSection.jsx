import React from 'react';
import PropTypes from 'prop-types';
import { getLocationHeroData } from './data/locationHeroDescription.data';
import LandingsHeroSection from "./LandingsHeroSection";

const LocationsHeroSection = ({ mt, title, data }) => {
    const LocationHeroData = getLocationHeroData(title);
    if (data.title) {
        return (
            <LandingsHeroSection
                description={data.description}
                title={data.title}
                landingName={LocationHeroData.locationName}
                mt={mt}
            />
        )
    }
    else {
        return (
            <LandingsHeroSection
                description={LocationHeroData.description}
                title={LocationHeroData.title}
                landingName={LocationHeroData.locationName}
                mt={mt}
            />
        )
    }
};

LocationsHeroSection.propTypes = {
    mt: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
    })
};

export default LocationsHeroSection;
