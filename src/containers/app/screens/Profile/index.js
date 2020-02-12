import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import Layout from '../../../../components/shared/Layout';
import Button from '../../../../components/common/Button';
import Score from '../../../../components/shared/Score';
import List from '../../../../components/shared/List';
import { clearAccessToken } from '../../../auth/redux/actions';
import { logout, getAllTasks } from '../../redux/actions';
import { colors } from '../../../../utils';

import { styles } from './styles';


class Profile extends React.PureComponent {
  static navigationOptions = () => ({
    headerTitle: '',
    headerTintColor: colors.white,
    headerTitleStyle: styles.headerTitle,
    headerStyle: {
      backgroundColor: colors.blue,
    },
  });

  componentDidMount() {
    this.props.getAllTasks();
  }

  handleLogout = () => {
    this.props.clearAccessToken();
    this.props.logout();
  }

  render() {
    const {
      isLoading, profile, completedGoals, usedRewards, completedTasks,
    } = this.props;
    const links = [
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

    return (
      <Layout isLoading={isLoading} style={styles.screen}>
        <View>
          <View style={styles.content}>
            <Score score={profile.score} />
          </View>

          <View style={styles.listContainer}>
            <List style={styles.list} list={links} />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={this.handleLogout} theme="dark">Log out</Button>

          <View style={styles.footer}>
            <Text style={[styles.link, styles.rightAlign]}>Privacy Policy</Text>
            <View style={styles.circle} />
            <Text style={styles.link}>Terms & Conditions</Text>
          </View>
        </View>

      </Layout>
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
