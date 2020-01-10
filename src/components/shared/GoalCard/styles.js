import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    shadowColor: '#727982',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: { height: 1, width: 1 },
    elevation: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
    marginBottom: 8,
    color: '#33638e',
    lineHeight: 25,
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
  status: {
    fontSize: 14,
    color: '#3b3b3b',
    letterSpacing: 0.78,
    textTransform: 'capitalize',
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
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default styles;
