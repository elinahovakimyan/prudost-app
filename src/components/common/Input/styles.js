import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 0,
    borderRadius: 16,
    color: '#000',
    width: '100%',
    marginVertical: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  inputContainer: {
    width: '100%',
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    right: 17,
    width: 24,
    height: 24,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});


export default styles;
