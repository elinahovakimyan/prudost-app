import React from 'react';
import { connect } from 'react-redux';
import { FlatList, View, RefreshControl } from 'react-native';

import Layout from '../../../../components/shared/Layout';
import GoalCard from '../../../../components/shared/GoalCard';
import AddButton from '../../../../components/common/AddButton';
import EmptyCard from '../../../../components/shared/EmptyCard';
import { getGoals, getCategories } from '../../redux/actions';
import { colors } from '../../../../utils';

import { styles } from './styles';


class Goals extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { category } = navigation.state.params;

    return ({
      headerTitle: `${category.title} Goals`,
      headerTintColor: colors.white,
      headerTitleStyle: styles.headerTitle,
      headerStyle: {
        backgroundColor: category ? category.color : colors.blue,
      },
    });
  }

  fetchData = () => {
    this.props.getGoals();
  }

  goToAddGoal = () => {
    this.props.navigation.push('AddGoal');
  }

  renderItem = (item) => {
    const { navigation } = this.props;

    return (
      <GoalCard
        title={item.title}
        tasks={item.tasks}
        description={item.description}
        onPress={() => navigation.push('GoalDetails', { goalId: item.id })}
      />
    );
  }

  render() {
    const { navigation, isLoading } = this.props;
    const { goals } = navigation.state.params;

    return (
      <Layout style={styles.screen}>
        <FlatList
          data={goals}
          style={styles.container}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={!isLoading && <EmptyCard buttonTitle="Add Goal" onButtonPress={this.goToAddGoal} />}
          ListFooterComponent={<View style={styles.footer} />}
          ListHeaderComponent={<View style={styles.header} />}
          refreshControl={<RefreshControl onRefresh={this.fetchData} refreshing={isLoading} />}
        />

        <AddButton onPress={this.goToAddGoal} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.App.categories,
  goals: state.App.goals,
  user: state.Auth.user,
  isLoading: state.App.isLoading,
  goalsError: state.App.errors.Goals,
});

const mapDispatchToProps = {
  getGoals,
  getCategories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Goals);
