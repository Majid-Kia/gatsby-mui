import React from 'react';
import PropTypes from 'prop-types';
// import WindowSizeContext from '../../context/WindowSize.Context';

const PolymorphicOnResizeComponent = ({
  smallModeComponent,
  largeModeComponent,
}) => {
  const windowSize = parseInt(process.env.GATSBY_SCREEN_WIDTH);

  // const devices = [
  //   {
  //     type: 'small',
  //     range: [0, breakpoint],
  //   },
  //   {
  //     type: 'large',
  //     range: [breakpoint, Infinity],
  //   },
  // ];
  //
  // const isInRange = (size, range) => {
  //   return range[0] <= size && range[1] > size;
  // };
  //
  // const findCurrentType = (currentWindowSize) => {
  //   const newMode = devices.find((device) =>
  //     isInRange(currentWindowSize, device.range),
  //   );
  //   return newMode.type;
  // };

  // const [currentType, setCurrentType] = useState(findCurrentType(windowSize));
  // const currentType = findCurrentType(windowSize);

  // const changeMode = (newWindowSize) => {
  //   const currentDevice = devices.find((device) => device.type === currentType);
  //   if (isInRange(newWindowSize, currentDevice.range)) {
  //     return;
  //   }
  //   setCurrentType(findCurrentType(newWindowSize));
  // };

  // useEffect(() => {
  //   changeMode(windowSize);
  // }, [windowSize]);

  return (
    <React.Fragment>
      {windowSize < 900 ? smallModeComponent : largeModeComponent}
    </React.Fragment>
  );
};

PolymorphicOnResizeComponent.propTypes = {
  smallModeComponent: PropTypes.element,
  largeModeComponent: PropTypes.element,
};

export default PolymorphicOnResizeComponent;
