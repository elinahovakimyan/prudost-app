import React from 'react';
import { Image, View } from 'react-native';

import Button from '../../common/Button';

import { styles } from './styles';


function EmptyCard({ buttonTitle, onButtonPress }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../assets/images/empty.png')} />

      {buttonTitle && onButtonPress
        ? <Button block={false} onPress={onButtonPress}>{buttonTitle}</Button>
        : null}
    </View>
  );
}

export default EmptyCard;
