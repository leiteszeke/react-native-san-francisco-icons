import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '#types';

const Check = ({
  color = '#000000',
  width = 24,
  height = 24,
}: IconProps) => (
    <Svg width={width} height={height} viewBox="0 0 84.13 83.45">
      <Path
        fill={color}
        d="M31.84 83.45a5.59 5.59 0 004.93-2.74L82.91 8.06a6.63 6.63 0 001.22-3.62A4.18 4.18 0 0079.69 0c-2 0-3 .63-4.2 2.49L31.64 72.36 8.89 42.58a4.76 4.76 0 00-4.2-2.39A4.43 4.43 0 000 44.78a5.92 5.92 0 001.42 3.56l25.34 32.28c1.46 1.9 2.98 2.83 5.08 2.83z"
      />
    </Svg>
  );

export default Check;
