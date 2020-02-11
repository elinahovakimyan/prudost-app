import React, { useState } from 'react';
import {
  TouchableOpacity, View, Image, Alert, TextInput, Text,
} from 'react-native';

import RadioButton from '../../common/RadioButton';

import styles from './styles';


function TaskCard({ task, onUpdate, onDelete }) {
  const [isEditing, toggleEdit] = useState(false);
  const [value, onChange] = useState(task.text);

  const handleDelete = () => {
    Alert.alert(
      'Delete the task?',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => onDelete(task.id) },
      ],
      { cancelable: false },
    );
  };

  const handleCompleteTogggle = () => {
    onUpdate({ completed: !task.completed, id: task.id });
  };

  const handleTextChange = () => {
    onUpdate({ text: value, id: task.id });
    toggleEdit(false);
  };

  return (
    <TouchableOpacity activeOpacity={1} style={styles.container} onPress={handleCompleteTogggle}>
      <View style={styles.content}>
        <RadioButton isChecked={task.completed} />
        {isEditing
          ? (
            <TextInput
              multiline
              autoFocus
              editable={isEditing}
              value={value}
              onChangeText={onChange}
              style={styles.text}
            />
          )
          : (
            <Text style={styles.text}>
              {task.text}
            </Text>
          )}

      </View>

      <View style={styles.iconContainer}>
        {isEditing
          ? (
            <TouchableOpacity onPress={handleTextChange}>
              <Image source={require('../../../assets/icons/done.png')} style={styles.icon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => toggleEdit(true)}>
              <Image source={require('../../../assets/icons/edit.png')} style={styles.icon} />
            </TouchableOpacity>
          )}
        <TouchableOpacity onPress={handleDelete}>
          <Image source={require('../../../assets/icons/delete.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(TaskCard);
