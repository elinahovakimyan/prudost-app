import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';

import * as NavigationService from '../../../navigator/NavigationService';
import {
  APP_GET_GOALS_REQUEST,
  APP_GET_GOALS_SUCCESS,
  APP_GET_GOALS_ERROR,
  APP_ADD_GOAL_REQUEST,
  APP_ADD_GOAL_SUCCESS,
  APP_ADD_GOAL_ERROR,
  APP_GET_TASKS_REQUEST,
  APP_GET_TASKS_SUCCESS,
  APP_GET_TASKS_ERROR,
  APP_ADD_TASK_REQUEST,
  APP_ADD_TASK_SUCCESS,
  APP_ADD_TASK_ERROR,
  APP_CHANGE_LOADING_STATE,
  APP_GET_REWARDS_REQUEST,
  APP_GET_REWARDS_SUCCESS,
  APP_GET_REWARDS_ERROR,
  APP_ADD_REWARD_SUCCESS,
  APP_ADD_REWARD_ERROR,
  APP_ADD_REWARD_REQUEST,
  APP_GET_HABITS_SUCCESS,
  APP_GET_HABITS_ERROR,
  APP_ADD_HABIT_SUCCESS,
  APP_ADD_HABIT_ERROR,
  APP_GET_HABITS_REQUEST,
  APP_ADD_HABIT_REQUEST,
  APP_UPDATE_TASK_ERROR,
  APP_UPDATE_TASK_SUCCESS,
  APP_UPDATE_TASK_REQUEST,
  APP_UPDATE_GOAL_SUCCESS,
  APP_UPDATE_GOAL_ERROR,
  APP_DELETE_GOAL_SUCCESS,
  APP_DELETE_GOAL_ERROR,
  APP_DELETE_TASK_SUCCESS,
  APP_DELETE_TASK_ERROR,
  APP_UPDATE_GOAL_REQUEST,
  APP_DELETE_GOAL_REQUEST,
  APP_DELETE_TASK_REQUEST,
  APP_GET_CATEGORIES_SUCCESS,
  APP_GET_CATEGORIES_ERROR,
  APP_GET_CATEGORIES_REQUEST,
  APP_GET_PROFILE_SUCCESS,
  APP_GET_PROFILE_ERROR,
  APP_GET_PROFILE_REQUEST,
} from './constants';
import { request } from '../../../utils';
import { rewards } from '../data';


function getProfile() {
  return request.get('/api/profile/');
}

function getCategories() {
  return request.get('/api/category/');
}

function getGoals() {
  return request.get('/api/goal/');
}

function getTasks({ goalId }) {
  return request.get(`/api/goal/${goalId}/get_tasks/`);
}

function addGoal({ goal }) {
  return request.post('/api/goal/', goal);
}

function updateGoal({ goal }) {
  return request.patch(`/api/goal/${goal.id}/`, goal);
}

function deleteGoal({ goalId }) {
  return request.delete(`/api/goal/${goalId}/`);
}

function addTask({ task }) {
  return request.post('/api/task/', task);
}

function updateTask({ task }) {
  return request.patch(`/api/task/${task.id}/`, task);
}

function deleteTask({ taskId }) {
  return request.delete(`/api/task/${taskId}/`);
}

// function getRewaards() {
//   return request.get('/api/rewards/');
// }

function getHabits() {
  return request.get('/api/habits/');
}

function addReward({ reward }) {
  return request.post('/api/reward/', reward);
}


function* handleGetProfile() {
  try {
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: true });

    const { status, data } = yield call(getProfile);

    if (status >= 200 && status < 300 && data?.length) {
      yield put({ type: APP_GET_PROFILE_SUCCESS, payload: data[0] });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    } else {
      yield put({ type: APP_GET_PROFILE_ERROR, error: 'Unknown Error' });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    }
  } catch (error) {
    yield put({
      type: APP_GET_PROFILE_ERROR,
      error: "Can't get profile.",
    });
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
  }
}

