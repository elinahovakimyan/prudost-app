import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';


function CategoryTag({ category, goalsNumber, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: category.color }]}
    >
      <Text style={styles.title}>{`${category.title} Goals`}</Text>
      <Text style={styles.goalsIndicator}>{goalsNumber > 1 ? `${goalsNumber} goals` : `${goalsNumber} goal`}</Text>
    </TouchableOpacity>
  );
}

export default React.memo(CategoryTag);
