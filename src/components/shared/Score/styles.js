import { StyleSheet } from 'react-native';

import { colors } from '../../../utils/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
  },
  title: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontWeight: '600',
    color: colors.darkGrey,
    marginTop: 32,
    fontSize: 20,
  },
  scoreContainer: {
    borderColor: colors.yellow,
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    color: colors.blue,
    fontSize: 45,
  },
});

export default styles;
