import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

const styles = StyleSheet.create({
  addTaskContainer: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  padding: {
    marginHorizontal: 16,
  },
  addTaskIcon: {
    width: 16,
    height: 16,
  },
  addTaskTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.grey,
    maxWidth: '75%',
    lineHeight: 25,
    paddingLeft: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  input: {
    color: colors.black,
    fontSize: 16,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderColor: colors.grey,
    // width: '80%',
    marginRight: 16,
    flex: 9,
  },
  doneIcon: {
    width: 20,
    height: 20,
    flex: 1,
    resizeMode: 'contain',
  },
});

export default styles;
