import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';

import * as NavigationService from '../../../navigator/NavigationService';
import { request, addTokenToHttp } from '../../../utils/http';
import StorageUtils from '../helpers/storage';
import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_ERROR,
  AUTH_SIGNUP_REQUEST,
  AUTH_PASSWORD_RECOVER_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_SUCCESS,
  AUTH_PASSWORD_RECOVER_SUCCESS,
  AUTH_PASSWORD_RECOVER_ERROR,
} from './constants';


function sendLogin({ email, password }) {
  return request.goal('/api/v1/login/', {
    username: email,
    password,
  });
}

function sendSignUp({ username, email, password }) {
  return request.goal('/api/v1/signup/', {
    username,
    email,
    password,
  });
}

function sendPasswordRecovery(email) {
  return request.goal('/rest-auth/password/reset/', {
    email,
  });
}


function* handleLogin(action) {
  const {
    user: { email, password },
  } = action;

  try {
    // const { status, data } = yield call(sendLogin, { email, password });

    if (email && password) {
    // if (status === 200) {
    //   yield put({
    //     type: AUTH_LOGIN_SUCCESS,
    //     accessToken: data.token,
    //     user: data.user,
    //   });

      //   StorageUtils.setAccessToken(data.token);
      //   StorageUtils.setUser(data.user);
      //   addTokenToHttp(data.token);

      NavigationService.navigate('App');
    } else {
      yield put({
        type: AUTH_LOGIN_ERROR,
        error: 'Unknown Error',
      });
    }
  } catch (error) {
    console.log('error :', error);
    yield put({
      type: AUTH_LOGIN_ERROR,
      error: "Can't sign in with provided credentials",
    });
  }
}

function* handleSignUp(action) {
  const {
    user,
  } = action;
  try {
    const { status } = yield call(sendSignUp, user);

    if (status === 201) {
      yield put({
        type: AUTH_SIGNUP_SUCCESS,
      });

      const loginInfo = yield call(sendLogin, user);

      if (loginInfo.status === 200) {
        yield put({
          type: AUTH_LOGIN_SUCCESS,
          accessToken: loginInfo.data.token,
          user: loginInfo.data.user,
        });

        StorageUtils.setAccessToken(loginInfo.data.token);
        StorageUtils.setUser(loginInfo.data.user);
        addTokenToHttp(loginInfo.data.token);

        // you can change the navigate for navigateAndResetStack to go to a protected route
        NavigationService.navigate('TellUs');
      }
    } else {
      yield put({
        type: AUTH_SIGNUP_ERROR,
        error: 'Unknown Error',
      });
    }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: AUTH_SIGNUP_ERROR,
      error: "Can't sign up with provided credentials",
    });
  }
}

function* handlePasswordRecovery(action) {
  const { email } = action;

  try {
    const { status } = yield call(sendPasswordRecovery, email);

    if (status === 200) {
      yield put({
        type: AUTH_PASSWORD_RECOVER_SUCCESS,
        email,
      });

      // you can change the navigate for navigateAndResetStack to go to a protected route
      NavigationService.navigate('SignIn');
    } else {
      yield put({
        type: AUTH_PASSWORD_RECOVER_ERROR,
        error: 'Unknown Error',
      });
    }
  } catch (error) {
    yield put({
      type: AUTH_PASSWORD_RECOVER_ERROR,
      error: "Can't recover password with provided email",
    });
  }
}

export default all([
  takeLatest(AUTH_LOGIN_REQUEST, handleLogin),
  takeLatest(AUTH_SIGNUP_REQUEST, handleSignUp),
  takeLatest(AUTH_PASSWORD_RECOVER_REQUEST, handlePasswordRecovery),
]);
