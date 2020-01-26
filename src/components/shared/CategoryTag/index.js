import React from 'react';
import { Text } from 'react-native';

import { categories } from '../../../containers/app/data';

import styles from './styles';

const getColorByCategory = (category) => {
  const current = categories.find((c) => c.title.toLowerCase() === category.toLowerCase());

  return current.color;
};

function CategoryTag({ category }) {
  const color = getColorByCategory(category);

  return (
    <Text style={[styles.category, { borderColor: color, color }]}>
      {category || 'Unknown'}
    </Text>
  );
}

export default React.memo(CategoryTag);
