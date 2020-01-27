import { put, call } from 'redux-saga/effects';

import * as NavigationService from '../navigator/NavigationService';

export function* sagasRunner({
  successType, errorType, errorMessage, route, callFunc, callData,
  dataId, updateType, updateData, loadingType, sendResponseAsParams, additionalFunc,
}) {
  try {
    const { status, data } = yield call(callFunc, ...callData);

    yield put({
      type: loadingType,
      payload: true,
    });

    if (status >= 200 && status < 300) {
      yield put({
        type: successType,
        payload: data,
        dataId,
      });

      if (updateType) {
        yield put({
          type: updateType,
          payload: updateData || null,
        });
      }

      if (additionalFunc) {
        additionalFunc(status, data);
      }

      if (route) {
        NavigationService.navigate(route, sendResponseAsParams ? { data } : null);
      }
    } else {
      yield put({
        type: errorType,
        error: 'Unknown Error',
      });
    }

    yield put({
      type: loadingType,
      payload: false,
    });
  } catch (error) {
    yield put({
      type: loadingType,
      payload: false,
    });

    yield put({
      type: errorType,
      error: errorMessage,
    });
  }
}
