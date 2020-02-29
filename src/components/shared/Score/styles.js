import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  title: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontWeight: '600',
    color: colors.white,
    letterSpacing: 0.7,
    marginTop: 32,
    fontSize: 20,
  },
  scoreContainer: {
    borderColor: colors.yellow,
    height: 150,
    width: 150,
    borderRadius: 80,
    borderWidth: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    color: colors.white,
    fontSize: 45,
  },
});

export default styles;
