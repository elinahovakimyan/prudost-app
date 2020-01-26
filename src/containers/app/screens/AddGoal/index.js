import React from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';

import Layout from '../../../../components/shared/Layout';
import Input from '../../../../components/common/Input';
import OptionPicker from '../../../../components/common/OptionPicker';
import DatePicker from '../../../../components/common/DatePicker';
import { categories } from '../../data';
import { colors } from '../../../../utils/styles';
import { addGoal } from '../../redux/actions';

import { styles } from './styles';

const categoryOptions = categories.map((option) => ({ value: option.title, label: option.title }));

class AddGoal extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'New Goal',
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
        <Text style={styles.actionText}>Add</Text>
      </TouchableOpacity>
    ),
  });

  state = {
    title: '',
    description: '',
    category: null,
    deadline: null,
  }

  componentDidMount() {
    this.props.navigation.setParams({ submitGoal: this.handleSubmit });
  }

  handleSubmit = () => {
    const {
      title, description, category, deadline,
    } = this.state;
    const [DD, MM, YYYY] = deadline.split('/');
    const formattedDeadline = [YYYY, MM, DD].join('-');

    this.props.addGoal({
      title,
      description,
      category,
      deadline: formattedDeadline,
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

    return (
      <Layout style={styles.screen}>
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

      </Layout>
    );
  }
}

const mapDispatchToProps = {
  addGoal,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddGoal);
