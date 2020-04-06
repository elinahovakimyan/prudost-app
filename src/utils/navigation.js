import React from 'react';
import { Image, View } from 'react-native';
import { colors } from './styles';


// This function returns the icon for the tab bar based on routename
export const getTabIcon = (navigation, focused) => {
  const { routeName } = navigation.state;
  const iconStyles = { width: 25, height: 25 };
  const iconContainer = {
    width: 45, height: 45, backgroundColor: colors.blue, borderRadius: 8, alignItems: 'center', justifyContent: 'center',
  };
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

  if (focused) {
    return (
      <View style={iconContainer}>
        <Image resizeMode="contain" style={iconStyles} source={tabIconSrc} />
      </View>
    );
  }

  return <Image resizeMode="contain" style={iconStyles} source={tabIconSrc} />;
};
