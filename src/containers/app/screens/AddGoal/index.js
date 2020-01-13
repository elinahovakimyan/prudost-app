import React from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';

import Layout from '../../../../components/shared/Layout';
import Input from '../../../../components/common/Input';
import OptionPicker from '../../../../components/common/OptionPicker';
import { addGoal } from '../../redux/actions';

import { styles } from './styles';
import { colors } from '../../../../utils/styles';


class AddGoal extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'New Goal',
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
        onPress={navigation.getParam('submitGoal')}
      >
        <Text style={styles.actionText}>Add</Text>
      </TouchableOpacity>
    ),
  });

  state = {
    title: '',
    description: '',
  }

  componentDidMount() {
    this.props.navigation.setParams({ submitGoal: this.handleSubmit });
  }

  handleSubmit = () => {
    const { title, description } = this.state;
    const { user } = this.props;

    this.props.addGoal({
      title,
      description,
      datetime: new Date(),
      author: user.id,
    });
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  render() {
    const { title, description } = this.state;

    return (
      <Layout style={styles.screen}>
        <Input
          underlined
          value={title}
          onChangeText={(val) => this.handleInputChange('title', val)}
          placeholder="Goal title"
          placeholderTextColor={colors.grey}
        />

        <Input
          multiline
          underlined
          value={description}
          onChangeText={(val) => this.handleInputChange('description', val)}
          placeholder="Why is this goal important?"
          placeholderTextColor={colors.grey}
        />

        <OptionPicker
          headerStyle={styles.input}
          placeholder="Goal category"
          options={[{ value: 'val', label: 'option' }]}
        />

        <Text style={styles.sectionTitle}>TASKS</Text>

        <Input
          underlined
          value={title}
          onChangeText={(val) => this.handleInputChange('title', val)}
          placeholder="Add a task"
          placeholderTextColor={colors.grey}
        />

        <Text style={styles.newTask}>+ Add a new task</Text>

      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.Auth.user,
});

const mapDispatchToProps = {
  addGoal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddGoal);
