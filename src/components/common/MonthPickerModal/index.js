import React, { useState } from 'react';
import {
  View, Text, Modal, TouchableOpacity, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import moment from 'moment';

import Button from '../Button';
import MonthPicker from '../MonthPicker';

import styles from './styles';

function MonthPickerModal({
  value, onChange, placeholder,
}) {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleOpen(true)} style={styles.header}>
        <Text style={styles.headerText}>{value ? moment(value).format('MM/YYYY') : placeholder}</Text>
        <Icon name="chevron-thin-down" size={20} />
      </TouchableOpacity>

      <Modal
        transparent
        animationType="slide"
        visible={isOpen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <MonthPicker
              selectedDate={value || new Date()}
              onMonthTapped={onChange}
            />
            <Button buttonStyle={styles.confirmButton} onPress={() => toggleOpen(false)}>
              Confirm
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default React.memo(MonthPickerModal);
