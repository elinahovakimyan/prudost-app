import React from 'react';
import { connect } from 'react-redux';
import {
  FlatList, View, Text, RefreshControl,
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
        </View>
        <Text style={styles.title}>{goal.title}</Text>
        <Text style={styles.description}>{goal.description}</Text>

        <Text style={styles.sectionTitle}>TASKS</Text>
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
