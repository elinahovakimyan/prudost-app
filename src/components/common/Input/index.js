import React from 'react';
import {
  TextInput, TouchableOpacity, Image, View,
} from 'react-native';

import styles from './styles';

class Input extends React.PureComponent {
  state = {
    isPasswordVisible: this.props.isPassword,
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  }

  render() {
    const { isPasswordVisible } = this.state;
    const {
      onChangeText, value, keyboardType, placeholder, placeholderTextColor,
      isPassword, autoCapitalize, maxLength, underlined,
    } = this.props;
    const inputStyle = underlined ? styles.underlined : styles.input;

    if (isPassword) {
      return (
        <View style={styles.inputContainer}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor || '#515151'}
            style={inputStyle}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            secureTextEntry={isPasswordVisible}
          />

          <TouchableOpacity style={styles.iconContainer} onPress={this.togglePasswordVisibility}>
            <Image
              style={styles.icon}
              source={isPasswordVisible
                ? require('../../../assets/icons/hide.png')
                : require('../../../assets/icons/view.png')
              }
            />
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <TextInput
        value={value}
        maxLength={maxLength}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor || '#515151'}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        style={inputStyle}
        keyboardType={keyboardType}
      />
    );
  }
}

Input.defaultProps = {
  autoCapitalize: 'none',
};

export default Input;
