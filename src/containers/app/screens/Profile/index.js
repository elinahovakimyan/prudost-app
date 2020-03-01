import React from 'react';
import { connect } from 'react-redux';
import {
  Text, View, ScrollView, ActivityIndicator,
} from 'react-native';

import Button from '../../../../components/common/Button';
import Score from '../../../../components/shared/Score';
import List from '../../../../components/shared/List';
import WebviewComponent from '../../../../components/shared/WebviewComponent';
import { clearAccessToken } from '../../../auth/redux/actions';
import { logout, getAllTasks } from '../../redux/actions';
import Pricing from '../../../../components/shared/Pricing';

import { styles } from './styles';

const termsUrl = 'https://prudost.com/terms-and-conditions';
const privacyUrl = 'https://prudost.com/privacy-policy-2';

class Profile extends React.PureComponent {
  static navigationOptions = () => ({
    headerShown: false,
  });

  state = {
    showWebview: false,
    currentWebviewUrl: '',
    isPricingVisible: false,
  }

  componentDidMount() {
    this.props.getAllTasks();
  }

  handleLogout = () => {
    this.props.clearAccessToken();
    this.props.logout();
  }

  showWebview = (url) => {
    this.setState({
      currentWebviewUrl: url,
      showWebview: true,
    });
  }

  togglePricingModal = (isVisible) => {
    this.setState({
      isPricingVisible: isVisible,
    });
  }

  render() {
    const { showWebview, currentWebviewUrl, isPricingVisible } = this.state;
    const {
      isLoading, profile, completedGoals, usedRewards, completedTasks,
    } = this.props;
    const links = [
      {
        text: 'Upgrade membership',
        icon: require('../../../../assets/icons/upgrade.png'),
        onPress: () => this.togglePricingModal(true),
      },
      {
        text: `${completedGoals?.length} completed goals`,
        icon: require('../../../../assets/icons/goal.png'),
      },
      {
        text: `${completedTasks?.length} completed tasks`,
        icon: require('../../../../assets/icons/reward.png'),
      },
      {
        text: `${usedRewards?.length} enjoyed rewards`,
        icon: require('../../../../assets/icons/gift.png'),
      },
    ];

    if (isLoading) {
      return <ActivityIndicator />;
    }

    return (
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={styles.mainContainer}>
          <View>
            <View style={styles.content}>
              <Score title={`${profile.name || 'Unknown'}, your current score is:`} score={profile.score} />
            </View>

            <View style={styles.listContainer}>
              <List style={styles.list} list={links} />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button onPress={this.handleLogout} theme="dark">Log out</Button>

            <View style={styles.footer}>
              <Text
                style={[styles.link, styles.rightAlign]}
                onPress={() => this.showWebview(privacyUrl)}
              >
              Privacy Policy
              </Text>
              <View style={styles.circle} />
              <Text
                style={styles.link}
                onPress={() => this.showWebview(termsUrl)}
              >
              Terms & Conditions
              </Text>
            </View>
          </View>


          <Pricing
            isVisible={isPricingVisible}
            onClose={() => this.togglePricingModal(false)}
          />
        </ScrollView>

        {showWebview && currentWebviewUrl && (
          <WebviewComponent key={currentWebviewUrl} uri={currentWebviewUrl} />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.App.isLoading,
  completedGoals: state.App.goals.filter((g) => g.completed),
  completedTasks: state.App.allTasks.filter((t) => t.completed),
  usedRewards: state.App.rewards.filter((r) => r.used),
  profile: state.App.profile,
});

const mapDispatchToProps = {
  logout,
  clearAccessToken,
  getAllTasks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
