import React from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import Layout from './src/components/shared/Layout';
import SplashScreen from './src/containers/auth/screens/Splash';
import NavigatorProvider from './src/navigator/mainNavigator';
import * as NavigationService from './src/navigator/NavigationService';

const styles = { flex: { flex: 1 } };

class Navigator extends React.Component {
  async componentDidMount() {
    /**
     * Read above commments above adding async requests here
     */
    NavigationService.setNavigator(this.navigator);
  }

  render() {
    const { accessToken } = this.props;

    return (
      <>
        <StatusBar
          barStyle={accessToken ? 'dark-content' : 'light-content'}
        />

        <NavigatorProvider
          style={[styles.flex]}
          ref={(nav) => {
            this.navigator = nav;
          }}
        >
          <Layout style={[styles.flex]}>
            <SplashScreen />
          </Layout>
        </NavigatorProvider>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.Auth.accessToken,
});

export default connect(mapStateToProps)(Navigator);
