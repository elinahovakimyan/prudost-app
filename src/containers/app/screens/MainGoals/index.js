import React, { useEffect } from 'react';
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
import {
  getGoals, getCategories, getProfile, getRewards,
} from '../../redux/actions';
import FilterSection from '../../../../components/shared/FilterSection';
import { filterOptions } from '../../data';

import { styles } from './styles';


const MainGoals = (props) => {
  const {
    navigation, goals, categories, isLoading,
  } = props;

  const fetchData = () => {
    props.getGoals();
    props.getCategories();
    props.getRewards();
    props.getProfile();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const goToAddGoal = () => {
    props.navigation.push('AddGoal');
  };

  const renderItem = (item) => {
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
  };

  return (
    <Layout isLoading={isLoading} style={styles.screen}>
      <View>
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
        </View>

        <View style={styles.row}>
          <Text style={styles.title}>All goals</Text>
          <FilterSection options={filterOptions} />
        </View>

        <FlatList
          data={goals}
          style={styles.container}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={<EmptyCard buttonTitle="Add Goal" onButtonPress={goToAddGoal} />}
          ListFooterComponent={<View style={styles.footer} />}
        />
      </View>

      <AddButton onPress={goToAddGoal} bottomSpace={155} />
    </Layout>
  );
};

MainGoals.navigationOptions = () => ({
  headerTitle: 'All Goals',
  headerTintColor: colors.white,
  headerShown: false,
  headerTitleStyle: styles.headerTitle,
  headerStyle: {
    backgroundColor: colors.blue,
  },
});

const mapStateToProps = (state) => ({
  goals: state.App.goals.filter((g) => !g.completed),
  categories: state.App.categories,
  isLoading: state.App.isLoading,
  goalsError: state.App.errors.Goals,
});

const mapDispatchToProps = {
  getGoals,
  getCategories,
  getRewards,
  getProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainGoals);
