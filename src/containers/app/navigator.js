import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Goals from './screens/Goals';
import MainGoals from './screens/MainGoals';
import GoalDetails from './screens/GoalDetails';
import Menu from './screens/Menu';
import Comments from './screens/Comments';
import AddGoal from './screens/AddGoal';
import { getTabIcon } from '../../utils/navigation';


const GoalsStack = createStackNavigator(
  {
    MainGoals: { screen: MainGoals },
    Goals: { screen: Goals },
    GoalDetails: { screen: GoalDetails },
    Menu: { screen: Menu },
    Comments: { screen: Comments },
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
    Comments: { screen: Comments },
  },
  {
    initialRouteName: 'Comments',
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
      activeTintColor: '#FBC635',
      inactiveTintColor: '#33638e',
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
