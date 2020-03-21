import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { formatDate } from '../../../utils';
import DateTimePicker from '../DateTimePicker';

import { styles } from './styles';

const DateInput = ({
  value, onChange, mode, placeholder,
}) => {
  const [visible, toggle] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => toggle(true)} style={styles.dateInput}>
        {value
          ? <Text style={styles.dateInputText}>{formatDate(value)}</Text>
          : <Text style={styles.placeholder}>{placeholder}</Text>}
      </TouchableOpacity>

      <DateTimePicker
        visible={visible}
        onClose={() => toggle(false)}
        mode={mode}
        value={value || new Date()}
        onChange={onChange}
      />
    </View>
  );
};

export default React.memo(DateInput);
