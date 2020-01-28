import { StyleSheet } from 'react-native';

import { colors } from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 0,
  },
  container: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
  content: {
    backgroundColor: colors.blue,
    paddingBottom: 48,
    shadowColor: '#727982',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: { height: 1, width: 1 },
    elevation: 6,
  },
  scoreText: {
    color: colors.white,
  },
  titleText: {
    color: colors.white,
    letterSpacing: 0.7,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  list: {
    marginTop: -32,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  circle: {
    backgroundColor: colors.darkGrey,
    width: 4,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 11,
  },
  listFooter: {
    height: 40,
  },
  link: {
    color: colors.grey,
  },
  emptyText: {
    textAlign: 'center',
    padding: 30,
  },
});
