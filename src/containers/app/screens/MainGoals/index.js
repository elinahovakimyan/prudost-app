import React from 'react';
import { connect } from 'react-redux';
import {
  FlatList, View, Text, ScrollView,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import GoalCard from '../../../../components/shared/GoalCard';
import CategoryCard from '../../../../components/shared/CategoryCard';
import AddButton from '../../../../components/common/AddButton';
import EmptyCard from '../../../../components/shared/EmptyCard';
import { colors } from '../../../../utils';
import { getGoals, getCategories, getProfile } from '../../redux/actions';

import { styles } from './styles';


class MainGoals extends React.PureComponent {
  static navigationOptions = () => ({
    headerTitle: 'All Goals',
    headerTintColor: colors.white,
    headerShown: false,
    headerTitleStyle: styles.headerTitle,
    headerStyle: {
      backgroundColor: colors.blue,
    },
  });

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.props.getGoals();
    this.props.getCategories();
    this.props.getProfile();
  }

  goToAddGoal = () => {
    this.props.navigation.push('AddGoal');
  }

  renderItem = (item) => {
    const { navigation, categories } = this.props;
    const currentCategory = categories.find((c) => c.id === item.category);

    return (
      <GoalCard
        title={item.title}
        tasks={item.tasks}
        description={item.description}
        category={currentCategory}
        onPress={() => navigation.push('GoalDetails', { goalId: item.id })}
      />
    );
  }

  render() {
    const {
      navigation, goals, categories, isLoading,
    } = this.props;

    return (
      <Layout isLoading={isLoading} style={styles.screen}>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryContainer}
          >
            {categories.map((category) => {
              const categoryGoals = goals.filter((g) => g.category === category.id);

              return (
                <CategoryCard
                  key={category.id}
                  category={category}
                  goalsNumber={categoryGoals?.length}
                  onPress={() => navigation.push('Goals', { category, goals: categoryGoals })}
                />
              );
            })}
          </ScrollView>

          <Text style={styles.title}>All goals</Text>

          <FlatList
            data={goals}
            style={styles.container}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={!isLoading
              && <EmptyCard buttonTitle="Add Goal" onButtonPress={this.goToAddGoal} />
            }
            ListFooterComponent={<View style={styles.footer} />}
            // refreshControl={<RefreshControl onRefresh={this.fetchData} refreshing={isLoading} />}
          />
        </View>

        <AddButton onPress={this.goToAddGoal} bottomSpace={155} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  goals: state.App.goals,
  categories: state.App.categories,
  isLoading: state.App.isLoading,
  goalsError: state.App.errors.Goals,
});

const mapDispatchToProps = {
  getGoals,
  getCategories,
  getProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainGoals);
