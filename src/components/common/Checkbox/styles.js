import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';


const styles = StyleSheet.create({
  checkbox: {
    height: 16,
    width: 16,
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  innerSquare: {
    height: 8,
    width: 8,
    borderRadius: 2,
    backgroundColor: colors.blue,
  },
});


export default styles;
