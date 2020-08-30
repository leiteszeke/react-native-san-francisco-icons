import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '#types';

const Minus = ({ color = '#000000', height = 24, width = 24 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 80.57 8.74">
    <Path
      d="M4.35 8.74h71.87a4.43 4.43 0 004.35-4.39A4.39 4.39 0 0076.22 0H4.35A4.39 4.39 0 000 4.35a4.43 4.43 0 004.35 4.39z"
      fill={color}
    />
  </Svg>
);

export default Minus;
