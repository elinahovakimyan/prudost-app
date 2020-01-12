import React from 'react';
import { connect } from 'react-redux';
import {
  FlatList, View, Text, RefreshControl, Image, TouchableOpacity, Alert,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import TaskCard from '../../../../components/shared/TaskCard';
import { getGoals } from '../../redux/actions';

import { styles } from './styles';


class GoalDetails extends React.PureComponent {
  static navigationOptions = () => ({
    headerTitle: 'Goal Details',
    headerTintColor: '#fff',
    headerTitleStyle: styles.headerTitle,
    headerStyle: {
      backgroundColor: '#33638e',
    },
  });

  componentDidMount() {
    this.props.getGoals();
  }

  renderItem = (item) => (
    <TaskCard
      title={item.title}
      isCompleted={item.isCompleted}
      onPress={() => {}}
    />
  )

  handleDelete = () => {
    Alert.alert(
      'Delete the goal?',
      'Are you sure you want to delete this goal?',
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
  }

  render() {
    const { navigation, isLoading } = this.props;
    const { goal } = navigation.state.params;
    const { category } = goal;

    return (
      <Layout style={styles.screen}>
        <View style={styles.categoryContainer}>
          <Text style={[styles.category, { borderColor: category.color, color: category.color }]}>
            {category.title || 'Unknown'}
          </Text>

          <View style={styles.iconContainer}>
            <TouchableOpacity>
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
        <TouchableOpacity style={styles.addTaskContainer}>
          <Image source={require('../../../../assets/icons/plus_grey.png')} style={styles.addTaskIcon} />
          <Text style={styles.addTaskTitle}>Add a new task</Text>
        </TouchableOpacity>

        <FlatList
          data={goal.tasks || []}
          refreshing={isLoading}
          style={styles.container}
          renderItem={({ item }) => this.renderItem(item)}
          // TODO: Add id-s for tasks
          keyExtractor={(item) => String(item.title)}
          ListEmptyComponent={!isLoading && <Text style={styles.emptyText}>No tasks found.</Text>}
          ListFooterComponent={<View style={styles.footer} />}
          refreshControl={<RefreshControl refreshing={isLoading} />}
        />

      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  goals: state.App.goals,
  isLoading: state.App.isLoading,
  user: state.Auth.user,
  goalsError: state.App.errors.Goals,
});

const mapDispatchToProps = {
  getGoals,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoalDetails);
