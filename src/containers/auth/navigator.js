import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from './screens/SignIn';
import RecoverPasswordScreen from './screens/PasswordRecover';
import SignUpScreen from './screens/SignUp';
import ConfirmationRequiredScreen from './screens/ConfirmationRequired';
import AgreementScreen from './screens/Agreement';

const AuthNavigator = createStackNavigator(
  {
    SignIn: { screen: SignInScreen },
    ForgotPassword: { screen: RecoverPasswordScreen },
    SignUp: { screen: SignUpScreen },
    ConfirmationRequired: { screen: ConfirmationRequiredScreen },
    Agreement: { screen: AgreementScreen },
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {
      headerStyle: {
        // height: getStatusBarHeight()+1,
        height: 50,
        backgroundColor: '#33638e',
      },
      headerLeft: () => null,
      headerRight: () => null,
      headerTitle: () => null,
    },
  },
);

export default AuthNavigator;
