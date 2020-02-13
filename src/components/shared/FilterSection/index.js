import React, { useState } from 'react';
import {
  Text, TouchableOpacity, View, Image, Modal,
} from 'react-native';

import Checkbox from '../../common/Checkbox';
import Button from '../../common/Button';

import styles from './styles';


const FilterSection = (props) => {
  const { options, selectedFilters, onChange } = props;
  const [visible, toggleModal] = useState(false);

  const onFilterPress = (value) => {
    if (selectedFilters.includes(value)) {
      const updatedFilters = selectedFilters.filter((f) => f !== value);
      onChange(updatedFilters);
    } else {
      const updatedFilters = [...selectedFilters, value];
      onChange(updatedFilters);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={() => toggleModal(true)}>
        <Image style={styles.icon} source={require('../../../assets/icons/filter.png')} />
      </TouchableOpacity>

      <Modal
        transparent
        visible={visible}
        onRequestClose={() => { toggleModal(false); }}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => toggleModal(false)}
        >
          <TouchableOpacity activeOpacity={1} onPress={() => null} style={styles.optionsContainer}>
            <Text style={styles.title}>Progress</Text>
            {options?.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => onFilterPress(option.value)}
              >
                <View style={styles.option}>
                  <Checkbox isChecked={selectedFilters.includes(option.value)} />
                  <Text style={styles.optionText}>
                    {option.label}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
            <Button
              buttonStyle={styles.doneButton}
              block={false}
              onPress={() => toggleModal(false)}
            >
              Done
            </Button>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default FilterSection;
