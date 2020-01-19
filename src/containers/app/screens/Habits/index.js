import React from 'react';
import { connect } from 'react-redux';
import {
  FlatList, View, Text, RefreshControl,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import AddButton from '../../../../components/common/AddButton';
import HabitCard from '../../../../components/shared/HabitCard';
import { colors } from '../../../../utils/styles';
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
    this.props.getHabits();
  }

  renderItem = (item) => (
    <HabitCard
      title={item.title}
      isCompleted={item.isCompleted}
      onPress={() => {}}
    />
  )

  render() {
    const { isLoading, habits, navigation } = this.props;

    return (
      <Layout style={styles.screen}>
        <Text style={styles.sectionTitle}>Today&apos;s Habits</Text>

        <FlatList
          data={habits || []}
          refreshing={isLoading}
          style={styles.container}
          renderItem={({ item }) => this.renderItem(item)}
          // TODO: Add id-s for tasks
          keyExtractor={(item) => String(item.title)}
          ListEmptyComponent={!isLoading && <Text style={styles.emptyText}>No tasks found.</Text>}
          ListFooterComponent={<View style={styles.footer} />}
          refreshControl={<RefreshControl refreshing={isLoading} />}
        />

        <AddButton onPress={() => navigation.push('AddHabit')} />
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
