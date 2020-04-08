import { StyleSheet } from 'react-native';

import { colors } from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 0,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    paddingBottom: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: colors.darkGrey,
    marginTop: 32,
    fontSize: 15,
  },
  footer: {
    height: 300,
  },
  emptyText: {
    paddingVertical: 16,
    color: colors.grey,
    fontSize: 12,
  },
});
