import React from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';

import Switch from '../../../../components/common/Switch';
import Layout from '../../../../components/shared/Layout';
import Input from '../../../../components/common/Input';
import { addReward } from '../../redux/actions';
import { colors } from '../../../../utils';

import { styles } from './styles';


class AddReward extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'New Reward',
    headerTintColor: colors.white,
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
    weekendsOff: false,
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
    const { title } = this.state;

    return (
      <Layout style={styles.screen}>
        <Input
          underlined
          value={title}
          onChangeText={(val) => this.handleInputChange('title', val)}
          placeholder="Habit title"
          placeholderTextColor={colors.grey}
        />


        <View style={styles.weekendsContainer}>
          <Text style={styles.label}>Weekends off</Text>
          <Switch
            changeValueImmediately
            value={this.state.weekendsOff}
            onValueChange={(val) => this.handleInputChange('weekendsOff', val)}
            circleSize={24}
            circleBorderWidth={2}
            backgroundActive={colors.yellow}
            backgroundInactive={colors.lightYellow}
            circleActiveColor={colors.blue}
            circleInActiveColor={colors.grey}
            circleInactiveBorderColor={colors.white}
            circleActiveBorderColor={colors.white}
          />
        </View>

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
