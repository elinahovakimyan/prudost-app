import { StyleSheet } from 'react-native';

import { colors } from '../../../utils';


const styles = StyleSheet.create({
  container: {
  },
  header: {
    paddingVertical: 12,
    borderWidth: 0,
    width: '100%',
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 16,
    marginBottom: 8,
    paddingBottom: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderColor: colors.grey,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
  placeholder: {
    color: '#6F6F6F',
    fontSize: 16,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginVertical: 70,
    borderRadius: 8,
  },
  confirmButton: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});


export default styles;
