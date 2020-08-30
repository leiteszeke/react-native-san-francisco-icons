import * as React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-san-francisco-icons';
import C, { apply } from 'consistencss';

const Time = () => (
  <View style={apply(C.p3, C.row, C.justifyAround)}>
    <Icon name="clock" size={32} />
  </View>
);

export default Time;
