import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '#types';

const Plus = ({ color = '#000000', height = 24, width = 24 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 80.57 82.23">
    <Path
      fill={color}
      d="M40.28,82.23A4.35,4.35,0,0,0,44.68,78V45.51H76.22a4.44,4.44,0,0,0,4.35-4.4,4.39,4.39,0,0,0-4.35-4.34H44.68V4.25A4.34,4.34,0,0,0,40.28,0a4.3,4.3,0,0,0-4.34,4.25V36.77H4.35A4.38,4.38,0,0,0,0,41.11a4.43,4.43,0,0,0,4.35,4.4H35.94V78A4.3,4.3,0,0,0,40.28,82.23Z"
    />
  </Svg>
);

export default Plus;
