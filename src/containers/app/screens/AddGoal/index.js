import React from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';

import Layout from '../../../../components/shared/Layout';
import Input from '../../../../components/common/Input';
import OptionPicker from '../../../../components/common/OptionPicker';
import DatePicker from '../../../../components/common/DatePicker';
import ErrorBox from '../../../../components/common/ErrorBox';
import { categories } from '../../data';
import { colors } from '../../../../utils';
import { addGoal, updateGoal } from '../../redux/actions';

import { styles } from './styles';

const categoryOptions = categories.map((option) => ({ value: option.title, label: option.title }));
const getDatePickerFormat = (date) => {
  let formattedDate = null;

  if (date) {
    const [YYYY, MM, DD] = date.split('-');
    formattedDate = [DD, MM, YYYY].join('/');
  }

  return formattedDate;
};


class AddGoal extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    const isEditing = navigation.state.params?.goal;
    return ({
      headerTitle: isEditing ? 'Edit Goal' : 'New Goal',
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

  state = {
    title: this.props.navigation.state.params?.goal?.title,
    description: this.props.navigation.state.params?.goal?.description,
    category: this.props.navigation.state.params?.goal?.category,
    deadline: getDatePickerFormat(this.props.navigation.state.params?.goal?.deadline),
  }

  componentDidMount() {
    const isEditing = this.props.navigation.state.params?.goal;

    this.props.navigation.setParams({
      submitGoal: isEditing ? this.handleSave : this.handleAdd,
    });
  }

  handleSave = () => {
    const goal = this.props.navigation.state.params?.goal;
    const {
      title, description, category, deadline,
    } = this.state;
    let formattedDeadline;

    if (goal && deadline === goal.deadline) {
      formattedDeadline = goal.deadline;
    } else {
      const [DD, MM, YYYY] = deadline ? deadline.split('/') : [];
      formattedDeadline = [YYYY, MM, DD].join('-');
    }

    this.props.updateGoal({
      id: goal.id,
      title,
      description,
      category,
      deadline: formattedDeadline,
    });
  }

  handleAdd = () => {
    const {
      title, description, category, deadline,
    } = this.state;
    const [DD, MM, YYYY] = deadline ? deadline.split('/') : [];
    const formattedDeadline = [YYYY, MM, DD].join('-');

    this.props.addGoal({
      title,
      description,
      category,
      deadline: formattedDeadline,
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
      title, description, category, deadline, isLoading,
    } = this.state;

    return (
      <Layout isLoading={isLoading} style={styles.screen}>
        <Input
          underlined
          value={title}
          onChangeText={(val) => this.handleInputChange('title', val)}
          placeholder="Goal title"
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
          options={categoryOptions}
        />

        <DatePicker
          inputStyle={styles.input}
          placeholder="Deadline"
          onChange={(val) => this.handleInputChange('deadline', val)}
          value={deadline}
        />


        {/* <Text style={styles.sectionTitle}>TASKS</Text>

        <Input
          underlined
          value={title}
          onChangeText={(val) => this.handleInputChange('title', val)}
          placeholder="Add a task"
          placeholderTextColor={colors.grey}
        />

        <AddTask hasPadding={false} /> */}

        <ErrorBox errorText={this.props.addGoalError} />

      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.App.isLoading,
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
