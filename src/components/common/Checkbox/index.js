import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

function Checkbox({ isChecked, color }) {
  return (
    <View style={[styles.checkbox, color ? { borderColor: color } : {}]}>
      {isChecked
        ? <Image source={require('../../../assets/icons/checkIcon.png')} style={styles.innerIcon} />
        : null}
    </View>
  );
}

export default React.memo(Checkbox);
