import { StyleSheet } from 'react-native';

import { colors } from '../../../utils/styles';

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 24,
    marginVertical: 8,
    marginHorizontal: 8,
    shadowColor: '#727982',
    shadowOpacity: 0.8,
    width: 170,
    shadowRadius: 8,
    shadowOffset: { height: 1, width: 1 },
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.white,
    paddingRight: 16,
    lineHeight: 32,
  },
  goalsIndicator: {
    fontSize: 14,
    color: colors.lightGrey,
    letterSpacing: 0.78,
    textTransform: 'capitalize',
    paddingTop: 24,
    paddingBottom: 4,
  },
});

export default styles;
