import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  View, Text, SectionList, Alert,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import RewardCard from '../../../../components/shared/RewardCard';
import AddButton from '../../../../components/common/AddButton';
import Pricing from '../../../../components/shared/Pricing';
import CongratsModal from '../../../../components/shared/CongratsModal';
import {
  getRewards, updateReward, deleteReward, updateProfile,
} from '../../redux/actions';
import { colors } from '../../../../utils';

import { styles } from './styles';

const Rewards = (props) => {
  const { rewards, profile, isLoading } = props;
  const [sortedRewards, setSortedRewards] = useState([]);
  const [isPricingVisible, togglePricingModal] = useState(false);
  const [modalVisible, toggleModal] = useState(false);

  const sortRewards = () => {
    const lockedRewards = [];
    const unlockedRewards = [];

    rewards.forEach((reward) => {
      const isUnlocked = profile.score >= reward.points;

      if (isUnlocked) {
        unlockedRewards.push(reward);
      } else {
        lockedRewards.push(reward);
      }
    });

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

    setSortedRewards(data);
  };

  useEffect(() => {
    sortRewards();
  }, [rewards, profile]);

  const handleRewardUse = (reward) => {
    toggleModal(true);
    props.updateReward({ id: reward.id, used: true });
    props.updateProfile({
      id: profile.id,
      score: profile.score - reward.points,
    });
  };

  const handleAddReward = () => {
    // if (rewards.length >= 3 && !profile.is_upgraded) {
    //   togglePricingModal(true);
    // } else {
    props.navigation.push('AddReward');
    // }
  };

  const handleUsePress = (reward) => {
    Alert.alert(
      'You deserve it!',
      'Are you sure you want to use this reward now?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => handleRewardUse(reward) },
      ],
    );
  };

  const renderItem = ({ item }) => (
    <RewardCard
      item={item}
      isUnlocked={profile.score >= item.points}
      pointsRemaining={item.points - profile.score}
      onUse={handleUsePress}
      onUpdate={props.updateReward}
      onDelete={props.deleteReward}
    />
  );

  const renderNoContent = ({ section }) => {
    if (section?.data?.length === 0) {
      return <Text style={styles.emptyText}>No rewards found.</Text>;
    }
    return null;
  };

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  );

  return (
    <Layout style={styles.screen}>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreLabel}>Score: </Text>
        <Text style={styles.scoreText}>{profile.score}</Text>
      </View>

      <SectionList
        sections={sortedRewards}
        refreshing={isLoading}
        style={styles.listContainer}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        renderSectionFooter={renderNoContent}
        ListFooterComponent={<View style={styles.lastFooter} />}
        ListEmptyComponent={!isLoading
          && <Text style={styles.emptyText}>No rewards found.</Text>}
      />

      <AddButton onPress={handleAddReward} />

      <CongratsModal type="reward" visible={modalVisible} onClose={() => toggleModal(false)} />

      <Pricing
        label="rewards"
        isVisible={isPricingVisible}
        onClose={() => togglePricingModal(false)}
        onOptionPress={() => { }}
      />
    </Layout>
  );
};

Rewards.navigationOptions = () => ({
  headerTitle: 'Rewards',
  headerTintColor: colors.white,
  headerShown: false,
});

const mapStateToProps = (state) => ({
  rewards: state.App.rewards.filter((r) => !r.used),
  isLoading: state.App.isLoading,
  profile: state.App.profile,
  rewardsError: state.App.errors.Rewards,
});

const mapDispatchToProps = {
  getRewards,
  updateReward,
  deleteReward,
  updateProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Rewards);
