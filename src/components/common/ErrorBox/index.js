import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default function ErrorBox({ errorText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>
        {errorText}
      </Text>
    </View>
  );
}
