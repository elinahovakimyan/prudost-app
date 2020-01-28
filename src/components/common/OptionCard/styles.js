import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../utils';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    borderWidth: 0,
    height: width * 0.41,
    width: width * 0.41,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  light: {
    backgroundColor: colors.darkBlue,
  },
  dark: {
    backgroundColor: colors.orange,
  },
});


export default styles;
