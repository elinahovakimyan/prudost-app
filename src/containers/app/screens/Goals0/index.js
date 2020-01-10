import React from 'react';
import { connect } from 'react-redux';
import {
  TouchableOpacity, FlatList, View, Text, RefreshControl,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import GoalCard from '../../../../components/shared/GoalCard';
import {
  getGoals, checkNewGoals, emptyNewGoals,
} from '../../redux/actions';

import { styles } from './styles';


class Goals extends React.PureComponent {
  static navigationOptions = () => ({
    headerTitle: 'Goals',
    headerTitleStyle: styles.headerTitle,
    headerLayoutPreset: 'center',
  });

  state = {
    isNewGoalsVisible: false,
  }

  componentDidMount() {
    this.props.getGoals();
  }

  componentDidUpdate(prevProps) {
    if (this.props.newGoals
      && this.props.newGoals.length
      && this.props.newGoals.length !== prevProps.newGoals.length
    ) {
      // eslint-disable-next-line
      this.setState({
        isNewGoalsVisible: true,
      });
    }
  }

  getNewGoals = () => {
    this.props.emptyNewGoals();
    this.props.getGoals();

    this.setState({
      isNewGoalsVisible: false,
    });

    this.flatListRef.scrollToOffset({ animated: true, offset: 0 });
  }

  renderItem = (item) => (
    <GoalCard
      title={item.title}
      date={item.datetime}
      description={item.body}
      username={item.username}
      onCommentsPress={() => this.props.navigation.push('Comments', { goalId: item.id })}
    />
  );

  render() {
    const { isNewGoalsVisible } = this.state;
    const { goals, isLoading } = this.props;

    return (
      <Layout style={styles.screen}>
        <FlatList
          ref={(ref) => { this.flatListRef = ref; }}
          data={goals}
          style={styles.container}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item) => String(item.id)}
          refreshing={isLoading}
          refreshControl={<RefreshControl refreshing={isLoading} />}
          ListHeaderComponent={isNewGoalsVisible ? <View style={styles.listHeader} /> : null}
          ListEmptyComponent={!isLoading && <Text style={styles.emptyText}>No goals found.</Text>}
          ListFooterComponent={<View style={styles.footer} />}
        />

        {isNewGoalsVisible ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.newGoalsButton} onPress={this.getNewGoals}>
              <Text style={styles.newGoalsText}>New Goals</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  goals: state.App.goals,
  newGoals: state.App.newGoals,
  isLoading: state.App.isLoading,
  user: state.Auth.user,
  goalsError: state.App.errors.Goals,
});

const mapDispatchToProps = {
  getGoals,
  checkNewGoals,
  emptyNewGoals,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Goals);
