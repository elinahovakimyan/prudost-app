import React from 'react';
import {
  View, Modal, Text, TouchableOpacity,
} from 'react-native';

import styles from './styles';


function BottomModal({ visible, onClose, children }) {
  return (
    <Modal transparent visible={visible}>
      <TouchableOpacity activeOpacity={1} onPress={onClose} style={styles.modalContainer}>
        <TouchableOpacity activeOpacity={1} style={styles.pickerContainer}>
          <View style={styles.header}>
            <Text style={styles.cancelText} onPress={onClose}>Cancel</Text>
            <Text style={styles.doneText} onPress={onClose}>Done</Text>
          </View>
          {children}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

export default BottomModal;
