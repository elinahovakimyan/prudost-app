import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import SplashScreen from './src/containers/auth/screens/Splash';
import { store } from './src/redux/store';
import { setupHttpConfig } from './src/utils';
import Navigator from './Navigator';

class App extends React.PureComponent {
  state = {
    isLoaded: false,
  };

  async componentDidMount() {
    /**
     * add any aditional app config here,
     * don't use blocking requests here like HTTP requests since they block UI feedback
     * create HTTP requests and other blocking requests using redux saga
     */
    await this.loadAssets();
    setupHttpConfig();
  }

  loadAssets = async () => {
    // add any loading assets here
    this.setState({ isLoaded: true });
  };

  renderLoading = () => (
    <SplashScreen />
  );

  renderApp = () => (
    <Navigator />
  );

  render = () => (
    <ReduxProvider store={store}>
      {this.state.isLoaded ? this.renderApp() : this.renderLoading()}
    </ReduxProvider>
  );
}

export default App;
