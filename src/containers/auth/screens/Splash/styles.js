import { StyleSheet } from 'react-native';

import { colors } from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.blue,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 20,
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  quoteText: {
    textAlign: 'center',
    color: colors.lightYellow,
    fontSize: 24,
    paddingTop: 8,
    lineHeight: 30,
    letterSpacing: 1.5,
  },
  quoteAuthor: {
    color: colors.white,
    paddingTop: 16,
    paddingRight: 16,
    marginBottom: 40,
  },
});
