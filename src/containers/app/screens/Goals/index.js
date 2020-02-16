import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, RefreshControl } from 'react-native';

import Layout from '../../../../components/shared/Layout';
import GoalCard from '../../../../components/shared/GoalCard';
import FilterSection from '../../../../components/shared/FilterSection';
import AddButton from '../../../../components/common/AddButton';
import EmptyCard from '../../../../components/shared/EmptyCard';
import Pricing from '../../../../components/shared/Pricing';
import { getGoals, getCategories } from '../../redux/actions';
import { colors } from '../../../../utils';
import { filterOptions } from '../../data';

import { styles } from './styles';


const Goals = (props) => {
  const { navigation, isLoading, profile } = props;
  const { goals } = navigation.state.params;
  const [isPricingVisible, toggleModal] = useState(false);
  const [filters, setFilters] = useState(['not_started', 'in_progress']);
  const [filteredGoals, setFilteredGoals] = useState([]);

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

  const fetchData = () => {
    props.getGoals();
  };

  const handleAddGoal = () => {
    if (goals.length >= 3 && !profile.is_upgraded) {
      toggleModal(true);
    } else {
      props.navigation.push('AddGoal');
    }
  };

  const renderItem = (item) => (
    <GoalCard
      title={item.title}
      tasks={item.tasks}
      completed={item.completed}
      description={item.description}
      onPress={() => navigation.push('GoalDetails', { goalId: item.id })}
    />
  );

  return (
    <Layout style={styles.screen}>
      <View style={styles.row}>
        <FilterSection
          options={filterOptions}
          selectedFilters={filters}
          onChange={setFilters}
        />
      </View>

      <FlatList
        data={filteredGoals}
        style={styles.container}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={!isLoading && <EmptyCard buttonTitle="Add Goal" onButtonPress={handleAddGoal} />}
        ListFooterComponent={<View style={styles.footer} />}
        ListHeaderComponent={<View style={styles.header} />}
        refreshControl={<RefreshControl onRefresh={fetchData} refreshing={isLoading} />}
      />

      <AddButton onPress={handleAddGoal} />

      <Pricing
        label="goals"
        isVisible={isPricingVisible}
        onClose={() => toggleModal(false)}
        onOptionPress={() => { }}
      />
    </Layout>
  );
};

Goals.navigationOptions = ({ navigation }) => {
  const { category } = navigation.state.params;

  return ({
    headerTitle: `${category.title} Goals`,
    headerTintColor: colors.white,
    headerTitleStyle: styles.headerTitle,
    headerStyle: {
      backgroundColor: category ? category.color : colors.blue,
    },
  });
};

const mapStateToProps = (state) => ({
  categories: state.App.categories,
  goals: state.App.goals,
  profile: state.App.profile,
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
