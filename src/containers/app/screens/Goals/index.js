import React from 'react';
import { connect } from 'react-redux';
import {
  Image, TouchableOpacity, FlatList, View, Text, RefreshControl,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import GoalCard from '../../../../components/shared/GoalCard';
import { getGoals } from '../../redux/actions';

import { styles } from './styles';


class Goals extends React.PureComponent {
  static navigationOptions = () => ({
    headerTitle: 'My Goals',
    headerTitleStyle: styles.headerTitle,
    headerLayoutPreset: 'center',
  });

  componentDidMount() {
    this.props.getGoals();
  }

  renderItem = (item) => (
    <GoalCard
      title={item.title}
      tasks={item.tasks}
      description={item.description}
      status={item.status}
    />
  )

  render() {
    const { navigation, goals, isLoading } = this.props;

    return (
      <Layout style={styles.screen}>
        <FlatList
          data={goals}
          refreshing={isLoading}
          style={styles.container}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={!isLoading && <Text style={styles.emptyText}>No goals found.</Text>}
          ListFooterComponent={<View style={styles.footer} />}
          ListHeaderComponent={<View style={styles.header} />}
          refreshControl={<RefreshControl refreshing={isLoading} />}
        />

        <TouchableOpacity
          onPress={() => navigation.push('AddGoal')}
          style={styles.feedbackContainer}
        >
          <Image
            style={styles.feedbackIcon}
            source={require('../../../../assets/icons/plus.png')}
          />
        </TouchableOpacity>
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
)(Goals);
