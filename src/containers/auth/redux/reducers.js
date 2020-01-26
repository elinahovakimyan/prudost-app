import * as actions from './constants';

const initialState = {
  user: null,
  accessToken: null,
  errors: {
    SignIn: null, SignUp: null, ResetPassword: null, User: null,
  },
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_LOGIN_SUCCESS:
      return { ...state, accessToken: action.accessToken, user: action.user };
    case actions.AUTH_LOGIN_ERROR:
      return { ...state, errors: { SignIn: action.error } };
    case actions.AUTH_PASSWORD_RECOVER_ERROR:
      return { ...state, errors: { ResetPassword: action.error } };
    case actions.AUTH_SIGNUP_SUCCESS:
      return { ...state, user: action.user };
    case actions.AUTH_SIGNUP_ERROR:
      return { ...state, errors: { SignUp: action.error } };
    case actions.AUTH_USER:
      return { ...state, user: action.user, accessToken: action.token };
    case actions.AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
