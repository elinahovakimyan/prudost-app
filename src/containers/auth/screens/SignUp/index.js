import React from 'react';
import { connect } from 'react-redux';
import {
  View, Text, ScrollView, ActivityIndicator,
} from 'react-native';

import Layout from '../../../../components/shared/Layout';
import Button from '../../../../components/common/Button';
import Input from '../../../../components/common/Input';
import ErrorBox from '../../../../components/common/ErrorBox';
import { validateEmail } from '../../../../utils/validation';
import { signUp } from '../../redux/actions';
import { colors } from '../../../../utils';

import { styles } from './styles';

class SignUp extends React.PureComponent {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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

  handlePasswordChange = (password) => {
    this.setState({ password }, () => {
      if (this.state.isSubmitting) {
        this.isValid();
      }
    });
  }

  handleNameChange = (name) => {
    this.setState({ name }, () => {
      if (this.state.isSubmitting) {
        this.isValid();
      }
    });
  }

  handleConfirmPasswordChange = (confirmPassword) => {
    this.setState({ confirmPassword }, () => {
      if (this.state.isSubmitting) {
        this.isValid();
      }
    });
  }

  submitSignUp = () => {
    const isFormValid = this.isValid();

    this.setState({
      isSubmitting: true,
    });

    if (isFormValid) {
      const { name, email, password } = this.state;

      this.props.signUp({ name, email, password });
    }
  }

  goToSignIn = () => {
    const { navigation } = this.props;
    navigation.push('SignIn');
  }

  isValid = () => {
    const {
      name, email, password, confirmPassword,
    } = this.state;

    if (!name) {
      this.setState({
        validationError: 'Please enter your name',
      });
      return false;
    }
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
    if (!password) {
      this.setState({
        validationError: 'Please enter a password',
      });
      return false;
    }
    if (!confirmPassword) {
      this.setState({
        validationError: 'Please confirm your password',
      });
      return false;
    }
    if (password && confirmPassword && password !== confirmPassword) {
      this.setState({
        validationError: "Passwords don't match",
      });
      return false;
    }

    this.setState({
      validationError: null,
    });
    return true;
  }

  renderErrors = () => {
    const { signUpErrors } = this.props;
    const { validationError } = this.state;

    if (validationError) {
      return <ErrorBox errorText={validationError} />;
    }
    if (signUpErrors) {
      return <ErrorBox errorText={signUpErrors} />;
    }
    return null;
  }

  render() {
    const { isLoading } = this.props;
    const {
      email, password, name, confirmPassword,
    } = this.state;

    return (
      <Layout style={styles.screen}>
        <ScrollView keyboardShouldPersistTaps="never">
          <View style={styles.header}>
            <Text style={styles.title}>Achieve Your Goals, Live the Dream!</Text>
          </View>
          <Input
            value={name}
            onChangeText={this.handleNameChange}
            placeholder="How should I call you?"
            maxLength={10}
          />
          <Input
            value={email}
            onChangeText={this.handleEmailChange}
            placeholder="Your email address"
            keyboardType="email-address"
          />
          <Input
            isPassword
            value={password}
            onChangeText={this.handlePasswordChange}
            placeholder="Your password"
          />
          <Input
            isPassword
            value={confirmPassword}
            onChangeText={this.handleConfirmPasswordChange}
            placeholder="Confirm your password"
          />


          {isLoading ? (
            <View style={styles.loader}>
              <ActivityIndicator color={colors.yellow} />
            </View>
          ) : (
            <>
              {this.renderErrors()}

              <Button buttonStyle={styles.actionButon} onPress={this.submitSignUp}>
                Create account
              </Button>

              <Text style={styles.signInText} onPress={this.goToSignIn}>
                Already have account?
              </Text>
            </>
          )}
        </ScrollView>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.Auth.isLoading,
  signUpErrors: state.Auth.errors.SignUp,
});

const mapDispatchToProps = {
  signUp,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
