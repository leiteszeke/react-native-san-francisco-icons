export const capitalize = (name: string) =>
  `${name.substr(0, 1).toUpperCase()}${name.substr(1)}`;

export const camelCasing = (name: string) =>
  name
    .split('-')
    .map((string) => capitalize(string))
    .join('');
