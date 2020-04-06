import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import styles from './styles';

function AddButton(props) {
  const { onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.plusContainer]}
    >
      <Image
        style={styles.plusIcon}
        source={require('../../../assets/icons/plus_white.png')}
      />
    </TouchableOpacity>
  );
}


export default React.memo(AddButton);
