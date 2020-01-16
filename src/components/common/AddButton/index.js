import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import styles from './styles';

function AddButton(props) {
  const { onPress, bottomSpace } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.plusContainer, { bottom: bottomSpace || 200 }]}
    >
      <Image
        style={styles.plusIcon}
        source={require('../../../assets/icons/plus_white.png')}
      />
    </TouchableOpacity>
  );
}


export default React.memo(AddButton);
