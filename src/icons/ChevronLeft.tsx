import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '#types';

const ChevronLeft = ({
  color = '#000000',
  height = 24,
  width = 24,
}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 47.75 84.81">
    <Path
      fill={color}
      d="M40.14,83.5a4.45,4.45,0,0,0,7.61-3.13,4.59,4.59,0,0,0-1.27-3.17L10.94,42.43,46.48,7.67a4.71,4.71,0,0,0,1.27-3.18,4.45,4.45,0,0,0-7.61-3.17L1.46,39.16A4.31,4.31,0,0,0,0,42.43,4.54,4.54,0,0,0,1.42,45.7Z"
    />
  </Svg>
);

export default ChevronLeft;
