import React from 'react';
import { SFIconProps } from '#types';
import * as Icons from './icons';

const capitalize = (name: string) =>
  `${name.substr(0, 1).toUpperCase()}${name.substr(1)}`;

const camelCasing = (name: string) =>
  name
    .split('-')
    .map((string) => capitalize(string))
    .join('');

const Icon = ({ color, name, size = 24 }: SFIconProps) => {
  const iconName = camelCasing(name);
  const SFIcon = Icons[iconName];

  return <SFIcon color={color} height={size} width={size} />;
};

export default Icon;
