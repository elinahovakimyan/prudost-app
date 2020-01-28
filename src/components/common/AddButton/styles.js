import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

const styles = StyleSheet.create({
  plusContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 6,
    position: 'absolute',
    zIndex: 20,
    right: 20,
  },
  plusIcon: {
    width: 28,
    height: 28,
  },
});


export default styles;
