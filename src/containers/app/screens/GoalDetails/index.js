import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  FlatList, View, Text, Image, TouchableOpacity, Alert,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import EmptyCard from '../../../../components/shared/EmptyCard';
import TaskCard from '../../../../components/shared/TaskCard';
import AddTask from '../../../../components/shared/AddTask';
import CongratsModal from '../../../../components/shared/CongratsModal';
import Tag from '../../../../components/common/Tag';
import { colors, formatDate } from '../../../../utils';
import {
  addTask, updateTask, deleteTask, deleteGoal, updateProfile, updateGoal,
} from '../../redux/actions';

import { styles } from './styles';


const GoalDetails = (props) => {
  const {
    goal, category, isLoading, profile,
  } = props;
  const [modalVisible, toggleModal] = useState(true);
  const [modalType, changeModalType] = useState('task');

  const handleGoalComplete = () => {
    if (goal.completed) {
      props.updateGoal({ id: goal.id, completed: false });
      props.updateProfile({ id: profile.id, score: profile.score - 10 });
    } else {
      changeModalType('goal');
      toggleModal(true);
      props.updateGoal({ id: goal.id, completed: true });
      props.updateProfile({ id: profile.id, score: profile.score + 10 });
    }
  };

  const handleMarkComplete = () => {
    Alert.alert(
      `Mark the goal as ${goal.completed ? 'not' : ''} completed?`,
      '',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: handleGoalComplete },
      ],
    );
  };

  useEffect(() => {
    props.navigation.setParams({ onGoalComplete: handleMarkComplete });
  }, []);

  useEffect(() => {
    props.navigation.setParams({ goal });
  }, [goal]);

  const handleTaskComplete = () => {
    changeModalType('task');
    toggleModal(true);
    props.updateProfile({
      id: profile.id,
      score: profile.score + 2,
    });
  };

  const handleTaskUncomplete = () => {
    props.updateProfile({
      id: profile.id,
      score: profile.score - 2,
    });
  };

  const sendToEdit = () => {
    props.navigation.push('AddGoal', { goal });
  };

  const handleModalClose = () => {
    toggleModal(false);
    props.navigation.navigate('MainGoals');
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete the goal?',
      'Are you sure you want to delete this goal?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => props.deleteGoal(goal.id) },
      ],
      { cancelable: false },
    );
  };

  const renderItem = ({ item }) => (
    <TaskCard
      task={item}
      onComplete={handleTaskComplete}
      onUncomplete={handleTaskUncomplete}
      onUpdate={props.updateTask}
      onDelete={props.deleteTask}
    />
  );

  const handleSubmit = (text) => {
    props.addTask({
      text, goal: goal.id, createdAt: new Date(), user: profile.id,
    });
  };

  return (
    <Layout isLoading={!goal} style={styles.screen}>
      <View style={styles.categoryContainer}>
        <View style={styles.tagsRow}>
          {goal?.completed
           && <Tag title="Completed" color={colors.green} style={styles.tag} />}
          <Tag title={category?.title} color={category?.color} style={styles.tag} />
          <Tag title={formatDate(goal?.deadline)} color="#B53737" style={styles.tag} />
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={sendToEdit}>
            <Image source={require('../../../../assets/icons/edit.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete}>
            <Image source={require('../../../../assets/icons/delete.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.title}>{goal.title}</Text>
      <Text style={styles.description}>{goal.description}</Text>

      <Text style={styles.sectionTitle}>TASKS</Text>

      <AddTask hasHorizaontalPadding onSubmit={handleSubmit} />

      <FlatList
        data={goal.tasks || []}
        style={styles.container}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={!isLoading && <EmptyCard />}
        ListFooterComponent={<View style={styles.footer} />}
      />

      <CongratsModal
        type={modalType}
        visible={modalVisible}
        onClose={handleModalClose}
      />
    </Layout>
  );
};

GoalDetails.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Goal Details',
  headerTintColor: colors.white,
  headerTitleStyle: styles.headerTitle,
  headerStyle: {
    backgroundColor: colors.blue,
  },
  headerRight: () => {
    const onPress = navigation.state.params?.onGoalComplete;
    const goal = navigation.state.params?.goal;

    return (
      <Text onPress={() => onPress && onPress()} style={styles.headerText}>
        {`Mark as ${goal?.completed ? 'Undone' : 'Done'}`}
      </Text>
    );
  },
});

const mapStateToProps = (state, ownProps) => {
  const { goalId } = ownProps.navigation.state.params;
  const goal = state.App.goals.find((g) => g.id === goalId);
  const category = state.App.categories.find((c) => c.id === goal?.category);

  return ({
    goal,
    category,
    profile: state.App.profile,
    isLoading: state.App.isLoading,
    goalsError: state.App.errors.Goals,
  });
};

const mapDispatchToProps = {
  addTask,
  updateTask,
  deleteTask,
  deleteGoal,
  updateGoal,
  updateProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoalDetails);