function* handleGetGoals() {
  try {
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: true });

    const { status, data } = yield call(getGoals);

    if (status >= 200 && status < 300) {
      yield put({ type: APP_GET_GOALS_SUCCESS, payload: data });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    } else {
      yield put({ type: APP_GET_GOALS_ERROR, error: 'Unknown Error' });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    }
  } catch (error) {
    yield put({ type: APP_GET_GOALS_ERROR, error: "Can't get goals." });
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
  }
}


function* handleGetCategories() {
  try {
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: true });

    const { status, data } = yield call(getCategories);

    if (status >= 200 && status < 300) {
      yield put({ type: APP_GET_CATEGORIES_SUCCESS, payload: data });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    } else {
      yield put({ type: APP_GET_CATEGORIES_ERROR, error: 'Unknown Error' });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    }
  } catch (error) {
    yield put({ type: APP_GET_CATEGORIES_ERROR, error: "Can't get categories." });
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
  }
}


function* handleAddGoal({ goal }) {
  try {
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: true });

    const { status, data } = yield call(addGoal, { goal });

    if (status >= 200 && status < 300) {
      yield put({ type: APP_ADD_GOAL_SUCCESS });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
      yield put({ type: APP_GET_GOALS_REQUEST });

      NavigationService.navigate('GoalDetails', { goalId: data.id });
    } else {
      yield put({ type: APP_ADD_GOAL_ERROR, error: 'Unknown Error' });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    }
  } catch (error) {
    yield put({ type: APP_ADD_GOAL_ERROR, error: 'Something went wrong. Please try again.' });
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
  }
}


function* handleUpdateGoal({ goal }) {
  try {
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: true });

    const { status } = yield call(updateGoal, { goal });

    if (status >= 200 && status < 300) {
      yield put({ type: APP_UPDATE_GOAL_SUCCESS });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
      yield put({ type: APP_GET_GOALS_REQUEST });

      NavigationService.navigate('GoalDetails', { goalId: goal.id });
    } else {
      yield put({ type: APP_UPDATE_GOAL_ERROR, error: 'Unknown Error' });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    }
  } catch (error) {
    yield put({ type: APP_UPDATE_GOAL_ERROR, error: "Can't update a goal." });
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
  }
}


function* handleDeleteGoal({ goalId }) {
  try {
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: true });

    const { status } = yield call(deleteGoal, { goalId });

    if (status >= 200 && status < 300) {
      yield put({ type: APP_DELETE_GOAL_SUCCESS });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
      yield put({ type: APP_GET_GOALS_REQUEST });

      NavigationService.navigate('MainGoals');
    } else {
      yield put({ type: APP_DELETE_GOAL_ERROR, error: 'Unknown Error' });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    }
  } catch (error) {
    yield put({ type: APP_DELETE_GOAL_ERROR, error: "Can't delete a goal." });
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
  }
}

function* handleGetTasks({ goalId }) {
  try {
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: true });

    const { status, data } = yield call(getTasks, { goalId });

    if (status >= 200 && status < 300) {
      yield put({
        type: APP_GET_TASKS_SUCCESS,
        payload: data,
        dataId: goalId,
      });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    } else {
      yield put({ type: APP_GET_TASKS_ERROR, error: 'Unknown Error' });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    }
  } catch (error) {
    yield put({ type: APP_GET_TASKS_ERROR, error: "Can't add a goal." });
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
  }
}


function* handleAddTask({ task }) {
  try {
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: true });

    const { status } = yield call(addTask, { task });

    if (status >= 200 && status < 300) {
      yield put({ type: APP_ADD_TASK_SUCCESS });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
      yield put({ type: APP_GET_GOALS_REQUEST });
    } else {
      yield put({ type: APP_ADD_TASK_ERROR, error: 'Unknown Error' });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    }
  } catch (error) {
    yield put({ type: APP_ADD_TASK_ERROR, error: "Can't add a task." });
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
  }
}


function* handleUpdateTask({ task }) {
  try {
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: true });

    const { status } = yield call(updateTask, { task });

    if (status >= 200 && status < 300) {
      yield put({ type: APP_UPDATE_TASK_SUCCESS });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
      yield put({ type: APP_GET_GOALS_REQUEST });
    } else {
      yield put({ type: APP_UPDATE_TASK_ERROR, error: 'Unknown Error' });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    }
  } catch (error) {
    yield put({ type: APP_UPDATE_TASK_ERROR, error: "Can't add a task." });
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
  }
}


