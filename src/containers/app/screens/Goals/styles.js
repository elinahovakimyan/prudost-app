import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    position: 'relative',
  },
  container: {
    paddingHorizontal: 20,
  },
  backIcon: {
    width: 21.5,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  headerLink: {
    marginRight: 15,
    color: '#33638e',
    fontSize: 14,
    fontWeight: '500',
  },
  headerIcon: {
    width: 28,
    resizeMode: 'contain',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  headerTitle: {
    fontSize: 18.5,
    letterSpacing: 0.78,
    fontWeight: '500',
    flex: 1,
    textAlign: 'center',
  },
  feedbackContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    right: 18,
    bottom: 95,
  },
  feedbackIcon: {
    width: 30,
    height: 30,
  },
  footer: {
    height: 100,
  },
  emptyText: {
    textAlign: 'center',
    padding: 30,
  },
});
