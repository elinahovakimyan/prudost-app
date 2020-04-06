import { StyleSheet } from 'react-native';

import { colors } from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 0,
    position: 'relative',
  },
  container: {
    // paddingHorizontal: 16,
  },
  backIcon: {
    width: 21.5,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  headerLink: {
    marginRight: 15,
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
  headerIcon: {
    width: 28,
    resizeMode: 'contain',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  headerTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  title: {
    textTransform: 'uppercase',
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontWeight: '600',
    color: colors.darkGrey,
    marginTop: 24,
  },
  header: {
    height: 16,
  },
  footer: {
    height: 400,
  },
  emptyText: {
    textAlign: 'center',
    padding: 30,
  },
  categoryContainer: {
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 8,
    paddingRight: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
