import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import CategoryTag from '../CategoryTag';

import styles from './styles';


function GoalCard({
  title, category, onPress, tasks,
}) {
  const completedTasks = tasks.filter((task) => task.isCompleted);
  const completedPercentage = (completedTasks.length / tasks.length) * 100;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <View style={styles.categoryContainer}>
            <CategoryTag category={category} />
          </View>

          <Text style={styles.title}>{title}</Text>
        </View>
        <Image source={require('../../../assets/icons/next.png')} style={styles.icon} />
      </View>

      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${completedPercentage}%` }]} />
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(GoalCard);
