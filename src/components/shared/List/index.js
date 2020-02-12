import React from 'react';
import {
  TouchableOpacity, View, Image, Text,
} from 'react-native';

import styles from './styles';


function List({ list, style }) {
  return (
    <View style={[styles.container, style]}>
      {list.map((item, i) => (
        <TouchableOpacity
          key={item.text}
          activeOpacity={0.8}
          style={[styles.listItem, i === 0 ? { borderTopWidth: 0 } : {}]}
          onPress={item.onPress}
        >
          <View style={styles.listItemContent}>
            <Image style={styles.icon} source={item.icon} />
            <Text style={styles.text}>{item.text}</Text>
          </View>

          {item.onPress && (
            <Image style={styles.nextIcon} source={require('../../../assets/icons/next.png')} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default React.memo(List);
