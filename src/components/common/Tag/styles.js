import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

const styles = StyleSheet.create({
  tag: {
    fontSize: 14,
    color: colors.yellow,
    borderColor: colors.yellow,
    letterSpacing: 0.78,
    textTransform: 'capitalize',
    borderWidth: 0.5,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
});

export default styles;
