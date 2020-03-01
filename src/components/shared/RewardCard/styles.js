import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../utils';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: colors.white,
    shadowColor: '#727982',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: { height: 1, width: 1 },
    elevation: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locked: {
    opacity: 0.5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.darkGrey,
    width: width - 142,
    paddingLeft: 16,
  },
  points: {
    color: colors.grey,
    paddingLeft: 16,
    paddingTop: 4,
  },
  unLockedText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.darkGrey,
    width: width - 166,
    paddingLeft: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lock: {
    width: 24,
    height: 24,
  },
  useButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: colors.blue,
  },
  useButtonText: {
    color: colors.lightYellow,
    fontSize: 13,
    textTransform: 'uppercase',
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: 8,
  },
});

export default styles;
