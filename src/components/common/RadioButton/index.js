import React from 'react';
import { View, Image } from 'react-native';

import { colors } from '../../../utils';

import styles from './styles';

function RadioButton({ isChecked }) {
  return (
    <View style={[
      styles.radioButton,
      isChecked ? { backgroundColor: colors.blue } : {},
    ]}
    >
      {isChecked
        ? <Image source={require('../../../assets/icons/tick.png')} style={styles.innerCircle} />
        : null}
    </View>
  );
}

export default React.memo(RadioButton);
