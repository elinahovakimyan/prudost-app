import { StyleSheet } from 'react-native';

import { colors } from '../../../../utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    paddingHorizontal: 20,
  },
  image: {
    width: 245,
    height: 245,
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
