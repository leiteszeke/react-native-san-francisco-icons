import * as React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-san-francisco-icons';
import C, { apply } from 'consistencss';

const Math = () => (
  <View style={apply(C.p3, C.row, C.justifyAround)}>
    <Icon name="minus" size={32} />
    <Icon name="plus" size={32} />
  </View>
);

export default Math;
