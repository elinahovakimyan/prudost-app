import React from 'react';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import BottomModal from '../BottomModal';

function DatePicker({
  visible, mode, value, onChange, onClose, onDone,
}) {
  const handleChange = (event, date) => {
    if (Platform.OS === 'android') {
      onClose();
    }

    if (date) {
      onChange(date);
    }
  };

  const getDateTimePicker = () => (
    <DateTimePicker
      is24Hour
      mode={mode}
      value={value}
      onChange={handleChange}
      display="default"
      testID="dateTimePicker"
      timeZoneOffsetInMinutes={0}
    />
  );

  if (Platform.OS === 'ios') {
    return (
      <BottomModal visible={visible} onClose={onClose} onDone={onDone}>
        {getDateTimePicker()}
      </BottomModal>
    );
  }

  return visible ? getDateTimePicker() : null;
}

DatePicker.defaultProps = {
  mode: 'date', // 'date' or 'time'
};

export default DatePicker;
