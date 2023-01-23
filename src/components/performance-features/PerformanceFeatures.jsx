import React from 'react';
// import PolymorphicOnResizeContainer from '../container/PolymorphicOnResizeContainer';
import PerformanceFeaturesListInLargeMode from './PerformanceFeaturesListInLargeMode';
// import PerformanceFeaturesListInSmallMode from './PerformanceFeaturesListInSmallMode';

export const PerformanceFeature = () => {
  return (
    <PerformanceFeaturesListInLargeMode />
    // <PolymorphicOnResizeContainer
    //   breakpoint={theme.breakpoints.values.sm}
    //   smallModeComponent={<PerformanceFeaturesListInSmallMode />}
    //   largeModeComponent={<PerformanceFeaturesListInLargeMode />}
    // />
  );
};
