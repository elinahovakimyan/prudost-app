import React, { useState } from 'react';
import {
  Platform, ActivityIndicator, Modal, TouchableOpacity, Text,
} from 'react-native';
import { WebView } from 'react-native-webview';

import styles from './styles';


function WebviewComponent({ uri }) {
  const [visible, toggleVisibility] = useState(true);
  const _onLoad = () => 'Nothing to execute';

  const _Indicator = () => (
    <ActivityIndicator
      color="#3b5998"
      size="large"
      style={styles.indicator}
    />
  );

  const _injectJS = () => `
        document.getElementById('m_login_password').addEventListener('click', () =>  window.goalMessage(window.scrollTo(0, 100)))
    `;

  const _onNavigationStateChange = (e) => console.log(e);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={() => toggleVisibility(false)}
    >
      <WebView
        style={styles.webView}
        javaScriptEnabled
        startInLoadingState
        source={{ uri }}
        onNavigationStateChange={_onNavigationStateChange}
        injectedJavaScript={
            Platform.OS === 'android' ? _injectJS() : ''
          }
        renderLoading={_Indicator}
        onLoad={_onLoad}
      />
      <TouchableOpacity
        style={styles.closeButtonWithWrapper}
        onPress={() => toggleVisibility(false)}
      >
        <Text style={styles.closeText}>Close</Text>
      </TouchableOpacity>
    </Modal>
  );
}

export default WebviewComponent;
