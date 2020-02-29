import React from 'react';
import {
  Text, View, Dimensions, Image,
} from 'react-native';

import { styles } from './DefaultSlide.style';
import { colors } from '../../../utils';

const { height } = Dimensions.get('window');

export default class DefaultSlide extends React.PureComponent {
  render() {
    const { item, dimensions, bottomButtons } = this.props;
    const bgStyle = {
      width: dimensions.width + 10,
      flex: 1,
      height,
      backgroundColor: colors.blue,
    };
    const style = {
      flex: 1,
      width: dimensions.width,
      paddingBottom: bottomButtons ? 120 : 64,
    };

    return (
      <View style={bgStyle}>
        <View style={[styles.mainContent, style]}>
          <Image style={styles.image} source={item.image} />
          <Text style={[styles.title, item.titleStyle]}>{item.title}</Text>
          <Text style={[styles.text, item.textStyle]}>{item.text}</Text>
        </View>
      </View>
    );
  }
}
