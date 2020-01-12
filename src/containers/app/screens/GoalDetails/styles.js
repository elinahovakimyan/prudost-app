import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 0,
  },
  container: {
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    color: '#fff',
  },
  title: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontWeight: '600',
    color: '#3b3b3b',
    marginTop: 16,
    fontSize: 22,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontWeight: '600',
    color: '#3b3b3b',
    marginTop: 32,
    fontSize: 14,
  },
  description: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    color: '#3b3b3b',
    fontSize: 16,
  },
  category: {
    fontSize: 14,
    color: '#FBC635',
    borderColor: '#FBC635',
    letterSpacing: 0.78,
    textTransform: 'capitalize',
    borderWidth: 0.5,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 24,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  addTaskContainer: {
    paddingVertical: 16,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addTaskIcon: {
    width: 16,
    height: 16,
  },
  addTaskTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#626262',
    maxWidth: '75%',
    lineHeight: 25,
    paddingLeft: 8,
  },
  footer: {
    height: 230,
  },
  emptyText: {
    textAlign: 'center',
    padding: 30,
  },
});
