import { StyleSheet } from 'react-native';

import { colors } from '../../../../utils';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 16,
  },
  cancelText: {
    fontSize: 14,
    color: colors.lightYellow,
    marginHorizontal: 16,
  },
  actionTextContainer: {
    marginHorizontal: 15,
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: colors.lightYellow,
    borderRadius: 20,
  },
  actionText: {
    color: colors.blue,
    fontSize: 14,
  },
  headerStyle: {
    backgroundColor: colors.blue,
  },
  input: {
    marginTop: 32,
    color: colors.black,
    fontSize: 16,
    marginBottom: 8,
    paddingBottom: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderColor: colors.grey,
    borderRadius: 0,
  },
  dateInput: {
    marginTop: 32,
    color: colors.black,
    fontSize: 16,
    marginBottom: 8,
    paddingBottom: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderColor: colors.grey,
  },
  sectionTitle: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    fontWeight: '600',
    color: colors.darkGrey,
    marginTop: 56,
    fontSize: 15,
  },
  newTask: {
    paddingHorizontal: 8,
    paddingBottom: 16,
    fontWeight: '500',
    color: colors.darkGrey,
    marginTop: 32,
    fontSize: 14,
  },
});
