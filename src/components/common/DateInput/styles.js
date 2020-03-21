import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

export const styles = StyleSheet.create({
  dateInput: {
    marginTop: 32,
    marginBottom: 8,
    paddingBottom: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderColor: colors.grey,
  },
  dateInputText: {
    color: colors.black,
    fontSize: 16,
  },
  placeholder: {
    color: colors.grey,
    fontSize: 16,
  },
});
