import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    marginVertical: 8,
    backgroundColor: colors.white,
    shadowColor: '#727982',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: { height: 1, width: 1 },
    elevation: 6,
  },
  listItem: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.grey,
    fontSize: 16,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 16,
  },
  nextIcon: {
    width: 18,
    height: 18,
    opacity: 0.6,
    marginRight: 8,
  },
});

export default styles;
