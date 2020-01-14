import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../utils/styles';

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: colors.lightYellow,
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '500',
    marginTop: 100,
    textAlign: 'center',
  },
  points: {
    color: colors.lightYellow,
    fontSize: 48,
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 250,
  },
  button: {
    marginBottom: 100,
  },
});

export default styles;
