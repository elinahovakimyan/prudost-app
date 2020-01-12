import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: '#fff',
    shadowColor: '#727982',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { height: 1, width: 1 },
    elevation: 5,
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
    color: '#33638e',
    maxWidth: '94%',
    lineHeight: 25,
    paddingRight: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingBottom: 8,
  },
  descriptionContainer: {
    flexDirection: 'row',
  },
  description: {
    fontSize: 14,
    flex: 1,
    color: '#626262',
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  showMoreText: {
    fontSize: 14,
    color: '#626262',
    letterSpacing: 0.5,
    marginBottom: 5,
    fontWeight: '600',
  },
  category: {
    fontSize: 12,
    color: '#FBC635',
    borderColor: '#FBC635',
    letterSpacing: 0.78,
    textTransform: 'capitalize',
    borderWidth: 0.5,
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  task: {
    fontSize: 14,
    color: '#3b3b3b',
    letterSpacing: 0.78,
  },
  circle: {
    backgroundColor: '#3b3b3b',
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
    // marginHorizontal: 2,
    // marginBottom: 0.5,
  },
  progressBar: {
    // paddingHorizontal: 1,
    height: 8,
    borderRadius: 20,
    backgroundColor: '#FBC635',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default styles;
