import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Goals from './screens/Goals';
import Menu from './screens/Menu';
import Comments from './screens/Comments';
import PublishStory from './screens/PublishStory';
import { getTabIcon } from '../../utils/navigation';


const GoalsStack = createStackNavigator(
  {
    Goals: { screen: Goals },
    Menu: { screen: Menu },
    Comments: { screen: Comments },
    PublishStory: { screen: PublishStory },
  },
  {
    initialRouteName: 'Goals',
    defaultNavigationOptions: {
      headerLayoutPreset: 'center',
    },
  },
);

const AppNavigator = createBottomTabNavigator(
  {
    Goals: GoalsStack,
    Habits: GoalsStack,
    Rewards: GoalsStack,
    Profile: GoalsStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => getTabIcon(navigation, focused),
    }),
    tabBarOptions: {
      activeTintColor: '#ffd96d',
      inactiveTintColor: '#33638e',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        height: 60,
      },
    },
  },
);

export default AppNavigator;
