import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../../../utils';

const styles = StyleSheet.create({
  webView: {
    marginTop: Platform.OS === 'ios' ? 35 : 0,
  },
  indicator: {
    flex: 1,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  buttonContainer: {
    marginVertical: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  closeButtonWithWrapper: {
    backgroundColor: colors.lightYellow,
    width: Dimensions.get('screen').width,
    height: 70,
    borderWidth: 1,
    borderColor: colors.lightYellow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  closeText: {
    color: colors.blue,
    fontSize: 16,
  },
});

export default styles;
