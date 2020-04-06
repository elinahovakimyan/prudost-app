import React, { useState } from 'react';
import {
  TouchableOpacity, View, Image, Text, TextInput,
} from 'react-native';

import styles from './styles';


function AddTask({
  isAdding, onAdd, onDone, onSubmit, hasHorizaontalPadding,
}) {
  const [value, onChange] = useState('');

  if (isAdding) {
    return (
      <View style={[styles.inputContainer, hasHorizaontalPadding ? styles.padding : {}]}>
        <TextInput
          autoFocus
          multiline
          value={value}
          onChangeText={onChange}
          onBlur={onDone}
          placeholderTextColor="#515151"
          style={styles.input}
        />

        <TouchableOpacity onPress={() => {
          if (value) {
            // eslint-disable-next-line
            onSubmit && onSubmit(value);
            onChange('');
          }
          onDone();
        }}
        >
          <Image source={require('../../../assets/icons/done.png')} style={styles.doneIcon} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.addTaskContainer, hasHorizaontalPadding ? styles.padding : {}]}
      onPress={onAdd}
    >
      <Image source={require('../../../assets/icons/plus_grey.png')} style={styles.addTaskIcon} />
      <Text style={styles.addTaskTitle}>Add a new task</Text>
    </TouchableOpacity>
  );
}

AddTask.defaultProps = {
  hasHorizaontalPadding: true,
};

export default React.memo(AddTask);
