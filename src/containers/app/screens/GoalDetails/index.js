import React from 'react';
import { connect } from 'react-redux';
import {
  FlatList, View, Text, RefreshControl, Image, TouchableOpacity, Alert, ActivityIndicator,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import EmptyCard from '../../../../components/shared/EmptyCard';
import TaskCard from '../../../../components/shared/TaskCard';
import AddTask from '../../../../components/shared/AddTask';
import CategoryTag from '../../../../components/shared/CategoryTag';
import { colors } from '../../../../utils/styles';
import {
  addTask, updateTask, deleteTask, deleteGoal,
} from '../../redux/actions';

import { styles } from './styles';


class GoalDetails extends React.PureComponent {
  static navigationOptions = () => ({
    headerTitle: 'Goal Details',
    headerTintColor: colors.white,
    headerTitleStyle: styles.headerTitle,
    headerStyle: {
      backgroundColor: colors.blue,
    },
  });

  renderItem = (item) => (
    <TaskCard
      task={item}
      onUpdate={this.props.updateTask}
      onDelete={this.props.deleteTask}
    />
  )

  sendToEdit = () => {
    const { goal } = this.props;

    this.props.navigation.push('AddGoal', { goal });
  }

  handleDelete = () => {
    const { goal } = this.props;

    Alert.alert(
      'Delete the goal?',
      'Are you sure you want to delete this goal?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => this.props.deleteGoal(goal.id) },
      ],
      { cancelable: false },
    );
  }

  handleSubmit = (text) => {
    const { goal } = this.props;

    this.props.addTask({
      text,
      goal: goal.id,
    });
  }

  render() {
    const { goal, isLoading } = this.props;
    const category = goal ? goal.category : '';

    if (goal) {
      return (
        <Layout style={styles.screen}>
          <View style={styles.categoryContainer}>
            <CategoryTag category={category} />

            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={this.sendToEdit}>
                <Image source={require('../../../../assets/icons/edit.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleDelete}>
                <Image source={require('../../../../assets/icons/delete.png')} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.title}>{goal.title}</Text>
          <Text style={styles.description}>{goal.description}</Text>

          <Text style={styles.sectionTitle}>TASKS</Text>

          <AddTask hasHorizaontalPadding onSubmit={this.handleSubmit} />

          <FlatList
            data={goal.tasks || []}
            refreshing={isLoading}
            style={styles.container}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={!isLoading && <EmptyCard />}
            ListFooterComponent={<View style={styles.footer} />}
            refreshControl={<RefreshControl refreshing={isLoading} />}
          />
        </Layout>
      );
    }

    return <ActivityIndicator />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { goalId } = ownProps.navigation.state.params;

  return ({
    goal: state.App.goals.find((g) => g.id === goalId),
    isLoading: state.App.isLoading,
    goalsError: state.App.errors.Goals,
  });
};

const mapDispatchToProps = {
  addTask,
  updateTask,
  deleteTask,
  deleteGoal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoalDetails);
