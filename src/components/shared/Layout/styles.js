import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../utils';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.blue,
  },
  loaderContainer: {
    height,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
