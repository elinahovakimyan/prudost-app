import React, { useState } from 'react';
import {
  TouchableOpacity, View, Image, Text, TextInput,
} from 'react-native';

import styles from './styles';


function AddTask({ onSubmit, hasHorizaontalPadding }) {
  const [isAdding, toggleAdd] = useState(false);
  const [value, onChange] = useState('');

  return (
    <>
      {isAdding
        ? (
          <View style={[styles.inputContainer, hasHorizaontalPadding ? styles.padding : {}]}>
            <TextInput
              multiline
              value={value}
              onChangeText={onChange}
              onBlur={() => toggleAdd(false)}
              placeholderTextColor="#515151"
              style={styles.input}
            />

            <TouchableOpacity onPress={() => {
              // eslint-disable-next-line
              onSubmit && onSubmit();
              toggleAdd(false);
            }}
            >
              <Image source={require('../../../assets/icons/done.png')} style={styles.doneIcon} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={[styles.addTaskContainer, hasHorizaontalPadding ? styles.padding : {}]}
            onPress={() => toggleAdd(true)}
          >
            <Image source={require('../../../assets/icons/plus_grey.png')} style={styles.addTaskIcon} />
            <Text style={styles.addTaskTitle}>Add a new task</Text>
          </TouchableOpacity>
        )}

    </>
  );
}

export default React.memo(AddTask);
