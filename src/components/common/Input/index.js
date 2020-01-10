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
      onChangeText, value, keyboardType, placeholder, isPassword, autoCapitalize, maxLength,
    } = this.props;

    if (isPassword) {
      return (
        <View style={styles.inputContainer}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#515151"
            style={styles.input}
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
        placeholderTextColor="#515151"
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        style={styles.input}
        keyboardType={keyboardType}
      />
    );
  }
}

Input.defaultProps = {
  autoCapitalize: 'none',
};

export default Input;
