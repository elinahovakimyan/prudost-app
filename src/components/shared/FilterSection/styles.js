import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../utils';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginHorizontal: 16,
  },
  title: {
    paddingBottom: 16,
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: colors.darkGrey,
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    color: '#0A0A0A',
    maxWidth: '85%',
  },
  modalContainer: {
    height,
    width,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  optionsContainer: {
    borderRadius: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 48,
    paddingVertical: 24,
    maxHeight: 220,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.30,
    elevation: 2,
  },
  option: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: colors.darkGrey,
  },
  doneButton: {
    marginTop: 26,
    borderRadius: 24,
  },
});


export default styles;
