import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '#types';

const Clock = ({ color = '#000000', height = 24, width = 24 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 99.61 99.61">
    <Path
      fill={color}
      d="M49.8,99.61A50.15,50.15,0,0,0,99.61,49.8C99.61,22.61,77,0,49.76,0S0,22.61,0,49.8A50.18,50.18,0,0,0,49.8,99.61Zm0-8.3A41.51,41.51,0,1,1,91.31,49.8,41.31,41.31,0,0,1,49.8,91.31ZM24.27,55.08H49.76a3.37,3.37,0,0,0,3.41-3.42V18.75a3.36,3.36,0,0,0-3.41-3.37,3.32,3.32,0,0,0-3.37,3.37V48.29H24.27a3.4,3.4,0,1,0,0,6.79Z"
    />
  </Svg>
);

export default Clock;
