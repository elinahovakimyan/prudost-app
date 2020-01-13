import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';


function Score({ score }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current score</Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{score}</Text>
      </View>
    </View>
  );
}

export default React.memo(Score);
