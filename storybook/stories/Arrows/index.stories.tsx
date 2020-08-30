import * as React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-san-francisco-icons';
import C, { apply } from 'consistencss';

const Arrows = () => (
  <View style={apply(C.p3, C.row, C.justifyAround)}>
    <Icon name="arrow-shape-left" size={32} />
    <Icon name="chevron-left" size={32} />
    <Icon name="chevron-right" size={32} />
  </View>
);

export default Arrows;
