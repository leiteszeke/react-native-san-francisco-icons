import * as React from 'react';
import Icon, { TouchableIcon } from 'react-native-san-francisco-icons';
import { View, Alert } from 'react-native';

const Editing = () => (
  <View style={{ padding: 12 }}>
    <Icon name="pencil" color="blue" size={50} />
    <TouchableIcon
      name="pencil"
      onPress={() => Alert.alert('Touchable', 'Touchable')}
    />
  </View>
);

export default Editing;
