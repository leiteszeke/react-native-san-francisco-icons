import * as React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-san-francisco-icons';
import C, { apply } from 'consistencss';

const Objects = () => (
  <View style={apply(C.p3, C.row, C.justifyAround)}>
    <Icon name="pencil" size={32} />
    <Icon name="trash" size={32} />
    <Icon name="clock" size={32} />
  </View>
);

export default Objects;
