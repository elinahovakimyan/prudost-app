import React from 'react';
import { View } from 'react-native';

import styles from './styles';

function RadioButton({ isChecked, color }) {
  return (
    <View style={[styles.radioButton, color ? { borderColor: color } : {}]}>
      {isChecked
        ? <View style={[styles.innerCircle, color ? { backgroundColor: color } : {}]} />
        : null}
    </View>
  );
}

export default React.memo(RadioButton);
