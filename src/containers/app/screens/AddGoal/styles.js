import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 16,
  },
  cancelText: {
    fontSize: 14,
    color: '#ffd96d',
    marginHorizontal: 16,
  },
  actionTextContainer: {
    marginHorizontal: 15,
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#ffd96d',
    borderRadius: 20,
  },
  actionText: {
    color: '#33638e',
    fontSize: 14,
  },
  headerStyle: {
    backgroundColor: '#33638e',
  },
  input: {
    marginTop: 32,
    color: '#000',
    fontSize: 16,
    marginBottom: 8,
    paddingBottom: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderColor: '#626262',
  },
  textarea: {
    marginVertical: 22,
    color: '#000',
    fontSize: 16,
    paddingBottom: 350,
    borderBottomWidth: 0.5,
    borderColor: '#626262',
  },
  sectionTitle: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    fontWeight: '600',
    color: '#3b3b3b',
    marginTop: 56,
    fontSize: 15,
  },
  newTask: {
    paddingHorizontal: 8,
    paddingBottom: 16,
    fontWeight: '500',
    color: '#3b3b3b',
    marginTop: 32,
    fontSize: 14,
  },
});
