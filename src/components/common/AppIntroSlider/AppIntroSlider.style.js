import { StyleSheet, Platform, I18nManager } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const isAndroidRTL = I18nManager.isRTL && Platform.OS === 'android';

export const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    flexDirection: isAndroidRTL ? 'row-reverse' : 'row',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16 + (ifIphoneX(34, 0)),
    left: 16,
    right: 16,
  },
  leftButtonContainer: {
    position: 'absolute',
    left: 0,
  },
  rightButtonContainer: {
    position: 'absolute',
    right: 0,
  },
  bottomButton: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: ifIphoneX(40, 25),
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
    padding: 12,
  },
});
