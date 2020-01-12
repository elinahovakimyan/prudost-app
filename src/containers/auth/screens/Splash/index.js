import React from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import Layout from '../../../../components/shared/Layout';
import StorageUtils from '../../helpers/storage';
import { addTokenToHttp } from '../../../../utils/http';
import { setUser } from '../../redux/actions';

import { styles } from './styles';


class Splash extends React.PureComponent {
  static navigationOptions = () => ({
    headerStyle: {
      height: 50,
      backgroundColor: '#33638e',
    },
    headerTitle: () => null,
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
            }, 800);
          });
      } else {
        this.timer = setTimeout(() => {
          this.props.navigation.navigate('Auth');
        }, 800);
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <Layout>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../../../../assets/images/logo.png')} />
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
