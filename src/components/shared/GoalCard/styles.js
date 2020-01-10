import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.5,
    marginBottom: 4,
    color: '#000',
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
    fontSize: 16,
    color: '#000',
    letterSpacing: 0.78,
  },
  date: {
    fontSize: 16,
    color: '#5F5F5F',
    letterSpacing: 0.78,
  },
  circle: {
    backgroundColor: '#464646',
    width: 4,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 11,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerIcon: {
    width: 22,
    resizeMode: 'contain',
    marginLeft: 11,
  },
});

export default styles;
