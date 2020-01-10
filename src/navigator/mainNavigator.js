import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthNavigator from '../containers/auth/navigator';
import AppNavigator from '../containers/app/navigator';
import SplashScreen from '../containers/auth/screens/Splash';

const SplashNavigator = createStackNavigator(
  {
    Splash: { screen: SplashScreen },
  },
);

const SwitchNavigator = createSwitchNavigator({
  App: AppNavigator,
  Splash: SplashNavigator,
  Auth: AuthNavigator,
});

const MainNavigator = createAppContainer(SwitchNavigator);

export default MainNavigator;
