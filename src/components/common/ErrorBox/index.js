import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

export default function ErrorBox({ errorText }) {
  if (errorText) {
    return (
      <Text style={styles.errorText}>
        {errorText}
      </Text>
    );
  }

  return null;
}
