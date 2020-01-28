import React from 'react';
import { connect } from 'react-redux';
import {
  FlatList, View, Text, RefreshControl,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import HabitCard from '../../../../components/shared/HabitCard';
import EmptyCard from '../../../../components/shared/EmptyCard';
import AddButton from '../../../../components/common/AddButton';
import { colors } from '../../../../utils';
import { getHabits } from '../../redux/actions';

import { styles } from './styles';


class Habits extends React.PureComponent {
  static navigationOptions = () => ({
    headerTitle: 'Habits',
    headerTintColor: colors.white,
    headerTitleStyle: styles.headerTitle,
    headerStyle: {
      backgroundColor: colors.blue,
    },
  });

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.props.getHabits();
  }

  goToAddHabit = () => {
    this.props.navigation.push('AddHabit');
  }

  renderItem = (item) => (
    <HabitCard
      title={item.title}
      isCompleted={item.isCompleted}
      onPress={() => {}}
    />
  )

  render() {
    const { isLoading, habits } = this.props;

    return (
      <Layout style={styles.screen}>
        <Text style={styles.sectionTitle}>Today&apos;s Habits</Text>

        <FlatList
          data={habits || []}
          refreshing={isLoading}
          style={styles.container}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={!isLoading && <EmptyCard buttonTitle="Add Habit" onButtonPress={this.goToAddHabit} />}
          ListFooterComponent={<View style={styles.footer} />}
          refreshControl={<RefreshControl onRefresh={this.fetchData} refreshing={isLoading} />}
        />

        <AddButton onPress={this.goToAddHabit} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  habits: state.App.habits,
  isLoading: state.App.isLoading,
  habitsError: state.App.errors.Habits,
});

const mapDispatchToProps = {
  getHabits,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Habits);
