import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '#types';

const Power = ({ color = '#000000', height = 24, width = 24 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 97.07 101.12">
    <Path
      d="M48.54 52.15a3.87 3.87 0 004-4.15V4.15a3.94 3.94 0 10-7.86 0V48a3.84 3.84 0 003.86 4.15zm0 49c26.51 0 48.53-22 48.53-48.48a48.28 48.28 0 00-16.7-36.38 4 4 0 10-5.22 6.15 40.19 40.19 0 11-53.23 0c4.64-4.05-1.22-9.76-5.22-6.15A48.28 48.28 0 000 52.64c0 26.51 22 48.48 48.54 48.48z"
      fill={color}
    />
  </Svg>
);

export default Power;
