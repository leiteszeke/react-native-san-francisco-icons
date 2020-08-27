import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '#types';

const Pencil = ({ color = '#000000', height = 24, width = 24 }: IconProps) => (
  <Svg viewBox="0 0 77.78 77.3" height={height} width={width}>
    <Path
      fill={color}
      d="M70.89 15.43l4.93-4.84c2.49-2.49 2.59-5.17.39-7.42l-1.66-1.66c-2.19-2.2-4.88-1.95-7.37.49l-4.93 4.83zM13.32 72.85L66.6 19.63 58.05 11 4.73 64.3.09 75.14a1.59 1.59 0 002 2z"
    />
  </Svg>
);

export default Pencil;
