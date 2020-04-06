import { StyleSheet } from 'react-native';

import { colors } from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 0,
  },
  container: {
    // paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    color: colors.white,
  },
  title: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontWeight: '600',
    color: colors.darkGrey,
    marginTop: 16,
    fontSize: 22,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontWeight: '600',
    color: colors.darkGrey,
    marginTop: 32,
    fontSize: 14,
  },
  description: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    color: colors.darkGrey,
    fontSize: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 24,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  emptyText: {
    textAlign: 'center',
    padding: 30,
  },
  tagsRow: {
    flexDirection: 'row',
    maxWidth: '70%',
    flexWrap: 'wrap',
  },
  tag: {
    marginRight: 8,
    marginVertical: 4,
  },
  headerText: {
    color: colors.white,
    fontWeight: '500',
    marginHorizontal: 8,
  },
  header: {
    height: '30%',
  },
  tasks: {
    height: '70%',
  },
});
