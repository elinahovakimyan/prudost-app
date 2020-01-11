import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: height - 110,
  },
  container: {
    paddingHorizontal: 16,
  },
  backIcon: {
    width: 21.5,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  inputContainer: {
    borderTopColor: '#D8D8D8',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    width,
  },
  input: {
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#000',
    width: 250,
  },
  sendText: {
    fontWeight: '600',
    color: '#33638e',
    paddingHorizontal: 16,
    paddingTop: 5,
  },
  footer: {
    height: 30,
  },
  header: {
    height: 35,
  },
  headerWithKeyboard: {
    height: 400,
  },
  emptyText: {
    textAlign: 'center',
    padding: 30,
  },
});
