import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../utils';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: colors.white,
    shadowColor: '#727982',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { height: 1, width: 1 },
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {
    paddingRight: 8,
    paddingVertical: 16,
    paddingLeft: 16,
  },
  rightIcon: {
    paddingRight: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 16,
    color: colors.grey,
    width: width - 128,
    lineHeight: 16,
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: 8,
  },
});

export default styles;
