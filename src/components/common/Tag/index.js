import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

function Tag({ title, color, style }) {
  return (
    <Text style={[styles.tag, { borderColor: color, color }, style]}>
      {title || 'Unknown'}
    </Text>
  );
}

export default React.memo(Tag);
