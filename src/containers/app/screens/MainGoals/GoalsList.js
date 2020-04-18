import React from 'react';
import { View } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

import GoalCard from '../../../../components/shared/GoalCard';
import EmptyCard from '../../../../components/shared/EmptyCard';

import { styles } from './styles';


const GoalsList = (props) => {
  const {
    navigation, goals, categories, updateGoalsList,
  } = props;

  const handleAddGoal = () => {
    navigation.push('AddGoal');
  };

  const renderItem = ({ item, drag, isActive }) => {
    const currentCategory = categories.find((c) => c.id === item.category);

    return (
      <GoalCard
        title={item.title}
        tasks={item.tasks}
        onLongPress={drag}
        isActive={isActive}
        deadline={item.deadline}
        completed={item.completed}
        description={item.description}
        category={currentCategory}
        onPress={() => navigation.push('GoalDetails', { goalId: item.id })}
      />
    );
  };

  return (
    <View onLayout={() => null} style={{ flex: 1 }}>
      <DraggableFlatList
        data={goals}
        style={styles.container}
        renderItem={renderItem}
        onDragEnd={({ data }) => {
          console.log('data :', data);
          updateGoalsList(data);
        }}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={<EmptyCard buttonTitle="Add Goal" onButtonPress={handleAddGoal} />}
        ListFooterComponent={<View style={styles.footer} />}
      />
    </View>
  );
};


export default GoalsList;
