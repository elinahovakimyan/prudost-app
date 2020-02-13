import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    height: '100%',
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#fff',
    width: '90%',
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    padding: 24,
  },
  text: {
    color: colors.darkGrey,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
  points: {
    color: colors.blue,
    fontSize: 40,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 38,
    borderColor: colors.blue,
    padding: 12,
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    margin: 24,
  },
  button: {
  },
});

export default styles;
