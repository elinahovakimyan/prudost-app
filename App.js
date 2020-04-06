import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './src/redux/store';
import { setupHttpConfig } from './src/utils';
import Navigator from './Navigator';

class App extends React.PureComponent {
  componentDidMount() {
    /**
     * add any aditional app config here,
     * don't use blocking requests here like HTTP requests since they block UI feedback
     * create HTTP requests and other blocking requests using redux saga
     */
    setupHttpConfig();
  }

  renderApp = () => (
    <Navigator />
  );

  render = () => (
    <ReduxProvider store={store}>
      {this.renderApp()}
    </ReduxProvider>
  );
}

export default App;
