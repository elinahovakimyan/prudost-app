import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 0,
    position: 'relative',
  },
  container: {
    paddingHorizontal: 16,
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
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  title: {
    textTransform: 'uppercase',
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontWeight: '600',
    color: '#3b3b3b',
    marginTop: 24,
  },
  feedbackContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#33638e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 6,
    position: 'absolute',
    zIndex: 20,
    right: 20,
    bottom: 155,
  },
  feedbackIcon: {
    width: 28,
    height: 28,
  },
  header: {
    height: 16,
  },
  footer: {
    height: 500,
  },
  emptyText: {
    textAlign: 'center',
    padding: 30,
  },
  categoryContainer: {
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 8,
    paddingRight: 16,
  },
});
