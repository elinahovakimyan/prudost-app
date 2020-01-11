import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import RadioButton from '../../common/RadioButton';

import styles from './styles';


function TaskCard({ title, isCompleted, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <RadioButton isChecked={isCompleted} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default React.memo(TaskCard);
