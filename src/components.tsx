import React from 'react';
import { SFIconProps, TouchableSFIconProps } from '#types';
import * as Icons from './icons';
import { TouchableOpacity } from 'react-native';
import { camelCasing } from './utils';

export const Icon = ({ color, name, size = 24 }: SFIconProps) => {
  const iconName = camelCasing(name);
  const SFIcon = Icons[iconName];

  return <SFIcon color={color} height={size} width={size} />;
};

export const TouchableIcon = ({
  activeOpacity,
  onPress,
  ...props
}: TouchableSFIconProps) => (
  <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
    <Icon {...props} />
  </TouchableOpacity>
);
