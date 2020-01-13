import React from 'react';
import { connect } from 'react-redux';
import {
  FlatList, View, Text, RefreshControl, Image, TouchableOpacity, Alert, ScrollView,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import RewardCard from '../../../../components/shared/RewardCard';
import Score from '../../../../components/shared/Score';
import { getRewards } from '../../redux/actions';
import { colors } from '../../../../utils/styles';

import { styles } from './styles';

// TODO: this should come from redux
const score = 40;

class Rewards extends React.PureComponent {
  static navigationOptions = () => ({
    headerTitle: 'Rewards',
    headerTintColor: colors.white,
    headerShown: false,
    // headerTitleStyle: styles.headerTitle,
    // headerStyle: {
    //   backgroundColor: colors.blue,
    // },
  });

  componentDidMount() {
    this.props.getRewards();
  }

  renderItem = (item) => (
    <RewardCard
      title={item.title}
      pointsRequired={item.pointsRequired}
      isUnlocked={score > item.pointsRequired}
      pointsRemaining={item.pointsRequired - score}
      onPress={() => {}}
    />
  )

  handleDelete = () => {
    Alert.alert(
      'Delete the reward?',
      'Are you sure you want to delete this reward?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }

  sortRewards = () => {
    const { rewards } = this.props;
    const lockedRewards = [];
    const unlockedRewards = [];

    rewards.forEach((reward) => {
      const isUnlocked = score > reward.pointsRequired;

      if (isUnlocked) {
        unlockedRewards.push(reward);
      } else {
        lockedRewards.push(reward);
      }
    });

    return { lockedRewards, unlockedRewards };
  }


  render() {
    const { isLoading, navigation } = this.props;
    // TODO: optimize this operation in order not to do with every render
    const { lockedRewards, unlockedRewards } = this.sortRewards();
    const data = [
      {
        title: 'Unlocked rewards 🎉',
        data: unlockedRewards,
      },
      {
        title: 'Work harder to unlock! 💪',
        data: lockedRewards,
      },
    ];


    return (
      <Layout style={styles.screen}>

        <ScrollView style={styles.contentContainer}>
          <Score score={score} />

          {/* TODO: make this work */}
          {/* <SectionList
            sections={data}
            refreshing={isLoading}
            refreshControl={<RefreshControl refreshing={isLoading} />}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => this.renderItem(item)}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionTitle}>{title}</Text>
            )}
            ListFooterComponent={<View style={styles.lastFooter} />}
            ListEmptyComponent={!isLoading
              && <Text style={styles.emptyText}>No rewards found.</Text>}
          /> */}

          {data.map((section, i) => (
            <React.Fragment key={section.title}>
              <Text style={styles.sectionTitle}>{section.title}</Text>

              <FlatList
                data={section.data || []}
                style={styles.container}
                refreshing={isLoading}
                refreshControl={<RefreshControl refreshing={isLoading} />}
                renderItem={({ item }) => this.renderItem(item)}
                keyExtractor={(item) => String(item.id)}
                ListFooterComponent={<View style={i > 0 ? styles.lastFooter : styles.footer} />}
                ListEmptyComponent={!isLoading
                  && <Text style={styles.emptyText}>No rewards found.</Text>}
              />
            </React.Fragment>
          ))}

        </ScrollView>

        <TouchableOpacity
          onPress={() => navigation.push('AddReward')}
          style={styles.plusContainer}
        >
          <Image
            style={styles.plusIcon}
            source={require('../../../../assets/icons/plus_white.png')}
          />
        </TouchableOpacity>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  rewards: state.App.rewards,
  isLoading: state.App.isLoading,
  rewardsError: state.App.errors.Rewards,
});

const mapDispatchToProps = {
  getRewards,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Rewards);
