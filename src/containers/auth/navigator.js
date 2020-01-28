import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from './screens/SignIn';
import ResetPasswordScreen from './screens/ResetPassword';
import SignUpScreen from './screens/SignUp';
import WelcomeScreen from './screens/Welcome';
import { colors } from '../../utils';

const AuthNavigator = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    SignIn: { screen: SignInScreen },
    ForgotPassword: { screen: ResetPasswordScreen },
    SignUp: { screen: SignUpScreen },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      cardStyle: { backgroundColor: colors.blue },
    },
  },
);

export default AuthNavigator;
