import React from 'react';
import {
  SafeAreaView, Image, View, Text,
} from 'react-native';
import { connect } from 'react-redux';

import StorageUtils from '../../../../utils/storage';
import { addTokenToHttp, getRandomInt, colors } from '../../../../utils';
import { setUser } from '../../redux/actions';
import {
  getGoals, getCategories, getProfile, getRewards, getAllTasks,
} from '../../../app/redux/actions';

import { styles } from './styles';
import { quotes } from './quotes';


class Splash extends React.PureComponent {
  static navigationOptions = () => ({
    headerShown: false,
    cardStyle: { backgroundColor: colors.blue },
  });

  timer = null;

  async componentDidMount() {
    if (this.props.navigation) {
      const token = await StorageUtils.getAccessToken();
      const user = await StorageUtils.getUser();

      if (token) {
        this.props.setUser(user, token);
        addTokenToHttp(token)
          .then(() => {
            this.fetchData();

            this.timer = setTimeout(() => {
              this.props.navigation.navigate('App');
            }, 2500);
          });
      } else {
        this.timer = setTimeout(() => {
          this.props.navigation.navigate('Auth');
        }, 2500);
      }
    }
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
    const quoteNumber = getRandomInt(quotes.length - 1);
    const currentQuote = quotes[quoteNumber];

    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../../../../assets/images/logo.png')} />

          {currentQuote ? (
            <>
              <Text style={styles.quoteText}>{currentQuote.quote}</Text>
              <Text style={styles.quoteAuthor}>{`~ ${currentQuote.author}`}</Text>
            </>
          ) : null}
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = {
  setUser,
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
