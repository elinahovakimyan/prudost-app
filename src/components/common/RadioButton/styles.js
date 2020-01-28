import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

const styles = StyleSheet.create({
  radioButton: {
    height: 18,
    width: 18,
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    height: 18,
    width: 18,
    borderRadius: 4,
  },
});


export default styles;
