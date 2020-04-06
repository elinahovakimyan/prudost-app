import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

import AuthNavigator from '../containers/auth/navigator';
import AppNavigator from '../containers/app/navigator';
import SplashScreen from '../containers/auth/screens/Splash';
import ProfileSplashScreen from '../containers/app/screens/Splash';


const SwitchNavigator = createSwitchNavigator({
  Splash: { screen: SplashScreen },
  Auth: AuthNavigator,
  App: AppNavigator,
  ProfileSplash: { screen: ProfileSplashScreen },
});

const MainNavigator = createAppContainer(SwitchNavigator);

export default MainNavigator;
