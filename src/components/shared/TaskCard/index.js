import React, { useState } from 'react';
import {
  TouchableOpacity, View, Image, Alert, TextInput, Text,
} from 'react-native';

import RadioButton from '../../common/RadioButton';

import styles from './styles';


function TaskCard({ title, isCompleted, onPress }) {
  const [isEditing, toggleEdit] = useState(false);

  const handleDelete = () => {
    Alert.alert(
      'Delete the task?',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <RadioButton isChecked={isCompleted} />
        {isEditing
          ? (
            <TextInput
              multiline
              autoFocus
              editable={isEditing}
              value={title}
              style={styles.text}
            />
          )
          : (
            <Text style={styles.text}>
              {title}
            </Text>
          )}

      </View>

      <View style={styles.iconContainer}>
        {isEditing
          ? (
            <TouchableOpacity onPress={() => toggleEdit(false)}>
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
