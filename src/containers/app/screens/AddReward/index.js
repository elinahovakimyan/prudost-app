import React from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';

import Layout from '../../../../components/shared/Layout';
import Input from '../../../../components/common/Input';
import OptionPicker from '../../../../components/common/OptionPicker';
import { addReward } from '../../redux/actions';
import { colors } from '../../../../utils/styles';

import { styles } from './styles';

const timeOptions = [
  { value: 10, label: 'Less than 1 hour (10 points)' },
  { value: 30, label: '1 - 5 hours (30 points)' },
  { value: 80, label: '1 full day (80 points)' },
  { value: 120, label: '2 - 7 days (120 points)' },
  { value: 150, label: 'More than a week (150 points)' },
];

class AddReward extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'New Reward',
    headerTintColor: '#fff',
    headerStyle: styles.headerStyle,
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        style={styles.actionTextContainer}
        onPress={navigation.getParam('submit')}
      >
        <Text style={styles.actionText}>Add</Text>
      </TouchableOpacity>
    ),
  });

  state = {
    title: '',
    points: null,
  }

  componentDidMount() {
    this.props.navigation.setParams({ submit: this.handleSubmit });
  }

  handleSubmit = () => {
    const { title, points } = this.state;

    this.props.addReward({
      title,
      points,
      datetime: new Date(),
    });
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  render() {
    const { title, points } = this.state;

    return (
      <Layout style={styles.screen}>
        <Input
          underlined
          value={title}
          onChangeText={(val) => this.handleInputChange('title', val)}
          placeholder="Reward title"
          placeholderTextColor={colors.grey}
        />

        <OptionPicker
          headerStyle={styles.input}
          onChange={(val) => this.handleInputChange('points', val)}
          value={points}
          placeholder="How much time will it take?"
          options={timeOptions}
        />

      </Layout>
    );
  }
}

const mapDispatchToProps = {
  addReward,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddReward);
