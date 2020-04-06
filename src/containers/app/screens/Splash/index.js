import React from 'react';
import { Image, View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import { colors } from '../../../../utils';
import {
  getGoals, getCategories, getProfile, getRewards, getAllTasks,
} from '../../redux/actions';

import { styles } from './styles';


class Splash extends React.PureComponent {
  static navigationOptions = () => ({
    headerShown: false,
    cardStyle: { backgroundColor: colors.blue },
  });

  timer = null;

  async componentDidMount() {
    this.fetchData();

    this.timer = setTimeout(() => {
      this.props.navigation.navigate('App');
    }, 1500);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  fetchData = () => {
    this.props.getCategories();
    this.props.getGoals();
    this.props.getRewards();
    this.props.getAllTasks();
    this.props.getProfile();
  };

  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../../../../assets/images/logo.png')} />
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = {
  getGoals,
  getCategories,
  getRewards,
  getProfile,
  getAllTasks,
};

export default connect(
  null,
  mapDispatchToProps,
)(Splash);
