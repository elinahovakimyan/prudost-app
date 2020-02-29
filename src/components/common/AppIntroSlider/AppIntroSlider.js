import React from 'react';
import {
  FlatList,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Platform,
  I18nManager,
} from 'react-native';
import DefaultSlide from './DefaultSlide';

import Pagination from '../Pagination';
import Button from './Button';
import { styles } from './AppIntroSlider.style';
import { colors } from '../../../utils';

const window = Dimensions.get('window');

const isAndroidRTL = I18nManager.isRTL && Platform.OS === 'android';


export default class AppIntroSlider extends React.Component {
  timer = null;

  state = {
    width: window.width,
    height: window.height,
    activeIndex: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.slideChangeTimer, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  slideChangeTimer = () => {
    const { activeIndex } = this.state;
    const { slides } = this.props;

    if (activeIndex + 1 === slides.length) {
      this.goToSlide(0, true);
    } else {
      this.goToSlide(activeIndex + 1, true);
    }
  }

  goToSlide = (pageNum) => {
    this.setState({ activeIndex: pageNum });
    this.flatList.scrollToOffset({
      offset: this._rtlSafeIndex(pageNum) * this.state.width,
    });
  };

  resetTimer = () => {
    clearInterval(this.timer);
    this.timer = setInterval(this.slideChangeTimer, 4000);
  }

  // Get the list ref
  getListRef = () => this.flatList;

  _onPaginationPress = (index) => {
    const activeIndexBeforeChange = this.state.activeIndex;
    this.goToSlide(index);
    // eslint-disable-next-line
    this.props.onSlideChange && this.props.onSlideChange(index, activeIndexBeforeChange);
    this.resetTimer();
  };

  _renderItem = (flatListArgs) => {
    const { width, height } = this.state;
    const props = { ...flatListArgs, dimensions: { width, height } };
    return (
      <View style={{ width, flex: 1 }}>
        {this.props.renderItem ? (
          this.props.renderItem(props)
        ) : (
          <DefaultSlide bottomButtons {...props} />
        )}
      </View>
    );
  };

  _renderButton = (name, onPress) => {
    const show = this.props[`show${name}Button`];
    const content = this.props[`render${name}Button`]
      ? this.props[`render${name}Button`]()
      : this._renderDefaultButton(name);
    return show && this._renderOuterButton(content, name, onPress);
  };

  _onButtonPress = (func) => {
    clearInterval(this.timer);
    func();
  }

  _renderDefaultButton = (name) => {
    let content = (
      <Text style={[styles.buttonText, this.props.buttonTextStyle]}>
        {this.props[`${name.toLowerCase()}Label`]}
      </Text>
    );
    if (this.props.bottomButton) {
      content = (
        <View
          style={[
            styles.bottomButton,
            (name === 'Skip' || name === 'Prev') && {
              backgroundColor: 'transparent',
            },
            this.props.buttonStyle,
          ]}
        >
          {content}
        </View>
      );
    }
    return content;
  };

  _renderOuterButton = (content, name, onPress) => {
    const style = name === 'Skip' || name === 'Prev' ? styles.leftButtonContainer : styles.rightButtonContainer;
    return (
      <View style={!this.props.bottomButton && style}>
        <TouchableOpacity
          onPress={onPress}
          style={this.props.bottomButton ? styles.flexOne : this.props.buttonStyle}
        >
          {content}
        </TouchableOpacity>
      </View>
    );
  };

  // eslint-disable-next-line
  _renderPagination = () => {
    const { button1, button2 } = this.props;
    const pagStyle = {
      marginVertical: 30,
      alignSelf: 'center',
    };

    return (
      <View style={[styles.paginationContainer, this.props.paginationStyle]}>
        <Pagination
          slides={this.props.slides}
          activeIndex={this.state.activeIndex}
          dotStyle={this.props.dotStyle}
          activeDotStyle={this.props.activeDotStyle}
          paginationStyle={[pagStyle, this.props.paginationStyle]}
          onPaginationPress={this._onPaginationPress}
        />

        <View style={styles.bottomButtons}>
          <Button
            onPress={() => this._onButtonPress(button1.onPress)}
            backgroundColor={colors.lightYellow}
            color={colors.blue}
          >
            {button1.text}
          </Button>
          <Button
            onPress={() => this._onButtonPress(button2.onPress)}
            backgroundColor={colors.lightYellow}
            color={colors.blue}
          >
            {button2.text}
          </Button>
        </View>
      </View>
    );
  };

  _rtlSafeIndex = (i) => (isAndroidRTL ? this.props.slides.length - 1 - i : i);

  _onMomentumScrollEnd = (e) => {
    const offset = e.nativeEvent.contentOffset.x;
    // Touching very very quickly and continuous brings about
    // a variation close to - but not quite - the width.
    // That's why we round the number.
    // Also, Android phones and their weird numbers
    // eslint-disable-next-line
    const newIndex = this._rtlSafeIndex(Math.round(offset / this.state.width));
    if (newIndex === this.state.activeIndex) {
      // No page change, don't do anything
      return;
    }
    const lastIndex = this.state.activeIndex;
    this.setState({ activeIndex: newIndex });
    // eslint-disable-next-line
    this.props.onSlideChange && this.props.onSlideChange(newIndex, lastIndex);
    this.resetTimer();
  };

  _onLayout = () => {
    const { width, height } = Dimensions.get('window');
    if (width !== this.state.width || height !== this.state.height) {
      // Set new width to update rendering of pages
      this.setState({ width, height });
      // Set new scroll position
      const func = () => {
        this.flatList.scrollToOffset({
          offset: this._rtlSafeIndex(this.state.activeIndex) * width,
          animated: false,
        });
      };
      // eslint-disable-next-line
      Platform.OS === 'android' ? setTimeout(func, 0) : func();
    }
  };

  render() {
    // Separate props used by the component to props passed to FlatList
    const {
      hidePagination,
      activeDotStyle,
      dotStyle,
      skipLabel,
      doneLabel,
      nextLabel,
      prevLabel,
      buttonStyle,
      buttonTextStyle,
      renderItem,
      data,
      ...otherProps
    } = this.props;

    return (
      <View style={styles.flexOne}>
        <FlatList
          // eslint-disable-next-line
          ref={(ref) => (this.flatList = ref)}
          data={this.props.slides}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          style={styles.flatList}
          renderItem={this._renderItem}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          extraData={this.state.width}
          onLayout={this._onLayout}
          {...otherProps}
        />

        {!hidePagination && this._renderPagination()}

      </View>
    );
  }
}

AppIntroSlider.defaultProps = {
  activeDotStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  dotStyle: {
    backgroundColor: '#fff',
  },
  skipLabel: 'Skip',
  doneLabel: 'Done',
  nextLabel: 'Next',
  prevLabel: 'Back',
  buttonStyle: null,
  buttonTextStyle: null,
  paginationStyle: null,
  showDoneButton: true,
  showNextButton: true,
};
