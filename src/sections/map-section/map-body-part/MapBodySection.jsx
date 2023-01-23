import React from 'react';
import MapBodyLargeMode from './MapBodyLargeMode';
import MapBodySmallMode from './MapBodySmallMode';
import PolymorphicOnResizeComponent from '../../../components/container/PolymorphicOnResizeContainer';

const MapBodySection = () => {
  return (
    <PolymorphicOnResizeComponent
      smallModeComponent={<MapBodySmallMode />}
      largeModeComponent={<MapBodyLargeMode />}
    />
  );
};

export default MapBodySection;
