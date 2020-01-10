import React from 'react';
import { connect } from 'react-redux';
import {
  Text, TouchableOpacity, TextInput,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import { addGoal } from '../../redux/actions';

import { styles } from './styles';


class PublishStory extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: null,
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    ),
    headerRight: (
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
    body: '',
  }

  componentDidMount() {
    this.props.navigation.setParams({ submitGoal: this.handleSubmit });
  }

  handleSubmit = () => {
    const { title, body } = this.state;
    const { user } = this.props;

    this.props.addGoal({
      title,
      body,
      datetime: new Date(),
      author: user.id,
    });
  }

  handleTitleChange = (title) => {
    this.setState({
      title,
    });
  }

  handleStoryChange = (body) => {
    this.setState({
      body,
    });
  }

  render() {
    const { title, body } = this.state;

    return (
      <Layout style={styles.screen}>
        <TextInput
          style={[styles.titleInput, !title ? styles.placeholder : {}]}
          value={title}
          onChangeText={this.handleTitleChange}
          placeholder="Goal title"
          placeholderTextColor="#6F6F6F"
        />
        <TextInput
          multiline
          style={styles.input}
          value={body}
          onChangeText={this.handleStoryChange}
          placeholder="Write goal"
          placeholderTextColor="#6F6F6F"
        />
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
)(PublishStory);
