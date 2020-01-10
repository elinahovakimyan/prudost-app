import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';

import Layout from '../../../../components/shared/Layout';
import Button from '../../../../components/common/Button';
import Input from '../../../../components/common/Input';
import ErrorBox from '../../../../components/common/ErrorBox';
import { login } from '../../redux/actions';
import { validateEmail } from '../../helpers/validation';
import { quotes } from './quotes';

import { styles } from './styles';
import { getRandomInt } from '../../../../utils/helpers';

class SignIn extends React.PureComponent {
  state = {
    email: '',
    password: '',
    validationError: '',
    isSubmitting: false,
    currentQuote: null,
  };

  componentDidMount() {
    const quoteNumber = getRandomInt(quotes.length - 1);

    this.setState({
      currentQuote: quotes[quoteNumber],
    });
  }

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

  submitLogin = () => {
    const isFormValid = this.isValid();

    this.setState({
      isSubmitting: true,
    });

    if (isFormValid) {
      const { email, password } = this.state;

      this.props.login({ email, password });
    }
  }

  goToPasswordRecover = () => {
    const { navigation } = this.props;
    navigation.push('ForgotPassword');
  }

  goToSignUp = () => {
    const { navigation } = this.props;
    navigation.push('SignUp');
  }

  isValid = () => {
    const {
      email, password,
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
    if (!password) {
      this.setState({
        validationError: 'Please enter a password',
      });
      return false;
    }

    this.setState({
      validationError: null,
    });
    return true;
  }

  renderErrors = () => {
    const { signInErrors } = this.props;
    const { validationError } = this.state;
    if (validationError) {
      return <ErrorBox errorText={validationError} />;
    }
    if (signInErrors) {
      return <ErrorBox errorText={signInErrors} />;
    }
    return null;
  }

  render() {
    const { email, password, currentQuote } = this.state;

    return (
      <Layout style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome</Text>

          <Button
            block={false}
            buttonStyle={styles.signUpButon}
            onPress={this.goToSignUp}
          >
            Create account
          </Button>
        </View>
        <Input
          value={email}
          onChangeText={this.handleEmailChange}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Input
          isPassword
          value={password}
          onChangeText={this.handlePasswordChange}
          placeholder="Password"
        />

        {this.renderErrors()}

        <Button buttonStyle={styles.actionButon} onPress={this.submitLogin}>
            Sign In
        </Button>

        <Text style={styles.forgotPasswordText} onPress={this.goToPasswordRecover}>
            Forgot password?
        </Text>

        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../../../../assets/images/logo.png')}
          />

          {currentQuote ? (
            <>
              <Text style={styles.quoteText}>{currentQuote.quote}</Text>
              <Text style={styles.quoteAuthor}>{`~ ${currentQuote.author}`}</Text>
            </>
          ) : null}

        </View>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  signInErrors: state.Auth.errors.SignIn,
});

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
