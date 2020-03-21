import React from 'react';
import { Image, View, Text } from 'react-native';
import { connect } from 'react-redux';

import Layout from '../../../../components/shared/Layout';
import StorageUtils from '../../../../utils/storage';
import { addTokenToHttp, getRandomInt, colors } from '../../../../utils';
import { setUser } from '../../redux/actions';

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

  render() {
    const quoteNumber = getRandomInt(quotes.length - 1);
    const currentQuote = quotes[quoteNumber];

    return (
      <Layout>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../../../../assets/images/logo.png')} />


          {currentQuote ? (
            <>
              <Text style={styles.quoteText}>{currentQuote.quote}</Text>
              <Text style={styles.quoteAuthor}>{`~ ${currentQuote.author}`}</Text>
            </>
          ) : null}
        </View>
      </Layout>
    );
  }
}


const mapDispatchToProps = {
  setUser,
};

export default connect(
  null,
  mapDispatchToProps,
)(Splash);
