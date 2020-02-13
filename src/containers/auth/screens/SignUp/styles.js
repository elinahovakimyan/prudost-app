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
  },
  title: {
    color: colors.lightYellow,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '500',
    letterSpacing: 0.78,
  },
  rightText: {
    color: colors.lightYellow,
    fontSize: 18,
    letterSpacing: 0.78,
  },
  actionButon: {
    marginTop: 18,
    marginBottom: 12,
  },
  imageContainer: {
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 280,
    padding: 30,
    resizeMode: 'contain',
  },
  signInText: {
    color: colors.white,
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 16,
  },
});
