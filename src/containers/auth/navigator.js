import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from './screens/SignIn';
import RecoverPasswordScreen from './screens/PasswordRecover';
import SignUpScreen from './screens/SignUp';
import ConfirmationRequiredScreen from './screens/ConfirmationRequired';
import AgreementScreen from './screens/Agreement';
import { colors } from '../../utils/styles';

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
        height: 50,
        backgroundColor: colors.blue,
      },
      headerLeft: () => null,
      headerRight: () => null,
      headerTitle: () => null,
    },
  },
);

export default AuthNavigator;
