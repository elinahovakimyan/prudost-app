import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';


function CategoryCard({ category, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: category.color }]}
    >
      <Text style={styles.title}>{`${category.title} Goals`}</Text>
      <Text style={styles.goalsIndicator}>6 goals</Text>
    </TouchableOpacity>
  );
}

export default React.memo(CategoryCard);
