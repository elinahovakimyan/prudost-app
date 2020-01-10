import React from 'react';
import { connect } from 'react-redux';
import {
  Image, TouchableOpacity, FlatList, View, Text, TextInput, KeyboardAvoidingView, Keyboard,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import CommentBox from '../../../../components/shared/CommentBox';
import { getComments, addComment } from '../../redux/actions';

import { styles } from './styles';


class Comments extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Comments',
    headerTitleStyle: styles.headerTitle,
    headerLayoutPreset: 'center',
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.backIcon} source={require('../../../../assets/icons/backIcon.png')} />
      </TouchableOpacity>
    ),
    headerRight: () => <View />,
  });

  state = {
    comment: '',
    isKeyboardOpen: false,
  }

  componentDidMount() {
    // const { navigation } = this.props;
    // const { goalId } = navigation.state.params;

    // this.props.getComments(goalId);

    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({
      isKeyboardOpen: true,
    });
  }

  _keyboardDidHide = () => {
    this.setState({
      isKeyboardOpen: false,
    });
  }


  renderItem = (item) => (
    <CommentBox
      body={item.body}
      username={item.username || 'Unknown'}
      date={item.datetime}
    />
  );

  onChange = (comment) => {
    this.setState({ comment });
  }

  handleSubmit = () => {
    // const { comment } = this.state;
    // const { navigation, user } = this.props;
    // const { goalId } = navigation.state.params;

    // this.setState({ comment: '' });
    // this.props.addComment({
    //   goal: goalId,
    //   body: comment,
    //   datetime: new Date(),
    //   person: user.id,
    // });
  }

  render() {
    const { allComments } = this.props;
    // const { goalId } = navigation.state.params;
    const { comment, isKeyboardOpen } = this.state;
    const comments = allComments[0] || [];
    console.log('isKeyboardOpen :', isKeyboardOpen);

    return (
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100}>
        <Layout style={styles.screen}>

          <View style={styles.container}>
            <FlatList
              data={comments}
              renderItem={({ item }) => this.renderItem(item)}
              keyExtractor={(item) => String(item.id)}
              ListFooterComponent={<View style={styles.footer} />}
              ListHeaderComponent={(
                <View style={isKeyboardOpen
                  ? styles.headerWithKeyboard : styles.header}
                />
              )}
              ListEmptyComponent={<Text style={styles.emptyText}>Be the first to comment.</Text>}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              multiline
              value={comment}
              onChangeText={this.onChange}
              placeholderTextColor="#515151"
              style={styles.input}
              placeholder="Type here..."
            />

            <Text
              style={styles.sendText}
              onPress={this.handleSubmit}
            >
              Send
            </Text>
          </View>
        </Layout>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => ({
  allComments: state.App.comments,
  user: state.Auth.user,
});

const mapDispatchToProps = {
  addComment,
  getComments,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);
