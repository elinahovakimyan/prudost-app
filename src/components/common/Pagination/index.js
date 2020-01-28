import React from 'react';
import {
  View,
  TouchableOpacity,
  Platform,
  I18nManager,
} from 'react-native';

import styles from './styles';

const isAndroidRTL = I18nManager.isRTL && Platform.OS === 'android';


function Pagination(props) {
  const _rtlSafeIndex = (i) => (isAndroidRTL ? props.slides.length - 1 - i : i);

  return (
    <View style={[styles.paginationDots, props.paginationStyle]}>
      {props.slides.length > 1
        && props.slides.map((_, i) => {
          const currentIndex = _rtlSafeIndex(i);

          return (
            <TouchableOpacity
              key={i}
              style={[
                styles.dot,
                currentIndex === props.activeIndex
                  ? props.activeDotStyle
                  : props.dotStyle,
                currentIndex <= props.activeIndex
                  ? props.prevDotStyle
                  : {},
              ]}
              onPress={() => props.onPaginationPress(i)}
            />
          );
        })}
    </View>
  );
}

Pagination.defaultProps = {
  activeDotStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  dotStyle: {
    backgroundColor: '#fff',
  },
};

export default React.memo(Pagination);
