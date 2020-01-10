import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Goals from './screens/Goals';
import Menu from './screens/Menu';
import Comments from './screens/Comments';
import AddGoal from './screens/AddGoal';
import { getTabIcon } from '../../utils/navigation';


const GoalsStack = createStackNavigator(
  {
    Goals: { screen: Goals },
    Menu: { screen: Menu },
    Comments: { screen: Comments },
    AddGoal: { screen: AddGoal },
  },
  {
    initialRouteName: 'Goals',
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
      activeTintColor: '#ffd96d',
      inactiveTintColor: '#33638e',
      labelStyle: {
        fontSize: 14,
      },
      style: {
        height: 65,
      },
    },
  },
);

export default AppNavigator;
