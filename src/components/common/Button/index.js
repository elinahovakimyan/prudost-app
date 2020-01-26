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
    theme === 'dark' ? styles.dark : styles.light,
    buttonStyle,
  ];
  const textStyles = [
    styles.buttonText,
    theme === 'dark' ? styles.lightText : styles.darkText,
    circled ? styles.circledText : {},
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
    >
      {icon || null}
      <Text
        uppercase={false}
        style={textStyles}
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
