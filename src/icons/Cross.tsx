import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '#types';

const Cross = ({
  color = '#000000',
  width = 24,
  height = 24,
}: IconProps) => (
    <Svg width={width} height={height} viewBox="0 0 77.43 77.42">
      <Path
        fill={color}
        d="M1.26 70a4.37 4.37 0 000 6.15 4.48 4.48 0 006.2 0L38.71 44.9 70 76.15A4.37 4.37 0 1076.17 70L44.92 38.7 76.17 7.45A4.37 4.37 0 0070 1.3L38.71 32.55 7.46 1.3a4.34 4.34 0 00-6.2 0 4.42 4.42 0 000 6.15L32.51 38.7z"
      />
    </Svg>
  );

export default Cross;
