/* This is a React Native App Intro Slider */
import React from 'react';
import { StatusBar } from 'react-native';

import AppIntroSlider from '../../../../components/common/AppIntroSlider';

const slides = [
  {
    key: 's1',
    title: 'Move with purpose',
    text: 'Take control of your life and follow your mission.',
    backgroundImage: require('../../../../assets/images/domore.jpeg'),
  },
  {
    key: 's2',
    title: 'Achieve your goals',
    text: 'Set the right goals and achieve them with step by step process.',
    backgroundImage: require('../../../../assets/images/achieve_goals.jpeg'),
  },
  {
    key: 's3',
    title: 'Develop life habits',
    text: 'Habits define you. Start developing the right habits today.',
    backgroundImage: require('../../../../assets/images/life_habits.jpeg'),
  },
  {
    key: 's4',
    title: 'Reward yourself',
    text: 'Appreciate your work and life. Notice every single step you do towards your dream life.',
    backgroundImage: require('../../../../assets/images/reward_yourself.jpeg'),
  },
];

class WelcomeScreen extends React.PureComponent {
  static navigationOptions = {
    headerShown: false,
    header: null,
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
