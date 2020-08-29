export enum IconType {
  SIMPLE = 'simple',
  CUSTOM = 'custom',
}

export type IconProps = {
  type: IconType.SIMPLE;
  color?: string;
  height?: number;
  width?: number;
};

export type CustomizableIconProps = Pick<IconProps, 'height' | 'width'> & {
  type: IconType.CUSTOM;
  fillColor?: string;
  strokeColor?: string;
};

export type SFIconProps = Pick<IconProps, 'color'> & {
  name: string;
  size?: number;
};
