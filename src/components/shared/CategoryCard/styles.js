import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginVertical: 8,
    marginRight: 16,
    shadowColor: '#727982',
    shadowOpacity: 0.8,
    width: 150,
    shadowRadius: 8,
    shadowOffset: { height: 1, width: 1 },
    elevation: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.white,
    paddingRight: 16,
    lineHeight: 26,
  },
  goalsIndicator: {
    fontSize: 14,
    color: colors.lightGrey,
    letterSpacing: 0.78,
    textTransform: 'capitalize',
    paddingTop: 16,
    paddingBottom: 4,
  },
});

export default styles;
