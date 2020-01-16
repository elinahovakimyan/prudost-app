import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';

import * as NavigationService from '../../../navigator/NavigationService';
import {
  MAIN_GET_GOALS_REQUEST,
  MAIN_GET_GOALS_SUCCESS,
  MAIN_GET_GOALS_ERROR,
  MAIN_ADD_GOAL_REQUEST,
  MAIN_ADD_GOAL_SUCCESS,
  MAIN_ADD_GOAL_ERROR,
  MAIN_CHANGE_LOADING_STATE,
  MAIN_GET_REWARDS_REQUEST,
  MAIN_GET_REWARDS_SUCCESS,
  MAIN_GET_REWARDS_ERROR,
  MAIN_ADD_REWARD_SUCCESS,
  MAIN_ADD_REWARD_ERROR,
  MAIN_ADD_REWARD_REQUEST,
  MAIN_GET_HABITS_SUCCESS,
  MAIN_GET_HABITS_ERROR,
  MAIN_ADD_HABIT_SUCCESS,
  MAIN_ADD_HABIT_ERROR,
  MAIN_GET_HABITS_REQUEST,
  MAIN_ADD_HABIT_REQUEST,
} from './constants';
import { request } from '../../../utils/http';
import { goals, rewards, habits } from '../data';


// function getGoals() {
//   return request.get('/api/v1/goals/');
// }

// function getRewaards() {
//   return request.get('/api/v1/rewards/');
// }

function addGoal({ goal }) {
  return request.goal('/api/v1/goal/', goal);
}

function addReward({ reward }) {
  return request.goal('/api/v1/reward/', reward);
}

function* handleGetGoals() {
  try {
    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: true,
    });

    // const { status, data } = yield call(getGoals);
    // const { status } = yield call(getGoals);

    // if (status === 200) {
    if (true) {
      yield put({
        type: MAIN_GET_GOALS_SUCCESS,
        goals,
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });
    } else {
      yield put({
        type: MAIN_GET_GOALS_ERROR,
        error: 'Unknown Error',
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });
    }
  } catch (error) {
    console.log('error :', error);
    yield put({
      type: MAIN_GET_GOALS_ERROR,
      error: "Can't get goals.",
    });

    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: false,
    });
  }
}

function* handleAddGoal(action) {
  const { goal } = action;

  try {
    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: true,
    });

    const { status, data } = yield call(addGoal, { goal });

    if (status === 201) {
      yield put({
        type: MAIN_ADD_GOAL_SUCCESS,
        goals: data,
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });

      yield put({
        type: MAIN_GET_GOALS_REQUEST,
      });

      NavigationService.navigate('Goals');
    } else {
      yield put({
        type: MAIN_ADD_GOAL_ERROR,
        error: 'Unknown Error',
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });
    }
  } catch (error) {
    console.log('error :', error);
    yield put({
      type: MAIN_ADD_GOAL_ERROR,
      error: "Can't add a goal.",
    });

    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: false,
    });
  }
}

function* handleGetRewards() {
  try {
    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: true,
    });

    // const { status, data } = yield call(getGoals);
    // const { status } = yield call(getGoals);

    // if (status === 200) {
    if (true) {
      yield put({
        type: MAIN_GET_REWARDS_SUCCESS,
        rewards,
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });
    } else {
      yield put({
        type: MAIN_GET_REWARDS_ERROR,
        error: 'Unknown Error',
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });
    }
  } catch (error) {
    console.log('error :', error);
    yield put({
      type: MAIN_GET_REWARDS_ERROR,
      error: "Can't get goals.",
    });

    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: false,
    });
  }
}

function* handleAddReward(action) {
  const { goal } = action;

  try {
    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: true,
    });

    const { status, data } = yield call(addReward, { goal });

    if (status === 201) {
      yield put({
        type: MAIN_ADD_REWARD_SUCCESS,
        goals: data,
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });

      yield put({
        type: MAIN_GET_REWARDS_REQUEST,
      });

      NavigationService.navigate('Goals');
    } else {
      yield put({
        type: MAIN_ADD_REWARD_ERROR,
        error: 'Unknown Error',
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });
    }
  } catch (error) {
    console.log('error :', error);
    yield put({
      type: MAIN_ADD_REWARD_ERROR,
      error: "Can't add a goal.",
    });

    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: false,
    });
  }
}

function* handleGetHabits() {
  try {
    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: true,
    });

    // const { status, data } = yield call(getGoals);
    // const { status } = yield call(getGoals);

    // if (status === 200) {
    if (true) {
      yield put({
        type: MAIN_GET_HABITS_SUCCESS,
        habits,
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });
    } else {
      yield put({
        type: MAIN_GET_HABITS_ERROR,
        error: 'Unknown Error',
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });
    }
  } catch (error) {
    console.log('error :', error);
    yield put({
      type: MAIN_GET_HABITS_ERROR,
      error: "Can't get habits.",
    });

    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: false,
    });
  }
}

function* handleAddHabit(action) {
  const { habit } = action;

  try {
    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: true,
    });

    const { status } = yield call(addReward, { habit });

    if (status === 201) {
      yield put({
        type: MAIN_ADD_HABIT_SUCCESS,
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });

      yield put({
        type: MAIN_GET_HABITS_REQUEST,
      });

      NavigationService.navigate('Habits');
    } else {
      yield put({
        type: MAIN_ADD_HABIT_ERROR,
        error: 'Unknown Error',
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });
    }
  } catch (error) {
    console.log('error :', error);
    yield put({
      type: MAIN_ADD_HABIT_ERROR,
      error: "Can't add a goal.",
    });

    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: false,
    });
  }
}

export default all([
  takeLatest(MAIN_GET_GOALS_REQUEST, handleGetGoals),
  takeLatest(MAIN_ADD_GOAL_REQUEST, handleAddGoal),
  takeLatest(MAIN_GET_REWARDS_REQUEST, handleGetRewards),
  takeLatest(MAIN_ADD_REWARD_REQUEST, handleAddReward),
  takeLatest(MAIN_GET_HABITS_REQUEST, handleGetHabits),
  takeLatest(MAIN_ADD_HABIT_REQUEST, handleAddHabit),
]);
