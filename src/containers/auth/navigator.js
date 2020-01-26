import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from './screens/SignIn';
import ResetPasswordScreen from './screens/ResetPassword';
import SignUpScreen from './screens/SignUp';
import AgreementScreen from './screens/Agreement';
import { colors } from '../../utils/styles';

const AuthNavigator = createStackNavigator(
  {
    SignIn: { screen: SignInScreen },
    ForgotPassword: { screen: ResetPasswordScreen },
    SignUp: { screen: SignUpScreen },
    Agreement: { screen: AgreementScreen },
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {
      headerShown: false,
      cardStyle: { backgroundColor: colors.blue },
      headerLeft: () => null,
      headerRight: () => null,
      headerTitle: () => null,
    },
  },
);

export default AuthNavigator;
