import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    borderWidth: 0,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#33638e',
    textAlign: 'center',
    lineHeight: 20,
  },
  circled: {
    borderRadius: 40,
    padding: 20,
  },
  circledText: {
    letterSpacing: 2.77778,
  },
  outlined: {
    borderWidth: 0.5,
    borderColor: '#FF4A2C',
    borderRadius: 8,
    paddingVertical: 5,
  },
  block: {
    width: '100%',
  },
  light: {
    backgroundColor: '#55D8CF',
  },
  dark: {
    backgroundColor: '#ffd96d',
  },
});


export default styles;
