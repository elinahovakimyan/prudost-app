import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../utils';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  headerText: {
    marginVertical: 12,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.darkGrey,
  },
  title: {
    marginVertical: 8,
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.blue,
  },
  subtitle: {
    marginVertical: 4,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.blue,
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  optionsContainer: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.lightYellow,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 48,
    paddingVertical: 24,
    // height: '90%',
    width: '100%',
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
    padding: 16,
    shadowColor: '#727982',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { height: 1, width: 1 },
    marginVertical: 8,
    borderRadius: 12,
    width: '100%',
  },
  optionText: {
    fontSize: 16,
    paddingHorizontal: 12,
    color: colors.darkGrey,
  },
  optionTitle: {
    fontSize: 24,
    paddingBottom: 8,
    paddingHorizontal: 12,
    color: colors.darkGrey,
  },
  upgradeButton: {
  },
  cancelButton: {
    marginTop: 12,
    marginBottom: 24,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: colors.white,
    marginVertical: 8,
  },
  fullWidth: { width: '100%' },
});


export default styles;
