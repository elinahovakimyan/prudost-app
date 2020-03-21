import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  FlatList, View, Text, Image, TouchableOpacity, Alert, ActivityIndicator,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import EmptyCard from '../../../../components/shared/EmptyCard';
import TaskCard from '../../../../components/shared/TaskCard';
import AddTask from '../../../../components/shared/AddTask';
import CongratsModal from '../../../../components/shared/CongratsModal';
import Pricing from '../../../../components/shared/Pricing';
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
  const [modalVisible, toggleModal] = useState(false);
  const [modalType, changeModalType] = useState('task');
  const [isPricingVisible, togglePricingModal] = useState(false);
  const [isAdding, toggleAddTask] = useState(false);

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

  const handleAddTask = () => {
    if (goal.tasks.length >= 3 && !profile.is_upgraded) {
      togglePricingModal(true);
    } else {
      toggleAddTask(true);
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

    if (modalType === 'goal') {
      props.navigation.navigate('MainGoals');
    }
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
      text, goal: goal.id, created_at: new Date(), user: profile.id,
    });
  };

  if (goal) {
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

        <AddTask
          isAdding={isAdding}
          onAdd={handleAddTask}
          onDone={() => toggleAddTask(false)}
          onSubmit={handleSubmit}
        />

        <FlatList
          data={goal.tasks.sort((a, b) => (
            (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
          )) || []}
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

        <Pricing
          label="tasks"
          isVisible={isPricingVisible}
          onClose={() => togglePricingModal(false)}
          onOptionPress={() => { }}
        />
      </Layout>
    );
  }
  return <ActivityIndicator />;
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
