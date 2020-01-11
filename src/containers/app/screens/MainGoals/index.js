import React from 'react';
import { connect } from 'react-redux';
import {
  Image, TouchableOpacity, FlatList, View, Text, RefreshControl, ScrollView,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import GoalCard from '../../../../components/shared/GoalCard';
import CategoryCard from '../../../../components/shared/CategoryCard';
import { getGoals } from '../../redux/actions';
import { categories } from '../../data';

import { styles } from './styles';


class MainGoals extends React.PureComponent {
  static navigationOptions = () => ({
    headerTitle: 'All Goals',
    headerTintColor: '#fff',
    headerShown: false,
    headerTitleStyle: styles.headerTitle,
    headerStyle: {
      backgroundColor: '#33638e',
    },
  });

  componentDidMount() {
    this.props.getGoals();
  }

  renderItem = (item) => {
    const { navigation } = this.props;

    return (
      <GoalCard
        title={item.title}
        tasks={item.tasks}
        description={item.description}
        category={item.category}
        onPress={() => navigation.push('GoalDetails', { goal: item })}
      />
    );
  }

  render() {
    const { navigation, goals, isLoading } = this.props;

    return (
      <Layout style={styles.screen}>
        <View>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categoryContainer}
            >
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onPress={() => navigation.push('Goals', { category })}
                />
              ))}
            </ScrollView>
          </View>

          <Text style={styles.title}>All goals</Text>

          <FlatList
            data={goals}
            refreshing={isLoading}
            style={styles.container}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={!isLoading
                && <Text style={styles.emptyText}>No goals found.</Text>
              }
            ListFooterComponent={<View style={styles.footer} />}
            // ListHeaderComponent={<View style={styles.header} />}
            refreshControl={<RefreshControl refreshing={isLoading} />}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.push('AddGoal')}
          style={styles.feedbackContainer}
        >
          <Image
            style={styles.feedbackIcon}
            source={require('../../../../assets/icons/plus.png')}
          />
        </TouchableOpacity>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  goals: state.App.goals,
  isLoading: state.App.isLoading,
  user: state.Auth.user,
  goalsError: state.App.errors.Goals,
});

const mapDispatchToProps = {
  getGoals,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainGoals);
