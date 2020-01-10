import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    letterSpacing: 0.78,
    marginBottom: 30,
  },
  image: {
    width: 245,
    height: 245,
    resizeMode: 'contain',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerText: {
    color: '#fff',
    fontSize: 13,
  },
});
