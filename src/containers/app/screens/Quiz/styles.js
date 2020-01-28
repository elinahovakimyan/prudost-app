import { StyleSheet, Dimensions, Platform } from 'react-native';

import { colors } from '../../../../utils';

const { height } = Dimensions.get('window');


export const styles = StyleSheet.create({
  screen: {
    height,
    backgroundColor: colors.blue,
    paddingHorizontal: 25,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    height: '100%',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 30,
  },
  nextButton: {
    borderRadius: 30,
    marginBottom: Platform.OS === 'ios' ? 20 : 40,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    paddingBottom: 30,
  },
  backIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  optionImage1: {
    width: 60,
    height: 75,
    resizeMode: 'contain',
  },
  optionImage2: {
    width: 50,
    height: 75,
    resizeMode: 'contain',
  },
  optionWithImageText: {
    color: colors.white,
    fontSize: 18,
    paddingTop: 15,
    fontWeight: '600',
  },
  optionText: {
    color: colors.white,
    fontSize: 35,
  },
  radioOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonOptionsContainer: {
    height: height * 0.55,
  },
  activeButton: {
    marginVertical: 8,
    paddingVertical: 16,
    backgroundColor: colors.darkBlue,
  },
  passiveButton: {
    marginVertical: 8,
    paddingVertical: 16,
    backgroundColor: colors.green,
  },
  buttonText: {
    color: colors.white,
  },
});
