import {
  StyleSheet, Dimensions, Platform, I18nManager,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const isIphoneX = Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (height === 812 || width === 812);

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
    bottom: 16 + (isIphoneX ? 34 : 0),
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
    marginBottom: 45,
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
    padding: 12,
  },
});
