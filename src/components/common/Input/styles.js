import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 0,
    borderRadius: 16,
    color: colors.black,
    width: '100%',
    marginVertical: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  inputContainer: {
    width: '100%',
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    top: 22,
    right: 17,
    width: 24,
    height: 24,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  underlined: {
    marginTop: 32,
    color: colors.black,
    fontSize: 16,
    marginBottom: 8,
    paddingBottom: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderColor: colors.grey,
  },
});


export default styles;
