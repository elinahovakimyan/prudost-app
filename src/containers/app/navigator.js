import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Quiz from './screens/Quiz';

/* Tasks */
import ActiveTasks from './screens/ActiveTasks';

/* Goals */
import Goals from './screens/Goals';
import MainGoals from './screens/MainGoals';
import GoalDetails from './screens/GoalDetails';
import AddGoal from './screens/AddGoal';

/* Rewards */
import Rewards from './screens/Rewards';
import AddReward from './screens/AddReward';

/* Profile */
import Profile from './screens/Profile';

import { getTabIcon, colors } from '../../utils';


const GoalsStack = createStackNavigator(
  {
    MainGoals: { screen: MainGoals },
    Goals: { screen: Goals },
    GoalDetails: { screen: GoalDetails },
    AddGoal: { screen: AddGoal },
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
    },
  },
);

const RewardsStack = createStackNavigator(
  {
    Rewards: { screen: Rewards },
    AddReward: { screen: AddReward },
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
    },
  },
);

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: Profile },
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Tasks: { screen: ActiveTasks },
    Goals: GoalsStack,
    Rewards: RewardsStack,
    Profile: ProfileStack,
  },
  {
    initialRouteName: 'Goals',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => getTabIcon(navigation, focused),
    }),
    tabBarOptions: {
      activeTintColor: colors.yellow,
      inactiveTintColor: colors.blue,
      showLabel: false,
      style: {
        height: 65,
        borderTopColor: '#ccc',
      },
    },
  },
);

const AppNavigator = createStackNavigator({
  Tabs: TabNavigator,
  Quiz: { screen: Quiz },
}, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default AppNavigator;
