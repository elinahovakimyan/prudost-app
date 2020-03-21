import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../utils';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginVertical: 8,
    backgroundColor: colors.white,
    shadowColor: '#727982',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: { height: 1, width: 1 },
    elevation: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.grey,
    width: width - 128,
    paddingLeft: 8,
    paddingVertical: 0,
    lineHeight: 16,
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: 8,
  },
});

export default styles;
