import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { styles } from './styles';

function Layout({ style, children }) {
  return (
    <SafeAreaView>
      <View style={[styles.container, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

export default Layout;
