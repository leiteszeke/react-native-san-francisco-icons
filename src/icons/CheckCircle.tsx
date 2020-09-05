import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '#types';

const CheckCircle = ({
  color = '#000000',
  width = 24,
  height = 24,
}: IconProps) => (
    <Svg width={width} height={height} viewBox="0 0 99.61 99.61">
      <Path
        fill={color}
        d="M49.8 99.61A50.15 50.15 0 0099.61 49.8C99.61 22.61 77 0 49.76 0S0 22.61 0 49.8a50.18 50.18 0 0049.8 49.81zm0-8.3A41.51 41.51 0 1191.31 49.8 41.31 41.31 0 0149.8 91.31zm-6.15-17.09a4.65 4.65 0 004-2.3L71.73 34a6.2 6.2 0 001.17-3.17 3.75 3.75 0 00-4-3.61 4.06 4.06 0 00-3.42 2.19l-22 35.31-11.35-14.67a4.34 4.34 0 00-3.61-2 3.88 3.88 0 00-3.86 4 4.92 4.92 0 001.17 3l13.62 16.87a5.16 5.16 0 004.2 2.3z"

      />
    </Svg>
  );

export default CheckCircle;
