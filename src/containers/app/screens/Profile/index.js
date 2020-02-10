import React from 'react';
import { connect } from 'react-redux';
import {
  FlatList, Text, RefreshControl, View,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import Button from '../../../../components/common/Button';
import StatCard from '../../../../components/shared/StatCard';
import Score from '../../../../components/shared/Score';
import { clearAccessToken } from '../../../auth/redux/actions';
import { logout } from '../../redux/actions';
import { colors } from '../../../../utils';

import { styles } from './styles';
import List from '../../../../components/shared/List';

// TODO: this should come from redux
const score = 40;

class Profile extends React.PureComponent {
  static navigationOptions = () => ({
    headerTitle: 'Profile',
    headerTintColor: colors.white,
    headerShown: false,
    // headerTitleStyle: styles.headerTitle,
    // headerStyle: {
    //   backgroundColor: colors.blue,
    // },
  });

  handleLogout = () => {
    this.props.clearAccessToken();
    this.props.logout();
  }

  renderItem = (item) => (
    <StatCard
      title={item.title}
      number={item.number}
    />
  )

  render() {
    const { isLoading } = this.props;
    const data = [
      {
        number: 22,
        title: 'Completed goals',
      },
      {
        number: 49,
        title: 'Completed tasks',
      },
      {
        number: 56,
        title: 'Habit activities',
      },
      {
        number: 56,
        title: 'Unlocked rewards',
      },
    ];
    const links = [
      {
        text: 'Invite a friend to get 10 points',
        icon: require('../../../../assets/icons/gift.png'),
        onPress: () => {},
      },
      {
        text: 'Get tips and tricks for this app',
        icon: require('../../../../assets/icons/idea.png'),
        onPress: () => {},
      },
    ];
    console.log('this.props.profile :', this.props.profile);


    return (
      <Layout style={styles.screen}>
        <View style={styles.content}>
          <Score score={score} numberStyle={styles.scoreText} titleStyle={styles.titleText} />
        </View>

        <View style={styles.listContainer}>
          <List style={styles.list} list={links} />
        </View>

        <View>
          <FlatList
            data={data}
            numColumns={2}
            style={styles.container}
            refreshing={isLoading}
            refreshControl={<RefreshControl refreshing={isLoading} />}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={(item) => String(item.title)}
            // ListFooterComponent={<View style={styles.listFooter} />}
            ListEmptyComponent={!isLoading
              && <Text style={styles.emptyText}>No rewards found.</Text>}
          />
        </View>

        <Button buttonStyle={{ margin: 16 }} onPress={this.handleLogout} theme="dark">Log out</Button>

        <View style={styles.footer}>
          <Text style={styles.link}>Terms and Conditions</Text>
          <View style={styles.circle} />
          <Text style={styles.link}>Privacy Policy</Text>
        </View>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.App.isLoading,
  profile: state.App.profile,
});

const mapDispatchToProps = {
  logout,
  clearAccessToken,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
