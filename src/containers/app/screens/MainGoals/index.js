import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';

import Layout from '../../../../components/shared/Layout';
import GoalCard from '../../../../components/shared/GoalCard';
import CategoryCard from '../../../../components/shared/CategoryCard';
import AddButton from '../../../../components/common/AddButton';
import Pricing from '../../../../components/shared/Pricing';
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
    navigation, goals, categories, isLoading, profile,
  } = props;
  const [isPricingVisible, toggleModal] = useState(false);
  const [filters, setFilters] = useState(['not_started', 'in_progress']);
  const [filteredGoals, setFilteredGoals] = useState([]);

  const fetchData = () => {
    props.getGoals();
    props.getCategories();
    props.getRewards();
    props.getProfile();
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const updatedGoals = [];

    goals.forEach((goal) => {
      const completedTasks = goal.tasks.filter((t) => t.completed);
      if (filters.includes('not_started') && !goal.completed && completedTasks.length === 0) {
        updatedGoals.push(goal);
      } else if (filters.includes('in_progress') && !goal.completed && completedTasks.length > 0) {
        updatedGoals.push(goal);
      } else if (filters.includes('completed') && goal.completed) {
        updatedGoals.push(goal);
      }
    });

    setFilteredGoals(updatedGoals);
  }, [filters, goals]);

  const handleAddGoal = () => {
    if (goals.length >= 3 && !profile.is_upgraded) {
      toggleModal(true);
    } else {
      props.navigation.push('AddGoal');
    }
  };

  const renderItem = ({ item }) => {
    const currentCategory = categories.find((c) => c.id === item.category);

    return (
      <GoalCard
        title={item.title}
        tasks={item.tasks}
        completed={item.completed}
        description={item.description}
        category={currentCategory}
        onPress={() => navigation.push('GoalDetails', { goalId: item.id })}
      />
    );
  };

  const renderCategoryItem = ({ item, index }) => {
    const categoryGoals = goals.filter((g) => g.category === item.id);

    return (
      <CategoryCard
        key={item.id}
        category={item}
        style={index === 0 ? { marginLeft: 12 } : {}}
        goalsNumber={categoryGoals?.length}
        onPress={() => navigation.push('Goals', { category: item, goals: categoryGoals })}
      />
    );
  };

  return (
    <Layout isLoading={isLoading} style={styles.screen}>
      <View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            style={styles.categoryContainer}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => String(item.id)}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.title}>All goals</Text>
          <FilterSection
            options={filterOptions}
            selectedFilters={filters}
            onChange={setFilters}
          />
        </View>

        <FlatList
          data={filteredGoals}
          style={styles.container}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={<EmptyCard buttonTitle="Add Goal" onButtonPress={handleAddGoal} />}
          ListFooterComponent={<View style={styles.footer} />}
        />
      </View>

      <Pricing
        label="goals"
        isVisible={isPricingVisible}
        onClose={() => toggleModal(false)}
        onOptionPress={() => {}}
      />

      <AddButton onPress={handleAddGoal} bottomSpace={155} />
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
  profile: state.App.profile,
  goals: state.App.goals,
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
