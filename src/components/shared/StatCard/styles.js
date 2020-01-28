import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../utils';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    margin: 8,
    backgroundColor: colors.white,
    shadowColor: '#727982',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: { height: 1, width: 1 },
    elevation: 6,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: (width - 63) / 2,
  },
  number: {
    fontSize: 40,
    fontWeight: '500',
    color: colors.blue,
    paddingTop: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    flexWrap: 'wrap',
    color: colors.darkGrey,
  },
});

export default styles;
