import React from 'react';
import { connect } from 'react-redux';
import {
  FlatList, View, Text, RefreshControl, ScrollView,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import GoalCard from '../../../../components/shared/GoalCard';
import CategoryCard from '../../../../components/shared/CategoryCard';
import AddButton from '../../../../components/common/AddButton';
import { colors } from '../../../../utils/styles';
import { getGoals } from '../../redux/actions';
import { categories } from '../../data';

import { styles } from './styles';
import EmptyCard from '../../../../components/shared/EmptyCard';


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
  }

  goToAddGoal = () => {
    this.props.navigation.push('AddGoal');
  }

  renderItem = (item) => {
    const { navigation } = this.props;

    return (
      <GoalCard
        title={item.title}
        tasks={[]}
        description={item.description}
        category={item.category}
        onPress={() => navigation.push('GoalDetails', { data: item })}
      />
    );
  }

  render() {
    const { navigation, goals, isLoading } = this.props;

    return (
      <Layout style={styles.screen}>
        <View>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categoryContainer}
            >
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onPress={() => navigation.push('Goals', { category })}
                />
              ))}
            </ScrollView>
          </View>

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
            refreshControl={<RefreshControl onRefresh={this.fetchData} refreshing={isLoading} />}
          />
        </View>

        <AddButton onPress={this.goToAddGoal} bottomSpace={155} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  goals: state.App.goals,
  user: state.Auth.user,
  isLoading: state.App.isLoading,
  goalsError: state.App.errors.Goals,
});

const mapDispatchToProps = {
  getGoals,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainGoals);
