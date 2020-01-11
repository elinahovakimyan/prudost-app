import React from 'react';
import { connect } from 'react-redux';
import {
  Text, TouchableOpacity, TextInput,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import OptionPicker from '../../../../components/common/OptionPicker';
import { addGoal } from '../../redux/actions';

import { styles } from './styles';


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
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(val) => this.handleInputChange('title', val)}
          placeholder="Goal title"
          placeholderTextColor="#6F6F6F"
        />

        <TextInput
          multiline
          style={styles.input}
          value={description}
          onChangeText={(val) => this.handleInputChange('description', val)}
          placeholder="Why is this goal important?"
          placeholderTextColor="#6F6F6F"
        />

        <OptionPicker
          headerStyle={styles.input}
          placeholder="Goal category"
          options={[{ value: 'val', label: 'option' }]}
        />

        <Text style={styles.sectionTitle}>TASKS</Text>

        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(val) => this.handleInputChange('title', val)}
          placeholder="Add a task"
          placeholderTextColor="#6F6F6F"
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
