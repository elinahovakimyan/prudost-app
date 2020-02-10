import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Quiz from './screens/Quiz';

/* Goals */
import Goals from './screens/Goals';
import MainGoals from './screens/MainGoals';
import GoalDetails from './screens/GoalDetails';
import AddGoal from './screens/AddGoal';

/* Habits */
// import Habits from './screens/Habits';
// import AddHabit from './screens/AddHabit';

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
      headerLayoutPreset: 'center',
    },
  },
);

// const HabitsStack = createStackNavigator(
//   {
//     Habits: { screen: Habits },
//     AddHabit: { screen: AddHabit },
//   },
//   {
//     defaultNavigationOptions: {
//       headerLayoutPreset: 'center',
//     },
//   },
// );

const RewardsStack = createStackNavigator(
  {
    Rewards: { screen: Rewards },
    AddReward: { screen: AddReward },
  },
  {
    defaultNavigationOptions: {
      headerLayoutPreset: 'center',
    },
  },
);

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: Profile },
  },
  {
    defaultNavigationOptions: {
      headerLayoutPreset: 'center',
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Goals: GoalsStack,
    // Habits: HabitsStack,
    Rewards: RewardsStack,
    Profile: ProfileStack,
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

const AppNavigator = createStackNavigator({
  Tabs: TabNavigator,
  Quiz: { screen: Quiz },
}, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default AppNavigator;
