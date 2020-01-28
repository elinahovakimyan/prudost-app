import React from 'react';
import { View, Picker } from 'react-native';

import { range } from '../../../utils';

import styles from './styles';

const ages = range(1, 100);
// const agesForAndroid = ages.map((age) => String(age));
const defaultAge = 10;

const AgePicker = ({ age, onChange }) => (
  <View style={styles.container}>
    <Picker
      selectedValue={age || defaultAge}
      onValueChange={(itemValue) => onChange(itemValue)}
      itemStyle={styles.number}
      mode="dialog"
      prompt="Select your age"
    >
      {ages.map((item) => (
        <Picker.Item key={item} label={String(item)} value={item} />
      ))}
    </Picker>
  </View>
);

export default React.memo(AgePicker);
