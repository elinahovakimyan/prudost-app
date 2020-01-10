import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  screen: {
    height,
  },
  header: {
    marginTop: 50,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#ffd96d',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.78,
  },
  rightText: {
    color: '#ffd96d',
    fontSize: 18,
    letterSpacing: 0.78,
  },
  signUpButon: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  forgotPasswordText: {
    color: '#fff',
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
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginTop: 50,
  },
  logo: {
    width: 160,
    height: 160,
  },
  quoteText: {
    textAlign: 'center',
    color: '#ffd96d',
    fontSize: 18,
    paddingTop: 8,
  },
  quoteAuthor: {
    color: '#fff',
    // alignSelf: 'flex-end',
    paddingTop: 16,
    paddingRight: 16,
  },
});
