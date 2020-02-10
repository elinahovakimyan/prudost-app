import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

function CategoryTag({ category }) {
  return (
    <Text style={[styles.category, { borderColor: category.color, color: category.color }]}>
      {category.title || 'Unknown'}
    </Text>
  );
}

export default React.memo(CategoryTag);
