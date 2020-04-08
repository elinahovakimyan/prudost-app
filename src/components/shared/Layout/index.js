import React from 'react';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';

import { colors } from '../../../utils';

import { styles } from './styles';

function Layout({ isLoading, style, children }) {
  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={colors.blue} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={[styles.container, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

export default Layout;
