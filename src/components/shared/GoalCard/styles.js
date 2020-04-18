import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../utils';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: colors.white,
    marginHorizontal: 16,
    shadowColor: '#727982',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { height: 1, width: 1 },
    elevation: 5,
  },
  activeCard: {
    shadowOpacity: 0.6,
    shadowOffset: { height: 2, width: 2 },
    elevation: 7,
  },
  contentContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    width: width - 82,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
    color: colors.blue,
    maxWidth: '94%',
    lineHeight: 25,
    paddingRight: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
  },
  tag: {
    marginRight: 8,
    marginBottom: 8,
  },
  descriptionContainer: {
    flexDirection: 'row',
  },
  description: {
    fontSize: 14,
    flex: 1,
    color: colors.grey,
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  showMoreText: {
    fontSize: 14,
    color: colors.grey,
    letterSpacing: 0.5,
    marginBottom: 5,
    fontWeight: '600',
  },
  category: {
    fontSize: 12,
    color: colors.yellow,
    borderColor: colors.yellow,
    letterSpacing: 0.78,
    textTransform: 'capitalize',
    borderWidth: 0.5,
    borderRadius: 13,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  task: {
    fontSize: 14,
    color: colors.darkGrey,
    letterSpacing: 0.78,
  },
  circle: {
    backgroundColor: colors.darkGrey,
    width: 4,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 11,
  },
  icon: {
    width: 20,
    height: 20,
  },
  progressBarContainer: {
    width: '100%',
    borderRadius: 20,
    height: 8,
    backgroundColor: '#ededed',
  },
  progressBar: {
    height: 8,
    borderRadius: 20,
    backgroundColor: colors.yellow,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default styles;
