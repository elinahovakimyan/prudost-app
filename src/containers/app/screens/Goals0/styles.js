import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    position: 'relative',
  },
  container: {
    paddingHorizontal: 16,
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
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
  },
  newGoalsButton: {
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#33638e',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  newGoalsText: {
    color: '#FFF',
  },
  listHeader: {
    height: 20,
  },
  footer: {
    height: 160,
  },
  emptyText: {
    textAlign: 'center',
    padding: 30,
  },
});
