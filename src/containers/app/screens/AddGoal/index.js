import React from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, ScrollView } from 'react-native';

import Layout from '../../../../components/shared/Layout';
import Input from '../../../../components/common/Input';
import OptionPicker from '../../../../components/common/OptionPicker';
import DateInput from '../../../../components/common/DateInput';
import ErrorBox from '../../../../components/common/ErrorBox';
import { colors, getRandomInt } from '../../../../utils';
import { addGoal, updateGoal } from '../../redux/actions';

import { styles } from './styles';
import { goalSuggestions } from '../../data';


class AddGoal extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    const isEditing = navigation.state.params?.goal;
    return ({
      headerTitle: isEditing ? 'Edit Goal' : 'New Goal',
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerStyle: styles.headerStyle,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.actionTextContainer}
          onPress={navigation.getParam('submitGoal')}
        >
          <Text style={styles.actionText}>{isEditing ? 'Save' : 'Add'}</Text>
        </TouchableOpacity>
      ),
    });
  }

  goalTitle = 'Goal Title'

  state = {
    title: this.props.navigation.state.params?.goal?.title,
    description: this.props.navigation.state.params?.goal?.description,
    category: this.props.navigation.state.params?.goal?.category,
    deadline: this.props.navigation.state.params?.goal?.deadline,
  }

  componentDidMount() {
    const isEditing = this.props.navigation.state.params?.goal;

    this.props.navigation.setParams({
      submitGoal: isEditing ? this.handleSave : this.handleAdd,
    });

    const goalTitleNumber = getRandomInt(goalSuggestions.length - 1);
    const currentGoalTitle = goalSuggestions[goalTitleNumber];

    this.goalTitle = currentGoalTitle;
  }

  handleSave = () => {
    const goal = this.props.navigation.state.params?.goal;
    const {
      title, description, category, deadline,
    } = this.state;

    this.props.updateGoal({
      id: goal.id,
      title,
      description,
      category,
      deadline,
    });
  }

  handleAdd = () => {
    const { profile } = this.props;
    const {
      title, description, category, deadline,
    } = this.state;

    this.props.addGoal({
      user: profile.id,
      title,
      description,
      category,
      deadline,
      created_at: new Date(),
      tasks: [],
    });
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  render() {
    const {
      title, description, category, deadline,
    } = this.state;
    const { isLoading } = this.props;

    return (
      <Layout isLoading={isLoading} style={styles.screen}>
        <ScrollView keyboardShouldPersistTaps="never">
          <Input
            underlined
            value={title}
            onChangeText={(val) => this.handleInputChange('title', val)}
            placeholder={`Title (e.g. ${this.goalTitle})`}
            placeholderTextColor={colors.grey}
          />

          <Input
            multiline
            underlined
            value={description}
            onChangeText={(val) => this.handleInputChange('description', val)}
            placeholder="Why is this goal important?"
            placeholderTextColor={colors.grey}
          />

          <OptionPicker
            headerStyle={styles.input}
            placeholder="Goal category"
            onChange={(val) => this.handleInputChange('category', val)}
            value={category}
            options={this.props.categories}
          />

          <DateInput
            placeholder="Deadline"
            onChange={(val) => this.handleInputChange('deadline', val)}
            value={deadline}
          />

          <ErrorBox errorText={this.props.addGoalError} />
        </ScrollView>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.App.isLoading,
  profile: state.App.profile,
  categories: state.App.categories.map((option) => ({ value: option.id, label: option.title })),
  addGoalError: state.App.errors.AddGoal,
});

const mapDispatchToProps = {
  addGoal,
  updateGoal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddGoal);
