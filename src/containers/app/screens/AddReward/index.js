import React from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, ScrollView } from 'react-native';

import Layout from '../../../../components/shared/Layout';
import Input from '../../../../components/common/Input';
import OptionPicker from '../../../../components/common/OptionPicker';
import { addReward } from '../../redux/actions';
import { colors, getRandomInt } from '../../../../utils';
import { rewardSuggestions } from '../../data';

import { styles } from './styles';

const timeOptions = [
  { value: 0, label: 'Less than 10 min (0 points)' },
  { value: 5, label: '11 min - 1 hour (5 points)' },
  { value: 20, label: '1 - 5 hours (20 points)' },
  { value: 50, label: '1 full day (50 points)' },
  { value: 80, label: '2 - 7 days (80 points)' },
  { value: 100, label: 'More than a week (100 points)' },
];

const moneyOptions = [
  { value: 0, label: 'No money' },
  { value: 5, label: 'Less than 5 USD (5 points)' },
  { value: 20, label: '5 - 20 USD (20 points)' },
  { value: 50, label: '21 - 50 USD (50 points)' },
  { value: 80, label: '51 - 100 USD (80 points)' },
  { value: 100, label: 'More than 100 USD (100 points)' },
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

  rewardTitle = 'Reward Title'

  state = {
    title: '',
    timePoints: null,
    moneyPoints: null,
  }

  componentDidMount() {
    this.props.navigation.setParams({ submit: this.handleSubmit });

    const rewardTitleNumber = getRandomInt(rewardSuggestions.length - 1);
    const currentGoalTitle = rewardSuggestions[rewardTitleNumber];

    this.rewardTitle = currentGoalTitle;
  }

  handleSubmit = () => {
    const { profile } = this.props;
    const { title, timePoints, moneyPoints } = this.state;

    this.props.addReward({
      title,
      created_at: new Date(),
      points: timePoints + moneyPoints,
      user: profile.id,
    });
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  render() {
    const {
      title, timePoints, moneyPoints,
    } = this.state;

    return (
      <Layout style={styles.screen}>
        <ScrollView keyboardShouldPersistTaps="never">
          <Input
            underlined
            value={title}
            onChangeText={(val) => this.handleInputChange('title', val)}
            placeholder={`Title (e.g. ${this.rewardTitle})`}
            placeholderTextColor={colors.grey}
          />

          <OptionPicker
            headerStyle={styles.input}
            onChange={(val) => this.handleInputChange('timePoints', val)}
            value={timePoints}
            placeholder="How much time will it take?"
            options={timeOptions}
          />

          <OptionPicker
            headerStyle={styles.input}
            onChange={(val) => this.handleInputChange('moneyPoints', val)}
            value={moneyPoints}
            placeholder="How much money will it take?"
            options={moneyOptions}
          />

          <Text style={styles.overallPoints}>{`Overall points required: ${timePoints + moneyPoints}`}</Text>
        </ScrollView>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.App.profile,
});

const mapDispatchToProps = {
  addReward,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddReward);
