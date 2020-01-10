import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingVertical: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginTop: 5,
    backgroundColor: '#50cccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLetter: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  username: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.5,
    marginBottom: 4,
    lineHeight: 25,
  },
  goalTitle: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.5,
    marginBottom: 4,
    color: '#424242',
    lineHeight: 25,
  },
  descriptionContainer: {
    flexDirection: 'row',
  },
  commentContainer: {
    width: width * 0.75,
    paddingHorizontal: 10,
  },
  commentText: {
    fontSize: 14,
    color: '#626262',
    letterSpacing: 0.5,
    marginBottom: 5,
    maxWidth: '90%',
  },
  showMoreText: {
    fontSize: 14,
    color: '#626262',
    letterSpacing: 0.5,
    marginBottom: 5,
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: '#5F5F5F',
    letterSpacing: 0.78,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
