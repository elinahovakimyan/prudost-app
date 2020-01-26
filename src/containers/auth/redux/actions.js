import * as actions from './constants';

export const signUp = (user) => ({
  type: actions.AUTH_SIGNUP_REQUEST,
  user,
});

export const login = (user) => ({
  type: actions.AUTH_LOGIN_REQUEST,
  user,
});

export const setUser = (user, token) => ({
  type: actions.AUTH_USER,
  user,
  token,
});

export const clearAccessToken = () => ({
  type: actions.AUTH_LOGOUT,
});

export const resetPassword = (email) => ({
  type: actions.AUTH_PASSWORD_RECOVER_REQUEST,
  email,
});
