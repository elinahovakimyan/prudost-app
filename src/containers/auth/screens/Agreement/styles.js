import { StyleSheet } from 'react-native';

import { colors } from '../../../../utils/styles';

export const styles = StyleSheet.create({
  header: {
    marginTop: 50,
  },
  title: {
    color: colors.lightYellow,
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.78,
    paddingRight: 10,
  },
  subtitle: {
    color: colors.lightYellow,
    fontSize: 14,
    letterSpacing: 0.78,
    marginBottom: 40,
    marginTop: 10,
  },
  rightText: {
    color: colors.lightYellow,
    fontSize: 14,
    letterSpacing: 0.78,
    textAlign: 'right',
  },
  radioContainer: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  radioText: {
    paddingHorizontal: 14,
    paddingTop: -3,
  },
  contentText: {
    marginVertical: 12,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    letterSpacing: 0.78,
    flexWrap: 'wrap',
  },
  nextButton: {
    marginTop: 70,
  },
  nextButtonWithErrors: {
    marginTop: 35,
  },
  linkText: {
    color: '#4397FB',
    fontSize: 16,
    letterSpacing: 0.78,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 16,
  },
});
