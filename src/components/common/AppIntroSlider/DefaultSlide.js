import React from 'react';
import {
  Text, ImageBackground, View, Dimensions,
} from 'react-native';

import { styles } from './DefaultSlide.style';

const { height } = Dimensions.get('window');

export default class DefaultSlide extends React.PureComponent {
  render() {
    const { item, dimensions, bottomButtons } = this.props;
    const bgStyle = {
      width: dimensions.width + 10,
      flex: 1,
      height,
    };
    const overlayStyle = {
      flex: 1,
      resizeMode: 'cover',
      width: dimensions.width,
      paddingBottom: bottomButtons ? 120 : 64,
    };
    const style = {
      flex: 1,
      width: dimensions.width,
      paddingBottom: bottomButtons ? 120 : 64,
    };

    return (
      <ImageBackground source={item.backgroundImage} style={bgStyle}>
        <ImageBackground
          source={require('../../../assets/images/overlay.png')}
          style={overlayStyle}
        >
          <View style={[styles.mainContent, style]}>
            <Text style={[styles.title, item.titleStyle]}>{item.title}</Text>
            <Text style={[styles.text, item.textStyle]}>{item.text}</Text>
          </View>
        </ImageBackground>
      </ImageBackground>
    );
  }
}
