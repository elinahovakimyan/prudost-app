import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../../utils';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  screen: {
    height,
    paddingTop: 16,
  },
  header: {
    marginTop: 50,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.lightYellow,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.78,
  },
  rightText: {
    color: colors.lightYellow,
    fontSize: 18,
    letterSpacing: 0.78,
  },
  signUpButon: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  forgotPasswordText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
  },
  actionButon: {
    marginTop: 18,
    marginBottom: 12,
  },
  imageContainer: {
    marginTop: 48,
  },
  loader: {
    marginVertical: 32,
  },
});
