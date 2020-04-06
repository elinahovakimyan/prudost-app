import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';

import * as NavigationService from '../../../navigator/NavigationService';
import { request, addTokenToHttp, formatServerError } from '../../../utils';
import StorageUtils from '../../../utils/storage';
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
  AUTH_LOGOUT,
  AUTH_CHANGE_LOADING_STATE,
} from './constants';


function sendLogin({ email, password }) {
  return request.post('/api/login/', {
    username: email,
    password,
  });
}

function sendSignUp({ name, email, password }) {
  return request.post('/api/signup/', {
    name,
    email,
    password,
  });
}

function sendPasswordRecovery(email) {
  return request.post('/rest-auth/password/reset/', {
    email,
  });
}


function* handleLogin(action) {
  const {
    user: { email, password },
  } = action;

  try {
    yield put({
      type: AUTH_CHANGE_LOADING_STATE,
      isLoading: true,
    });

    const { status, data } = yield call(sendLogin, { email, password });

    if (status === 200) {
      yield put({
        type: AUTH_LOGIN_SUCCESS,
        accessToken: data.token,
        user: data.user,
      });

      yield StorageUtils.setAccessToken(data.token);
      yield StorageUtils.setUser(data.user);
      addTokenToHttp(data.token);

      NavigationService.navigate('ProfileSplash');
    } else {
      yield put({
        type: AUTH_LOGIN_ERROR,
        error: 'Unknown Error',
      });
    }

    yield put({
      type: AUTH_CHANGE_LOADING_STATE,
      isLoading: false,
    });
  } catch (error) {
    yield put({
      type: AUTH_LOGIN_ERROR,
      error: formatServerError(error?.response?.data) || "Can't sign in with provided credentials",
    });

    yield put({
      type: AUTH_CHANGE_LOADING_STATE,
      isLoading: false,
    });
  }
}

function* handleSignUp(action) {
  const {
    user,
  } = action;
  try {
    yield put({
      type: AUTH_CHANGE_LOADING_STATE,
      isLoading: true,
    });

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

        yield StorageUtils.setAccessToken(loginInfo.data.token);
        yield StorageUtils.setUser(loginInfo.data.user);
        addTokenToHttp(loginInfo.data.token);

        // you can change the navigate for navigateAndResetStack to go to a protected route
        NavigationService.navigate('ProfileSplash');
      }
    } else {
      yield put({
        type: AUTH_SIGNUP_ERROR,
        error: 'Unknown Error',
      });
    }

    yield put({
      type: AUTH_CHANGE_LOADING_STATE,
      isLoading: false,
    });
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: AUTH_SIGNUP_ERROR,
      error: formatServerError(error?.response?.data) || "Can't sign up with provided credentials",
    });

    yield put({
      type: AUTH_CHANGE_LOADING_STATE,
      isLoading: false,
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

function* handleLogout() {
  try {
    yield StorageUtils.removeAccessToken();
    yield StorageUtils.removeUser();
    // addTokenToHttp(null);
    NavigationService.navigate('Auth');
  } catch (error) {
    console.warn('error :', error);
  }
}

export default all([
  takeLatest(AUTH_LOGIN_REQUEST, handleLogin),
  takeLatest(AUTH_SIGNUP_REQUEST, handleSignUp),
  takeLatest(AUTH_PASSWORD_RECOVER_REQUEST, handlePasswordRecovery),
  takeLatest(AUTH_LOGOUT, handleLogout),
]);
