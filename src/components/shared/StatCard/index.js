import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';


function StatCard({ title, number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>
        {number}
      </Text>
      <Text style={styles.text}>
        {title}
      </Text>
    </View>
  );
}

export default React.memo(StatCard);
