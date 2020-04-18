import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

const styles = StyleSheet.create({
  tag: {
    fontSize: 12,
    color: colors.yellow,
    borderColor: colors.yellow,
    letterSpacing: 0.78,
    textTransform: 'capitalize',
    borderWidth: 0.5,
    fontWeight: '400',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
});

export default styles;
