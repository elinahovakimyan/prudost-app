import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

import styles from './styles';

function AddButton(props) {
  const { onPress, bottomSpace } = props;

  const finalBottomSpace = ifIphoneX({
    bottom: bottomSpace || 200,
  }, {
    bottom: bottomSpace - 50 || 160,
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.plusContainer, finalBottomSpace]}
    >
      <Image
        style={styles.plusIcon}
        source={require('../../../assets/icons/plus_white.png')}
      />
    </TouchableOpacity>
  );
}


export default React.memo(AddButton);
