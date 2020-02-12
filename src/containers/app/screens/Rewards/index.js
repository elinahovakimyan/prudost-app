import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, SectionList } from 'react-native';

import Layout from '../../../../components/shared/Layout';
import RewardCard from '../../../../components/shared/RewardCard';
import AddButton from '../../../../components/common/AddButton';
import CongratsModal from '../../../../components/shared/CongratsModal';
import {
  getRewards, updateReward, deleteReward, updateProfile,
} from '../../redux/actions';
import { colors } from '../../../../utils';

import { styles } from './styles';

const Rewards = (props) => {
  const {
    rewards, profile, isLoading, navigation,
  } = props;
  const [sortedRewards, setSortedRewards] = useState([]);
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
    props.updateProfile({
      id: profile.id,
      score: profile.score - reward.points,
    });
  };

  const renderItem = (item) => (
    <RewardCard
      item={item}
      isUnlocked={profile.score >= item.points}
      pointsRemaining={item.points - profile.score}
      onUse={handleRewardUse}
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
        <Text style={styles.scoreLabel}>Current Score: </Text>
        <Text style={styles.scoreText}>{profile.score}</Text>
      </View>

      <SectionList
        sections={sortedRewards}
        refreshing={isLoading}
        style={styles.listContainer}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => renderItem(item)}
        renderSectionHeader={renderSectionHeader}
        renderSectionFooter={renderNoContent}
        ListFooterComponent={<View style={styles.lastFooter} />}
        ListEmptyComponent={!isLoading
              && <Text style={styles.emptyText}>No rewards found.</Text>}
      />

      <AddButton onPress={() => navigation.push('AddReward')} bottomSpace={155} />

      <CongratsModal type="reward" visible={modalVisible} onClose={() => toggleModal(false)} />
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
