import React from 'react';
import {
  Image, TouchableOpacity, Text, FlatList, View, TextInput,
} from 'react-native';
import { connect } from 'react-redux';

import Layout from '../../../../components/shared/Layout';
import { logout, updateUser } from '../../../auth/redux/actions';
import StorageUtils from '../../../auth/helpers/storage';

import { styles } from './styles';
import WebviewComponent from '../../../../components/shared/WebviewComponent';

class Menu extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.state.routeName,
    headerTitleStyle: styles.headerTitle,
    headerLayoutPreset: 'center',
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.backIcon} source={require('../../../../assets/icons/backIcon.png')} />
      </TouchableOpacity>
    ),
    headerRight: <View />,
  });

  state = {
    isEditing: false,
    showWebview: false,
    currentWebviewUrl: '',
    username: this.props.user.username,
  }

  changeEditMode = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }), () => {
      if (this.state.isEditing === false) {
        this.props.updateUser(this.props.user.id, {
          username: this.state.username,
        });
      }
    });
  }

  showWebview = (url) => {
    this.setState({
      currentWebviewUrl: url,
      showWebview: true,
    });
  }

  changeUsername = (username) => {
    this.setState({
      username,
    });
  }

  handleLogout = () => {
    const { navigation } = this.props;

    StorageUtils.setAccessToken('');
    this.props.logout();
    navigation.navigate('Auth');
  }

  getListItems = () => {
    const { navigation } = this.props;
    const termsUrl = '';
    const privacyUrl = '';

    const listItems = [
      {
        title: 'My Goals',
        onPress: () => navigation.push('MyGoals'),
      },
      {
        title: 'My Comments',
        onPress: () => navigation.push('MyComments'),
      },
      {
        title: 'Terms of Service',
        onPress: () => this.showWebview(termsUrl),
      },
      {
        title: 'Privacy Policy',
        onPress: () => this.showWebview(privacyUrl),
      },
      {
        title: 'Feedback',
        onPress: () => navigation.push('Feedback'),
      },
      {
        title: 'Sign out',
        onPress: this.handleLogout,
      },
    ];

    return listItems;
  }

  renderListItem = (item) => (
    <TouchableOpacity style={styles.listItemContainer} onPress={item.onPress}>
      <Text style={styles.listItemText}>{item.title}</Text>
    </TouchableOpacity>
  )

  render() {
    const listItems = this.getListItems();
    const {
      isEditing, username, currentWebviewUrl, showWebview,
    } = this.state;

    return (
      <Layout style={styles.screen}>
        <View style={styles.nameContainer}>
          {isEditing
            ? (
              <TextInput
                autoFocus
                style={styles.nameText}
                value={username}
                onChangeText={this.changeUsername}
              />
            )
            : <Text style={styles.nameText}>{username}</Text>
          }
          {/* <TouchableOpacity onPress={this.changeEditMode}>
            <Image
              style={styles.editIcon}
              source={isEditing
                ? require('../../../../assets/icons/doneIcon.png')
                : require('../../../../assets/icons/editIcon.png')
              }
            />
          </TouchableOpacity> */}
        </View>

        <FlatList
          data={listItems}
          renderItem={({ item }) => this.renderListItem(item)}
          keyExtractor={(item) => item.title}
        />

        {showWebview && currentWebviewUrl && (
          <WebviewComponent key={currentWebviewUrl} uri={currentWebviewUrl} />
        )}
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.Auth.user || {},
});

const mapDispatchToProps = {
  logout,
  updateUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
