import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '#types';

const SquareGrid = ({
  color = '#000000',
  height = 24,
  width = 24,
}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 89.89 89.89">
    <Path
      d="M9.33 40.92h22.26c6.2 0 9.33-3.13 9.33-9.57V9.52c0-6.44-3.13-9.52-9.33-9.52H9.33C3.12 0 0 3.08 0 9.52v21.83c0 6.44 3.12 9.57 9.33 9.57zm49 0h22.24c6.2 0 9.32-3.13 9.32-9.57V9.52c0-6.44-3.12-9.52-9.32-9.52H58.35C52.1 0 49 3.08 49 9.52v21.83c0 6.44 3.1 9.57 9.35 9.57zM9.42 34c-1.71 0-2.54-.88-2.54-2.68V9.52c0-1.76.83-2.64 2.54-2.64h22A2.32 2.32 0 0134 9.52v21.83c0 1.8-.88 2.68-2.58 2.68zm49 0c-1.76 0-2.59-.88-2.59-2.68V9.52c0-1.76.83-2.64 2.59-2.64h22c1.71 0 2.54.88 2.54 2.64v21.83c0 1.8-.83 2.68-2.54 2.68zM9.33 89.89h22.26c6.2 0 9.33-3.07 9.33-9.52V58.5c0-6.4-3.13-9.53-9.33-9.53H9.33C3.12 49 0 52.1 0 58.5v21.87c0 6.45 3.12 9.52 9.33 9.52zm49 0h22.24c6.2 0 9.32-3.07 9.32-9.52V58.5c0-6.4-3.12-9.53-9.32-9.53H58.35C52.1 49 49 52.1 49 58.5v21.87c0 6.45 3.1 9.52 9.35 9.52zM9.42 83c-1.71 0-2.54-.88-2.54-2.64V58.54c0-1.8.83-2.68 2.54-2.68h22c1.7 0 2.58.88 2.58 2.68v21.83A2.32 2.32 0 0131.45 83zm49 0c-1.76 0-2.59-.88-2.59-2.64V58.54c0-1.8.83-2.68 2.59-2.68h22c1.71 0 2.54.88 2.54 2.68v21.83c0 1.76-.83 2.64-2.54 2.64z"
      fill={color}
    />
  </Svg>
);

export default SquareGrid;