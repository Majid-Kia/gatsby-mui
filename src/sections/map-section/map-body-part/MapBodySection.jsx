import React from 'react';
// import MapBodyLargeMode from './MapBodyLargeMode';
import MapBodySmallMode from './MapBodySmallMode';
// import PolymorphicOnResizeComponent from '../../../components/container/PolymorphicOnResizeContainer'
// import { useTheme } from "@mui/material/styles";



const MapBodySection = () => {
    // const theme = useTheme();
    return (
        <MapBodySmallMode />
        // <PolymorphicOnResizeComponent
        // breakpoint={theme.breakpoints.values.md}
        // smallModeComponent={<MapBodySmallMode />}
        // largeModeComponent={<MapBodyLargeMode />}
        // />
    )
};

export default MapBodySection;
