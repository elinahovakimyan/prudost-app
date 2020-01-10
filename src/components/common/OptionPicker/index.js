import React, { useState } from 'react';
import {
  Picker, View, Text, Modal, TouchableOpacity, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Button from '../Button';

import styles from './styles';

function OptionPicker({
  options, value, onChange, placeholder,
}) {
  const [isOpen, toggleOpen] = useState(false);
  const selectedOption = options.find((o) => o.value === value);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleOpen(true)} style={styles.header}>
        <Text style={styles.headerText}>{selectedOption ? selectedOption.label : placeholder}</Text>
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
            <Picker
              selectedValue={value}
              onValueChange={onChange}
            >
              <Picker.Item
                key="placeholder"
                itemStyle={{ color: 'grey' }}
                color="grey"
                label="Please select..."
                value={null}
              />

              {options.map((option) => (
                <Picker.Item key={option.value} label={option.label} value={option.value} />
              ))}
            </Picker>
            <Button buttonStyle={styles.confirmButton} onPress={() => toggleOpen(false)}>
              Confirm
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default React.memo(OptionPicker);
