import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Button(props) {
  const {
    onPress, outlined, block, buttonStyle, textStyle, theme, icon, circled, children,
  } = props;
  const buttonStyles = [
    styles.button,
    outlined ? styles.outlined : {},
    block ? styles.block : {},
    circled ? styles.circled : {},
    theme === 'light' ? styles.light : styles.dark,
    buttonStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
    >
      {icon || null}
      <Text
        uppercase={false}
        style={[styles.buttonText, textStyle, circled ? styles.circledText : {}]}
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
