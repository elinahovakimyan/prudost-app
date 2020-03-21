import React from 'react';
import { Image } from 'react-native';


// This function returns the icon for the tab bar based on routename
export const getTabIcon = (navigation, focused) => {
  const { routeName } = navigation.state;
  let tabIconSrc;

  if (routeName === 'Goals') {
    tabIconSrc = focused ? require('../assets/icons/goals_yellow.png') : require('../assets/icons/goals_blue.png');
  } else if (routeName === 'Rewards') {
    tabIconSrc = focused ? require('../assets/icons/rewards_yellow.png') : require('../assets/icons/rewards_blue.png');
  } else if (routeName === 'Tasks') {
    tabIconSrc = focused ? require('../assets/icons/habits_yellow.png') : require('../assets/icons/habits_blue.png');
  } else {
    tabIconSrc = focused ? require('../assets/icons/profile_yellow.png') : require('../assets/icons/profile_blue.png');
  }

  return <Image resizeMode="contain" style={{ width: 25, height: 30 }} source={tabIconSrc} />;
};
