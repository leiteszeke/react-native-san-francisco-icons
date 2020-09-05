import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '#types';

const Warning = ({
  color = '#000000',
  width = 24,
  height = 24,
}: IconProps) => (
    <Svg width={width} height={height} viewBox="0 0 100.54 92.53">
      <Path
        fill={color}
        d="M11.91 92.53h76.71c7.33 0 11.92-5.27 11.92-11.91A11.6 11.6 0 0099 74.76L60.55 6A11.8 11.8 0 0040 6L1.61 74.8A11.54 11.54 0 000 80.62c0 6.64 4.59 11.91 11.91 11.91zm38.38-33.45c-2.58 0-4-1.46-4.1-4.1l-.68-24.12a4.44 4.44 0 014.73-4.59A4.51 4.51 0 0155 30.91L54.3 55c-.1 2.67-1.57 4.08-4.01 4.08zm0 18a5.28 5.28 0 115.47-5.27 5.42 5.42 0 01-5.47 5.29z"
      />
    </Svg>
  );

export default Warning;
