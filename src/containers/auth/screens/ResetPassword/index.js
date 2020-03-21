import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import Layout from '../../../../components/shared/Layout';
import Button from '../../../../components/common/Button';
import Input from '../../../../components/common/Input';
import ErrorBox from '../../../../components/common/ErrorBox';
import { resetPassword } from '../../redux/actions';
import { validateEmail } from '../../../../utils/validation';

import { styles } from './styles';

class ResetPassword extends React.PureComponent {
  state = {
    email: '',
    validationError: '',
    isSubmitting: false,
  };

  handleEmailChange = (email) => {
    this.setState({ email }, () => {
      if (this.state.isSubmitting) {
        this.isValid();
      }
    });
  }

  submitReset = () => {
    const isFormValid = this.isValid();

    this.setState({
      isSubmitting: true,
    });

    if (isFormValid) {
      const { email } = this.state;

      this.props.resetPassword(email);
    }
  }

  goToSignIn = () => {
    const { navigation } = this.props;
    navigation.push('SignIn');
  }

  renderErrors = () => {
    const { ResetPasswordErrors } = this.props;
    const { validationError } = this.state;

    if (validationError) {
      return <ErrorBox errorText={validationError} />;
    }
    if (ResetPasswordErrors) {
      return <ErrorBox errorText={ResetPasswordErrors} />;
    }
    return null;
  }

  isValid = () => {
    const {
      email,
    } = this.state;

    if (!email) {
      this.setState({
        validationError: 'Please enter your email',
      });
      return false;
    }
    if (email && !validateEmail(email)) {
      this.setState({
        validationError: 'Please enter a valid email',
      });
      return false;
    }

    this.setState({
      validationError: null,
    });
    return true;
  }

  render() {
    const { email } = this.state;

    return (
      <Layout style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>Forgot password</Text>
        </View>
        <Text style={styles.text1}>
            Enter the email address associated with your account.
            We will email you a link to reset your password
        </Text>
        <Input
          value={email}
          onChangeText={this.handleEmailChange}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        {this.renderErrors()}

        <Button buttonStyle={styles.actionButon} onPress={this.submitReset}>
            Send
        </Button>

        <Text style={styles.rememberPasswordText} onPress={this.goToSignIn}>
          Remember password?
        </Text>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  ResetPasswordErrors: state.Auth.errors.ResetPassword,
});

const mapDispatchToProps = {
  resetPassword,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPassword);
