import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';

import { combinedReducers } from './mainReducer';
import { mainSaga } from './mainSaga';

const sagaMiddleware = createSagaMiddleware();

/**
 * this app uses React Native Debugger, but it works without it
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware];

const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(mainSaga);

export { store };
