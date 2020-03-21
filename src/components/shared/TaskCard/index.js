import React, { useState } from 'react';
import {
  TouchableOpacity, View, Image, Alert, TextInput, Text, Platform,
} from 'react-native';
import ActionSheet from 'react-native-action-sheet';

import RadioButton from '../../common/RadioButton';

import styles from './styles';

const BUTTONSiOS = [
  "Add to Today's tasks",
  "Add to This Week's tasks",
  'Edit',
  'Delete',
  'Cancel',
];

const BUTTONSandroid = [
  "Set as Today's task",
  "Set as Week's task",
  'Edit',
  'Delete',
];

const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;


function TaskCard({
  task, onUpdate, onDelete, onComplete, onUncomplete,
}) {
  const [isEditing, toggleEdit] = useState(false);
  const [value, onChange] = useState(task.text);

  const handleDelete = () => {
    Alert.alert(
      'Delete the task?',
      'Are you sure you want to delete this task?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => onDelete(task.id) },
      ],
      { cancelable: false },
    );
  };

  const handleShowOptions = () => {
    ActionSheet.showActionSheetWithOptions({
      options: (Platform.OS === 'ios') ? BUTTONSiOS : BUTTONSandroid,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
      tintColor: '#33638e',
    },
    (buttonIndex) => {
      if (buttonIndex === 0) {
        // set as today's task

      } else if (buttonIndex === 1) {
        // set as week's task

      } else if (buttonIndex === 2) {
        // edit
        toggleEdit(true);
      } else if (buttonIndex === 3) {
        // delete
        handleDelete();
      }
    });
  };

  const handleCompleteTogggle = () => {
    if (task.completed) {
      onUncomplete();
    } else {
      onComplete();
    }

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

      {isEditing
        ? (
          <TouchableOpacity onPress={handleTextChange}>
            <Image source={require('../../../assets/icons/done.png')} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleShowOptions}>
            <Image source={require('../../../assets/icons/more.png')} style={styles.icon} />
          </TouchableOpacity>
        )}
    </TouchableOpacity>
  );
}

export default React.memo(TaskCard);
