import React, { useState } from 'react';
import {
  TouchableOpacity, View, Image, Alert, TextInput, Text,
} from 'react-native';

import Button from '../../common/Button';

import styles from './styles';


function RewardCard({
  item, isUnlocked, onPress, pointsRemaining, onUpdate, onDelete, onUse,
}) {
  const [isEditing, toggleEdit] = useState(false);
  const [title, onChange] = useState(item.title);

  const handleDelete = () => {
    Alert.alert(
      'Delete the reward?',
      'Are you sure you want to delete this reward?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => onDelete(item.id) },
      ],
      { cancelable: false },
    );
  };

  const handleSave = () => {
    toggleEdit(false);
    onUpdate({ id: item.id, title });
  };

  const handleUse = () => {
    onUse(item);
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
              onPress={handleUse}
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
                value={title}
                editable={isEditing}
                onChangeText={onChange}
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
            {isUnlocked ? `${item.points} points` : `${pointsRemaining} points remaining`}
          </Text>
        </View>

      </View>

      <View style={styles.iconContainer}>
        {isEditing
          ? (
            <TouchableOpacity onPress={handleSave}>
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