function* handleDeleteTask({ taskId }) {
  try {
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: true });

    const { status } = yield call(deleteTask, { taskId });

    if (status >= 200 && status < 300) {
      yield put({ type: APP_DELETE_TASK_SUCCESS });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
      yield put({ type: APP_GET_GOALS_REQUEST });
    } else {
      yield put({ type: APP_DELETE_TASK_ERROR, error: 'Unknown Error' });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    }
  } catch (error) {
    yield put({ type: APP_DELETE_TASK_ERROR, error: "Can't add a task." });
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
  }
}

function* handleGetRewards() {
  try {
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: true });

    // const { status, data } = yield call(getGoals);

    // if (status === 200) {
    if (true) {
      yield put({ type: APP_GET_REWARDS_SUCCESS, rewards });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    } else {
      yield put({ type: APP_GET_REWARDS_ERROR, error: 'Unknown Error' });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    }
  } catch (error) {
    yield put({ type: APP_GET_REWARDS_ERROR, error: "Can't get goals." });
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
  }
}

function* handleAddReward({ reward }) {
  try {
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: true });

    const { status, data } = yield call(addReward, { reward });

    if (status === 201) {
      yield put({ type: APP_ADD_REWARD_SUCCESS, rewards: data });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
      yield put({ type: APP_GET_REWARDS_REQUEST });

      NavigationService.navigate('Rewards');
    } else {
      yield put({ type: APP_ADD_REWARD_ERROR, error: 'Unknown Error' });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    }
  } catch (error) {
    yield put({
      type: APP_ADD_REWARD_ERROR,
      error: "Can't add a goal.",
    });
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
  }
}

function* handleGetHabits() {
  try {
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: true });

    const { status, data } = yield call(getHabits);

    if (status >= 200 && status < 300) {
      yield put({ type: APP_GET_HABITS_SUCCESS, habits: data });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    } else {
      yield put({ type: APP_GET_HABITS_ERROR, error: 'Unknown Error' });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    }
  } catch (error) {
    yield put({ type: APP_GET_HABITS_ERROR, error: "Can't get habits." });
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
  }
}

function* handleAddHabit(action) {
  const { habit } = action;

  try {
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: true });

    const { status } = yield call(addReward, { habit });

    if (status === 201) {
      yield put({ type: APP_ADD_HABIT_SUCCESS });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
      yield put({ type: APP_GET_HABITS_REQUEST });
    } else {
      yield put({ type: APP_ADD_HABIT_ERROR, error: 'Unknown Error' });
      yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
    }
  } catch (error) {
    yield put({ type: APP_ADD_HABIT_ERROR, error: "Can't add a goal." });
    yield put({ type: APP_CHANGE_LOADING_STATE, isLoading: false });
  }
}


export default all([
  takeLatest(APP_GET_PROFILE_REQUEST, handleGetProfile),
  takeLatest(APP_GET_CATEGORIES_REQUEST, handleGetCategories),
  takeLatest(APP_GET_GOALS_REQUEST, handleGetGoals),
  takeLatest(APP_ADD_GOAL_REQUEST, handleAddGoal),
  takeLatest(APP_UPDATE_GOAL_REQUEST, handleUpdateGoal),
  takeLatest(APP_DELETE_GOAL_REQUEST, handleDeleteGoal),
  takeLatest(APP_GET_TASKS_REQUEST, handleGetTasks),
  takeLatest(APP_ADD_TASK_REQUEST, handleAddTask),
  takeLatest(APP_UPDATE_TASK_REQUEST, handleUpdateTask),
  takeLatest(APP_DELETE_TASK_REQUEST, handleDeleteTask),
  takeLatest(APP_GET_REWARDS_REQUEST, handleGetRewards),
  takeLatest(APP_ADD_REWARD_REQUEST, handleAddReward),
  takeLatest(APP_GET_HABITS_REQUEST, handleGetHabits),
  takeLatest(APP_ADD_HABIT_REQUEST, handleAddHabit),
]);
