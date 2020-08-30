import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '#types';

const CreditCard = ({
  color = '#000000',
  height = 24,
  width = 24,
}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 107.23 82.13">
    <Path
      fill={color}
      d="M15.33,82.13H91.89q15.31,0,15.34-15.09V15.14C107.23,5.08,102.1,0,91.89,0H15.33C5.08,0,0,5.08,0,15.14V67C0,77.1,5.08,82.13,15.33,82.13ZM7.86,15.58c0-5.08,2.69-7.72,7.57-7.72H91.8c4.78,0,7.56,2.64,7.56,7.72v4.1H7.86Zm7.57,58.69c-4.88,0-7.57-2.59-7.57-7.67V30.76h91.5V66.6c0,5.08-2.78,7.67-7.56,7.67Zm5.66-14.46h12a4.48,4.48,0,0,0,4.78-4.68v-9a4.5,4.5,0,0,0-4.78-4.68h-12a4.5,4.5,0,0,0-4.78,4.68v9A4.48,4.48,0,0,0,21.09,59.81Z"
    />
  </Svg>
);

export default CreditCard;
