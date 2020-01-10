import { all } from 'redux-saga/effects';

import AuthSaga from '../containers/auth/redux/sagas';
import AppSaga from '../containers/app/redux/sagas';

export function* mainSaga() {
  yield all([
    AuthSaga,
    AppSaga,
  ]);
}
