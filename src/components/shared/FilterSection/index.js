import React, { useState } from 'react';
import {
  Text, TouchableOpacity, View, Image, Modal,
} from 'react-native';

import Checkbox from '../../common/Checkbox';
import Button from '../../common/Button';

import styles from './styles';


const FilterSection = (props) => {
  const { options, style } = props;
  const [visible, toggleModal] = useState(true);

  const handleSelect = (option) => {
    props.onChange(option);
    toggleModal(false);
  };

  return (
    <View style={[styles.container, style]}>
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
          onPress={() => { toggleModal(false); }}
        >
          <TouchableOpacity activeOpacity={1} onPress={() => null} style={styles.optionsContainer}>
            <Text style={styles.title}>Progress</Text>
            {options?.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => handleSelect(option)}
              >
                <View style={styles.option}>
                  <Checkbox isChecked={option.id !== 3} />
                  <Text style={styles.optionText}>
                    {option.label || option.name}
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
    </View>
  );
};

export default FilterSection;
