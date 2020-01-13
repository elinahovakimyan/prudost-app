import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Goals from './screens/Goals';
import MainGoals from './screens/MainGoals';
import GoalDetails from './screens/GoalDetails';
import AddGoal from './screens/AddGoal';
import { getTabIcon } from '../../utils/navigation';
import { colors } from '../../utils/styles';


const GoalsStack = createStackNavigator(
  {
    MainGoals: { screen: MainGoals },
    Goals: { screen: Goals },
    GoalDetails: { screen: GoalDetails },
    AddGoal: { screen: AddGoal },
  },
  {
    initialRouteName: 'MainGoals',
    defaultNavigationOptions: {
      headerLayoutPreset: 'center',
    },
  },
);

const HabitsStack = createStackNavigator(
  {
    AddGoal: { screen: AddGoal },
  },
  {
    initialRouteName: 'AddGoal',
    defaultNavigationOptions: {
      headerLayoutPreset: 'center',
    },
  },
);

const AppNavigator = createBottomTabNavigator(
  {
    Goals: GoalsStack,
    Habits: HabitsStack,
    Rewards: HabitsStack,
    Profile: HabitsStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => getTabIcon(navigation, focused),
    }),
    tabBarOptions: {
      activeTintColor: colors.yellow,
      inactiveTintColor: colors.blue,
      labelStyle: {
        fontSize: 14,
      },
      style: {
        height: 65,
        borderTopColor: '#cccccc',
      },
    },
  },
);

export default AppNavigator;
