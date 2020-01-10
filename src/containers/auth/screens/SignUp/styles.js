import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  screen: {
    height,
  },
  header: {
    marginTop: 50,
    marginBottom: 40,
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
    color: '#fff',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 16,
  },
});
