import React, { useState } from 'react';
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

const Pricing = (props) => {
  const { selectedFilters, onChange } = props;
  const [visible, toggleModal] = useState(false);

  const onOptionPress = (value) => {
    if (selectedFilters.includes(value)) {
      const updatedFilters = selectedFilters.filter((f) => f !== value);
      onChange(updatedFilters);
    } else {
      const updatedFilters = [...selectedFilters, value];
      onChange(updatedFilters);
    }
  };

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={() => { toggleModal(false); }}
    >
      <TouchableOpacity
        style={styles.modalContainer}
        onPress={() => toggleModal(false)}
      >
        <TouchableOpacity activeOpacity={1} onPress={() => null} style={styles.optionsContainer}>
          <View>
            <Text style={styles.headerText}>UPGRADE YOUR ACCOUNT</Text>
            <Text style={styles.title}>Invest in your goals</Text>
            <Text style={styles.subtitle}>Unlimited goals, tasks and rewards</Text>
          </View>

          <View style={{ width: '100%' }}>
            {priceOptions?.map((option) => (
              <PriceOption key={option.id} option={option} onPress={onOptionPress} />
            ))}
          </View>

          <Button
            theme="dark"
            buttonStyle={styles.doneButton}
            onPress={() => toggleModal(false)}
          >
              Cancel
          </Button>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default Pricing;
