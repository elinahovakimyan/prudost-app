import { StyleSheet, I18nManager, Platform } from 'react-native';

const isAndroidRTL = I18nManager.isRTL && Platform.OS === 'android';

const styles = StyleSheet.create({
  paginationDots: {
    height: 16,
    flexDirection: isAndroidRTL ? 'row-reverse' : 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
});


export default styles;
