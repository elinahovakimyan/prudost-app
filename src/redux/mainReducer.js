import { combineReducers } from 'redux';

/**
 * You can import more reducers here
 */
import { AuthReducer } from '../containers/auth/redux/reducers';
import { AppReducer } from '../containers/app/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state) => (state == null ? [] : state),
  Auth: AuthReducer,
  App: AppReducer,
});
