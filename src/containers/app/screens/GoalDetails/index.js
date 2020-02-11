import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  FlatList, View, Text, Image, TouchableOpacity, Alert, ActivityIndicator,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import EmptyCard from '../../../../components/shared/EmptyCard';
import TaskCard from '../../../../components/shared/TaskCard';
import AddTask from '../../../../components/shared/AddTask';
import CategoryTag from '../../../../components/shared/CategoryTag';
import { colors } from '../../../../utils';
import {
  addTask, updateTask, deleteTask, deleteGoal, updateProfile,
} from '../../redux/actions';

import { styles } from './styles';
import CongratsModal from '../../../../components/shared/CongratsModal';


const GoalDetails = (props) => {
  const {
    goal, category, isLoading, profile,
  } = props;
  const [modalVisible, toggleModal] = useState(false);
  const [modalType, changeModalType] = useState('task');

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
    props.addTask({ text, goal: goal.id });
  };

  if (goal) {
    return (
      <Layout isLoading={!goal} style={styles.screen}>
        <View style={styles.categoryContainer}>
          <CategoryTag category={category} />

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
          toggleVisibility={toggleModal}
        />
      </Layout>
    );
  }

  return <ActivityIndicator />;
};

GoalDetails.navigationOptions = () => ({
  headerTitle: 'Goal Details',
  headerTintColor: colors.white,
  headerTitleStyle: styles.headerTitle,
  headerStyle: {
    backgroundColor: colors.blue,
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
  updateProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoalDetails);
