import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';


function Score({
  score, numberStyle, titleStyle, title,
}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, titleStyle]}>{title || 'Current score'}</Text>
      <View style={styles.scoreContainer}>
        <Text style={[styles.score, numberStyle]}>{score}</Text>
      </View>
    </View>
  );
}

export default React.memo(Score);
