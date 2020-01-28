import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    borderWidth: 0,
    padding: 20,
    marginHorizontal: 10,
    width: (width - 60) / 2,
    backgroundColor: '#A6A7A7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 20,
  },
});


export default styles;
