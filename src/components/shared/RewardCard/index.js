import React, { useState } from 'react';
import {
  TouchableOpacity, View, Image, Alert, TextInput, Text,
} from 'react-native';

import Button from '../../common/Button';

import styles from './styles';


function RewardCard({
  title, isUnlocked, onPress, pointsRequired, pointsRemaining,
}) {
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
    <TouchableOpacity
      style={[styles.container, !isUnlocked ? styles.locked : {}]}
      onPress={onPress}
    >
      <View style={styles.content}>
        {isUnlocked
          ? (
            <Button
              block={false}
              buttonStyle={styles.useButton}
              textStyle={styles.useButtonText}
            >
              Use
            </Button>
          )
          : <Image style={styles.lock} source={require('../../../assets/icons/lock.png')} />
          }

        <View>
          {isEditing
            ? (
              <TextInput
                multiline
                autoFocus
                editable={isEditing}
                value={title}
                style={[styles.text, isUnlocked ? styles.unLockedText : {}]}
              />
            )
            : (
              <Text
                style={[styles.text, isUnlocked ? styles.unLockedText : {}]}
              >
                {title}
              </Text>
            )}

          <Text style={styles.points}>
            {isUnlocked ? `${pointsRequired} points` : `${pointsRemaining} points remaining`}
          </Text>
        </View>

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

export default React.memo(RewardCard);
