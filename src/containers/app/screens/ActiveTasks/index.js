import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, SectionList } from 'react-native';

import moment from 'moment';
import Layout from '../../../../components/shared/Layout';
import EmptyCard from '../../../../components/shared/EmptyCard';
import TaskCard from '../../../../components/shared/TaskCard';
import CongratsModal from '../../../../components/shared/CongratsModal';
import {
  addTask, updateTask, deleteTask, updateProfile,
} from '../../redux/actions';


import { styles } from './styles';


const ActiveTasks = (props) => {
  const {
    isLoading, profile, todayTasks, weekTasks, pastTasks,
  } = props;
  const [modalVisible, toggleModal] = useState(false);

  const handleTaskComplete = () => {
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

  const handleModalClose = () => {
    toggleModal(false);
  };

  const renderItem = ({ item }) => (
    <TaskCard
      showViewGoalOption
      task={item}
      onComplete={handleTaskComplete}
      onUncomplete={handleTaskUncomplete}
      onUpdate={props.updateTask}
      onDelete={props.deleteTask}
      onViewGoal={() => props.navigation.push('GoalDetails', { goalId: item.goal })}
    />
  );

  const renderNoContent = ({ section }) => {
    if (section?.data?.length === 0) {
      // eslint-disable-next-line
      return <Text style={styles.emptyText}>No tasks found. 👀</Text>;
    }
    return null;
  };

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  );

  const data = [
    {
      title: "Today's tasks",
      data: todayTasks,
    },
    {
      title: "This week's tasks",
      data: weekTasks,
    },
    {
      title: 'Past Incomplete tasks',
      data: pastTasks,
    },
  ];

  return (
    <Layout style={styles.screen}>
      <SectionList
        sections={data}
        refreshing={isLoading}
        style={styles.listContainer}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        renderSectionFooter={renderNoContent}
        ListFooterComponent={<View style={styles.footer} />}
        ListEmptyComponent={!isLoading && <EmptyCard />}
      />

      <CongratsModal
        key="active-tasks"
        type="task"
        visible={modalVisible}
        onClose={handleModalClose}
      />
    </Layout>
  );
};

const mapStateToProps = (state) => {
  const { allTasks } = state.App;
  const todayTasks = [];
  const weekTasks = [];
  const pastTasks = [];
  allTasks.forEach((item) => {
    if (moment(item.set_for_date).isSame(new Date(), 'day') && item.set_for_type === 'day') {
      todayTasks.push(item);
    } else if (moment(item.set_for_date).isSame(new Date(), 'week') && item.set_for_type === 'week') {
      weekTasks.push(item);
    } else if (
      ((moment(item.set_for_date).isBefore(new Date(), 'week') && item.set_for_type === 'week')
      || (moment(item.set_for_date).isBefore(new Date(), 'day') && item.set_for_type === 'day'))
      && !item.completed) {
      pastTasks.push(item);
    }
  });

  return ({
    todayTasks: todayTasks.sort((a, b) => (
      (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
    )),
    weekTasks: weekTasks.sort((a, b) => ((a.completed === b.completed) ? 0 : a.completed ? 1 : -1)),
    pastTasks: pastTasks.sort((a, b) => ((a.completed === b.completed) ? 0 : a.completed ? 1 : -1)),
    tasks: state.App.allTasks,
    isLoading: state.App.isLoading,
    profile: state.App.profile,
  });
};

const mapDispatchToProps = {
  addTask,
  updateTask,
  deleteTask,
  updateProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActiveTasks);
