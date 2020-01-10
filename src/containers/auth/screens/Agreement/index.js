import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

import Layout from '../../../../components/shared/Layout';
import Button from '../../../../components/common/Button';
import ErrorBox from '../../../../components/common/ErrorBox';
import Checkbox from '../../../../components/common/Checkbox';

import { rules } from './data';
import { styles } from './styles';


class Agreement extends React.PureComponent {
  state = {
    acceptedRules: [],
    validationError: '',
    isSubmitting: false,
  };

  handleRulesChange = (rule) => {
    this.setState((prevState) => {
      const currentAcceptedRules = prevState.acceptedRules;

      if (currentAcceptedRules.includes(rule)) {
        return ({
          acceptedRules: currentAcceptedRules.filter((r) => r !== rule),
        });
      }
      return ({
        acceptedRules: [...currentAcceptedRules, rule],
      });
    },
    () => {
      if (this.state.isSubmitting) {
        this.isValid();
      }
    });
  }

  isValid = () => {
    const { acceptedRules } = this.state;

    if (acceptedRules.length !== rules.length) {
      this.setState({
        validationError: 'Please accept all guidelines.',
      });
      return false;
    }

    this.setState({
      validationError: null,
    });
    return true;
  }

  renderErrors = () => {
    const { validationError } = this.state;

    if (validationError) {
      return <ErrorBox errorText={validationError} />;
    }
    return null;
  }

  handleNext = () => {
    const isFormValid = this.isValid();

    this.setState({
      isSubmitting: true,
    });

    if (isFormValid) {
      this.props.navigation.navigate('App');
    }
  }

  render() {
    const { acceptedRules } = this.state;

    return (
      <Layout style={styles.screen}>
        <View style={styles.header}>
          {/* <Text style={styles.rightText}
          onPress={() => this.props.navigation.goBack()}>Back</Text> */}
          <Text style={styles.title}>The U.P.’s Community Guidelines</Text>
        </View>
        <Text style={styles.subtitle}>Safety, consideration and respect for all</Text>

        <Text style={[styles.text, styles.contentText]}>
          We along with all members of the community are committed to:
        </Text>

        {rules.map((rule) => (
          <TouchableOpacity
            key={rule.value}
            style={styles.radioContainer}
            onPress={() => this.handleRulesChange(rule.value)}
          >
            <Checkbox isChecked={acceptedRules.includes(rule.value)} />
            <Text style={[styles.text, styles.radioText]}>{rule.label}</Text>
          </TouchableOpacity>
        ))}

        <Text style={[styles.text, styles.contentText]}>
          Everyone who uses this app is required to follow these guidelines.
        </Text>

        {this.renderErrors()}

        <Button
          buttonStyle={this.renderErrors() ? styles.nextButtonWithErrors : styles.nextButton}
          onPress={this.handleNext}
        >
          Accept
        </Button>
      </Layout>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Agreement);
