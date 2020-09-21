import * as React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-san-francisco-icons';
import C, { apply } from 'consistencss';

const Devices = () => (
  <View style={apply(C.p3, C.row, C.justifyAround)}>
    <Icon name="printer" size={32} />
    <Icon name="keyboard-chevron" size={32} />
  </View>
);

export default Devices;
