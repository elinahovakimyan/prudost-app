import React from 'react';
import DatePicker from 'react-native-datepicker';

import styles from './styles';


class CustomDatePicker extends React.PureComponent {
  render() {
    const {
      value, onChange, placeholder, format, inputStyle,
    } = this.props;

    return (
      <DatePicker
        style={styles.container}
        customStyles={{
          btnTextConfirm: styles.btnTextConfirm,
          dateInput: [styles.dateInput, inputStyle],
          placeholderText: styles.placeholderText,
          dateText: styles.dateText,
        }}
        date={value}
        placeholder={placeholder || 'Select date'}
        mode="date"
        minDate={new Date()}
        format={format}
        minuteInterval={10}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        onDateChange={onChange}
      />
    );
  }
}

CustomDatePicker.defaultProps = {
  format: 'DD/MM/YYYY',
};

export default React.memo(CustomDatePicker);
