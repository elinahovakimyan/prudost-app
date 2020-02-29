/* This is a React Native App Intro Slider */
import React from 'react';
import { StatusBar } from 'react-native';

import AppIntroSlider from '../../../../components/common/AppIntroSlider';

const slides = [
  {
    key: 's1',
    title: 'Move with purpose',
    text: 'Take control of your life and follow your mission.',
    image: require('../../../../assets/images/goals_illustration.png'),
  },
  {
    key: 's2',
    title: 'Achieve your goals',
    text: 'Set the right goals and achieve them with step by step process.',
    image: require('../../../../assets/images/achieve__illustration.png'),
  },
  {
    key: 's3',
    title: 'Get there step-by-step',
    text: 'Habits define you. Start developing the right habits today.',
    image: require('../../../../assets/images/tasks_illustration.png'),
  },
  {
    key: 's4',
    title: 'Reward yourself',
    text: 'Appreciate your work and life. Notice every single step you do towards your dream life.',
    image: require('../../../../assets/images/reward_illustration.png'),
  },
];

class WelcomeScreen extends React.PureComponent {
  static navigationOptions = {
    headerShown: false,
  }

  render() {
    const { navigation } = this.props;

    return (
      <>
        <StatusBar barStyle="light-content" />
        <AppIntroSlider
          slides={slides}
          button1={{ text: 'Log In', onPress: () => navigation.push('SignIn') }}
          button2={{ text: 'Sign Up', onPress: () => navigation.push('SignUp') }}
        />
      </>
    );
  }
}

export default WelcomeScreen;
