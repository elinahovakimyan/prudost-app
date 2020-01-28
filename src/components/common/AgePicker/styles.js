import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../utils';

const { width } = Dimensions.get('window');
const elementWidth = (width - 32) / 5;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  number: {
    width: elementWidth,
    fontSize: 28,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 22,
  },
  selectText: {
    fontSize: 20,
    color: colors.lightGrey,
  },
});

export default styles;
