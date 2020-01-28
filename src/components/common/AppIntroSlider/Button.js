import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './Button.style';

function Button(props) {
  const {
    onPress, buttonStyle, textStyle, children, backgroundColor, color,
  } = props;
  const buttonStyles = [
    styles.button,
    backgroundColor ? { backgroundColor } : {},

    buttonStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
    >
      <Text
        uppercase={false}
        style={[styles.buttonText, color ? { color } : {}, textStyle]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  block: true,
};

export default React.memo(Button);
