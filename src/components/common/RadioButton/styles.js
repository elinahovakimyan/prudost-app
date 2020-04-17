import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

const styles = StyleSheet.create({
  radioButton: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
  },
});


export default styles;
