import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: '100%',
    justifyContent: 'flex-end',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    paddingBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#D2D2D2',
    borderBottomWidth: 0.5,
    padding: 16,
  },
  cancelText: {
    fontSize: 16,
  },
  doneText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0061AC',
  },
});

export default styles;
