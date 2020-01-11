import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
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
  listItemContainer: {
    padding: 15,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
  },
  listItemText: {
    fontSize: 16,
    lineHeight: 22,
  },
  nameContainer: {
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#000',
    fontWeight: '500',
    minWidth: 150,
  },
  editIcon: {
    width: 16,
    height: 16,
  },
});
