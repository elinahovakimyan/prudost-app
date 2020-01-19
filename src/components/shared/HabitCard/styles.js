import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../utils/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
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
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    width: width - 128,
    paddingLeft: 8,
    color: colors.darkGrey,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingTop: 8,
  },
  streakTitle: {
    fontSize: 12,
    color: colors.grey,
  },
  streakNumberContainer: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginLeft: 8,
  },
  streakNumber: {
    color: colors.blue,
    fontSize: 13,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: 8,
  },
});

export default styles;
