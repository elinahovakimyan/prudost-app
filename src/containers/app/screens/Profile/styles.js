import { StyleSheet } from 'react-native';

import { colors } from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    paddingHorizontal: 16,
  },
  content: {
    backgroundColor: colors.blue,
    paddingBottom: 64,
    shadowColor: '#727982',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: { height: 1, width: 1 },
    elevation: 6,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  list: {
    marginTop: -40,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
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
    width: '40%',
  },
  rightAlign: {
    textAlign: 'right',
  },
  emptyText: {
    textAlign: 'center',
    padding: 30,
  },
  buttonContainer: {
    padding: 16,
    paddingBottom: 200,
  },
});
