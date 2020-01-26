import React from 'react';
import { connect } from 'react-redux';
import {
  FlatList, View, Text, RefreshControl, Image, TouchableOpacity, Alert,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import TaskCard from '../../../../components/shared/TaskCard';
import AddTask from '../../../../components/shared/AddTask';
import { colors } from '../../../../utils/styles';

import { styles } from './styles';
import CategoryTag from '../../../../components/shared/CategoryTag';


class GoalDetails extends React.PureComponent {
  static navigationOptions = () => ({
    headerTitle: 'Goal Details',
    headerTintColor: colors.white,
    headerTitleStyle: styles.headerTitle,
    headerStyle: {
      backgroundColor: colors.blue,
    },
  });

  renderItem = (item) => (
    <TaskCard
      title={item.title}
      isCompleted={item.isCompleted}
      onPress={() => {}}
    />
  )

  handleDelete = () => {
    Alert.alert(
      'Delete the goal?',
      'Are you sure you want to delete this goal?',
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

  render() {
    const { navigation, isLoading } = this.props;
    const { data } = navigation.state.params;
    const category = data.category || {};

    return (
      <Layout style={styles.screen}>
        <View style={styles.categoryContainer}>
          <CategoryTag category={category} />

          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Image source={require('../../../../assets/icons/edit.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleDelete}>
              <Image source={require('../../../../assets/icons/delete.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>

        <Text style={styles.sectionTitle}>TASKS</Text>

        <AddTask hasHorizaontalPadding />

        <FlatList
          data={data.tasks || []}
          refreshing={isLoading}
          style={styles.container}
          renderItem={({ item }) => this.renderItem(item)}
          // TODO: Add id-s for tasks
          keyExtractor={(item) => String(item.title)}
          ListEmptyComponent={!isLoading && <Text style={styles.emptyText}>No tasks found.</Text>}
          ListFooterComponent={<View style={styles.footer} />}
          refreshControl={<RefreshControl refreshing={isLoading} />}
        />

      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  goals: state.App.goals,
  isLoading: state.App.isLoading,
  goalsError: state.App.errors.Goals,
});

export default connect(
  mapStateToProps,
)(GoalDetails);
