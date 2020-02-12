import React from 'react';
import { View } from 'react-native';

import styles from './styles';

function Checkbox({ isChecked, color }) {
  return (
    <View style={[styles.checkbox, color ? { borderColor: color } : {}]}>
      {isChecked
        ? <View style={styles.innerSquare} />
        : null}
    </View>
  );
}

export default React.memo(Checkbox);
