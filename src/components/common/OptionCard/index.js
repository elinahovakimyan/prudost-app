import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './styles';

function OptionCard(props) {
  const {
    onPress, containerStyle, children, isSelected,
  } = props;
  const containerStyles = [
    styles.container,
    isSelected ? styles.light : styles.dark,
    containerStyle,
  ];

  return (
    <TouchableOpacity style={containerStyles} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

OptionCard.defaultProps = {
  theme: 'light',
};

export default React.memo(OptionCard);
