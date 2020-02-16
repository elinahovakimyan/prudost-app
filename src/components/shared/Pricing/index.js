import React from 'react';
import {
  Text, TouchableOpacity, View, Modal,
} from 'react-native';

import Button from '../../common/Button';
import { priceOptions } from '../../../containers/app/data';

import styles from './styles';


const PriceOption = ({ option, onPress }) => (
  <TouchableOpacity onPress={() => onPress(option.value)}>
    <View style={styles.option}>
      <Text style={styles.optionTitle}>
        {option.label}
      </Text>
      <Text style={styles.optionText}>
        {`$${option.price} paid ${option.subscription}`}
      </Text>
    </View>
  </TouchableOpacity>
);

const Pricing = ({
  onOptionPress, onClose, isVisible, label,
}) => (
  <Modal
    transparent
    animationType="slide"
    visible={isVisible}
    onRequestClose={onClose}
  >
    <TouchableOpacity style={styles.modalContainer} onPress={onClose}>
      <TouchableOpacity activeOpacity={1} onPress={() => null} style={styles.optionsContainer}>
        <View style={styles.fullWidth}>
          <Text style={styles.headerText}>{`You have hit your limit of 3 ${label}`}</Text>
          <View style={styles.line} />
          <Text style={styles.headerText}>UPGRADE YOUR ACCOUNT</Text>
          <Text style={styles.title}>Invest in your goals</Text>
          <Text style={styles.subtitle}>Unlimited goals, tasks and rewards</Text>
        </View>

        <View style={styles.fullWidth}>
          {priceOptions?.map((option) => (
            <PriceOption key={option.id} option={option} onPress={onOptionPress} />
          ))}
        </View>

        <Button
          theme="dark"
          buttonStyle={styles.doneButton}
          onPress={onClose}
        >
          Cancel
        </Button>
      </TouchableOpacity>
    </TouchableOpacity>
  </Modal>
);

export default Pricing;
