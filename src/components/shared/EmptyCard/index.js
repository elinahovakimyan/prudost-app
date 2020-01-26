import React from 'react';
import { Image, View } from 'react-native';

import Button from '../../common/Button';

import { styles } from './styles';


function EmptyCard({ buttonTitle, onButtonPress }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../assets/images/empty.png')} />

      <Button block={false} onPress={onButtonPress}>{buttonTitle}</Button>
    </View>
  );
}

export default EmptyCard;
