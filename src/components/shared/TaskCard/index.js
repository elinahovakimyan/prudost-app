import React, { useState } from 'react';
import {
  TouchableOpacity, View, Image, Alert, TextInput, Text, Platform,
} from 'react-native';
import ActionSheet from 'react-native-action-sheet';

import RadioButton from '../../common/RadioButton';

import styles from './styles';


function TaskCard({
  task, onUpdate, onDelete, onComplete, onUncomplete, showViewGoalOption, onViewGoal,
}) {
  const BUTTONS = showViewGoalOption
    ? [
      "Add to Today's tasks",
      "Add to This Week's tasks",
      'View Goal',
      'Edit',
      'Delete',
    ] : [
      "Add to Today's tasks",
      "Add to This Week's tasks",
      'Edit',
      'Delete',
    ];

  const BUTTONSiOS = [...BUTTONS, 'Cancel'];
  const BUTTONSandroid = BUTTONS;
  const VIEW_INDEX = showViewGoalOption ? 2 : null;
  const EDIT_INDEX = showViewGoalOption ? 3 : 2;
  const DESTRUCTIVE_INDEX = showViewGoalOption ? 4 : 3;
  const CANCEL_INDEX = BUTTONSiOS.length - 1;

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

  const handleSetTodayTask = () => {
    onUpdate({ set_for_date: new Date(), set_for_type: 'day', id: task.id });
  };

  const handleSetWeekTask = () => {
    onUpdate({ set_for_date: new Date(), set_for_type: 'week', id: task.id });
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
        handleSetTodayTask();
      } else if (buttonIndex === 1) {
        // set as week's task
        handleSetWeekTask();
      } else if (buttonIndex === VIEW_INDEX && onViewGoal) {
        // view goal
        onViewGoal();
      } else if (buttonIndex === EDIT_INDEX) {
        // edit
        toggleEdit(true);
      } else if (buttonIndex === DESTRUCTIVE_INDEX) {
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
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={handleCompleteTogggle}>
          <RadioButton isChecked={task.completed} />
        </TouchableOpacity>

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
    </View>
  );
}

export default React.memo(TaskCard);
