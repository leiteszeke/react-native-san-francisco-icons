export type IconProps = {
  color?: string;
  height?: number;
  width?: number;
};

export type CustomizableIconProps = Pick<IconProps, 'height' | 'width'> & {
  fillColor?: string;
  strokeColor?: string;
};
