import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  screen: {
    height,
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    color: '#ffd96d',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 0.78,
  },
  rightText: {
    color: '#ffd96d',
    fontSize: 18,
  },
  text1: {
    color: '#fff',
    fontSize: 17.5,
    textAlign: 'center',
    letterSpacing: 0.78,
    paddingHorizontal: 18,
    paddingVertical: 4,
    marginBottom: 50,
    lineHeight: 24,
  },
  actionButon: {
    marginTop: 18,
    marginBottom: 12,
  },
  rememberPasswordText: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 16,
  },
});
