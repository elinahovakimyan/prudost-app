import React from 'react';
import {
  Text, TouchableOpacity, View, Modal, Alert,
} from 'react-native';

import { connect } from 'react-redux';
import Button from '../../common/Button';
import { priceOptions } from '../../../containers/app/data';
import { updateProfile } from '../../../containers/app/redux/actions';

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
  const { onClose, isVisible, label } = props;

  const handleOptionPress = (option) => {
    props.updateProfile({
      id: props.profile.id, is_upgraded: true, subscription_option: option.subscription,
    });

    Alert.alert('Successfully upgraded!', '', [
      { text: 'OK', onPress: () => onClose() },
    ]);
  };

  return (
    <Modal
      transparent
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.modalContainer} onPress={onClose}>
        <TouchableOpacity activeOpacity={1} onPress={() => null} style={styles.optionsContainer}>
          <View style={styles.fullWidth}>

            {label && (
              <>
                <Text style={styles.headerText}>{`You have hit your limit of 3 ${label}`}</Text>
                <View style={styles.line} />
              </>
            )}
            <Text style={styles.headerText}>UPGRADE YOUR ACCOUNT</Text>
            <Text style={styles.title}>Invest in your goals</Text>
            <Text style={styles.subtitle}>Unlimited goals, tasks and rewards</Text>
          </View>

          <View style={[styles.fullWidth, { marginTop: 16 }]}>
            {priceOptions?.map((option) => (
              <PriceOption
                key={option.id}
                option={option}
                onPress={() => handleOptionPress(option)}
              />
            ))}
          </View>

          <View style={[styles.fullWidth, { marginTop: 8 }]}>
            <Button
              theme="light"
              buttonStyle={styles.cancelButton}
              onPress={onClose}
            >
              Cancel
            </Button>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  profile: state.App.profile,
});

const mapDispatchToProps = {
  updateProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);
