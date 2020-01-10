import React from 'react';
import { connect } from 'react-redux';
import {
  Text, TouchableOpacity, TextInput,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import { addGoal } from '../../redux/actions';

import { styles } from './styles';


class AddGoal extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: null,
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
        <Text style={styles.actionText}>Publish</Text>
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

        {/* <TextInput
          multiline
          value={description}
          style={styles.textarea}
          onChangeText={this.handleStoryChange}
          placeholder="Write goal"
          placeholderTextColor="#6F6F6F"
        /> */}
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
