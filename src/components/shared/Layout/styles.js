import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../utils/styles';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height,
    paddingHorizontal: 15,
    backgroundColor: colors.blue,
  },
});
