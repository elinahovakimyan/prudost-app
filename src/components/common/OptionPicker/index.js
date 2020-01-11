import React, { useState } from 'react';
import {
  Picker, View, Text, Modal, TouchableOpacity, Alert,
} from 'react-native';

import Button from '../Button';

import styles from './styles';

function OptionPicker({
  options, value, onChange, placeholder, headerStyle,
}) {
  const [isOpen, toggleOpen] = useState(false);
  const selectedOption = options.find((o) => o.value === value);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleOpen(true)} style={[styles.header, headerStyle]}>
        <Text style={selectedOption ? styles.headerText : styles.placeholder}>
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
      </TouchableOpacity>

      <Modal
        transparent
        animationType="fade"
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
                itemStyle={{ color: '#6F6F6F' }}
                color="#6F6F6F"
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
