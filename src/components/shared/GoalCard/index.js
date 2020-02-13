import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import Tag from '../../common/Tag';
import { colors } from '../../../utils';

import styles from './styles';


function GoalCard({
  title, category, onPress, tasks, completed,
}) {
  const completedTasks = tasks.filter((task) => task.completed);
  const completedPercentage = (completedTasks.length / tasks.length) * 100;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <View style={styles.tagsContainer}>
            {category && (
              <Tag title={category?.title} color={category?.color} style={styles.tag} />
            )}
            {completed && (
              <Tag title="Completed" color={colors.green} style={styles.tag} />
            )}
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
