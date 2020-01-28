import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    borderWidth: 0,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 16,
    // color: colors.blue,
    textAlign: 'center',
    lineHeight: 20,
  },
  circled: {
    borderRadius: 40,
    padding: 20,
  },
  circledText: {
    letterSpacing: 2.77778,
  },
  outlined: {
    borderWidth: 0.5,
    borderColor: colors.lightYellow,
    borderRadius: 8,
    paddingVertical: 5,
  },
  block: {
    width: '100%',
  },
  darkText: {
    color: colors.blue,
  },
  lightText: {
    color: colors.lightYellow,
  },
  dark: {
    backgroundColor: colors.blue,
  },
  light: {
    backgroundColor: colors.lightYellow,
  },
});


export default styles;
