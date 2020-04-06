import { StyleSheet } from 'react-native';

import { colors } from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 0,
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
    textTransform: 'uppercase',
    color: colors.darkGrey,
    marginTop: 32,
    fontSize: 15,
  },
  footer: {
    height: 40,
  },
  lastFooter: {
    height: 230,
  },
  emptyText: {
    textAlign: 'center',
    padding: 30,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  scoreLabel: {
    fontWeight: '600',
    color: colors.darkGrey,
    fontSize: 20,
  },
  scoreText: {
    fontWeight: '600',
    color: colors.blue,
    fontSize: 20,
  },
  listContainer: {
    // paddingHorizontal: 16,
  },
});
