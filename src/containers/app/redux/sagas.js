import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';

import * as NavigationService from '../../../navigator/NavigationService';
import {
  MAIN_GET_GOALS_REQUEST,
  MAIN_GET_GOALS_SUCCESS,
  MAIN_GET_GOALS_ERROR,
  MAIN_GET_MY_GOALS_REQUEST,
  MAIN_GET_MY_GOALS_SUCCESS,
  MAIN_GET_MY_GOALS_ERROR,
  MAIN_ADD_GOAL_REQUEST,
  MAIN_ADD_GOAL_SUCCESS,
  MAIN_ADD_GOAL_ERROR,
  MAIN_GET_COMMENTS_REQUEST,
  MAIN_GET_COMMENTS_SUCCESS,
  MAIN_GET_COMMENTS_ERROR,
  MAIN_GET_MY_COMMENTS_REQUEST,
  MAIN_GET_MY_COMMENTS_SUCCESS,
  MAIN_GET_MY_COMMENTS_ERROR,
  MAIN_GET_ALL_COMMENTS_REQUEST,
  MAIN_GET_ALL_COMMENTS_SUCCESS,
  MAIN_GET_ALL_COMMENTS_ERROR,
  MAIN_ADD_COMMENT_REQUEST,
  MAIN_ADD_COMMENT_SUCCESS,
  MAIN_ADD_COMMENT_ERROR,
  MAIN_REPORT_GOAL_REQUEST,
  MAIN_REPORT_GOAL_SUCCESS,
  MAIN_REPORT_GOAL_ERROR,
  MAIN_CHECK_NEW_GOALS_REQUEST,
  MAIN_CHECK_NEW_GOALS_SUCCESS,
  MAIN_CHECK_NEW_GOALS_ERROR,
  MAIN_CHANGE_LOADING_STATE,
} from './constants';
import { request } from '../../../utils/http';
import { goals } from '../data';


// function getGoals() {
//   return request.get('/api/v1/goals/');
// }

function getNewGoals({ lastGoalId }) {
  return request.get(`/api/v1/goal/recent/?last_goal_id=${lastGoalId}`);
}

function getMyGoals() {
  return request.get('/api/v1/goal/my/');
}

function addGoal({ goal }) {
  return request.goal('/api/v1/goal/', goal);
}

function getComments({ goalId }) {
  return request.get(`/api/v1/goal/${goalId}/comments/`);
}

function getMyComments() {
  return request.get('/api/v1/comment/my/');
}

function getAllComments() {
  return request.get('/api/v1/comment/');
}

function addComment({ comment }) {
  return request.goal('/api/v1/comment/', comment);
}

function reportGoal({ reporter, goal }) {
  return request.goal('/api/v1/report/', { reporter, goal });
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

// Unused
function* handleCheckNewGoals({ lastGoalId }) {
  try {
    const { status, data } = yield call(getNewGoals, { lastGoalId });

    if (status === 200) {
      yield put({
        type: MAIN_CHECK_NEW_GOALS_SUCCESS,
        newGoals: data,
      });
    } else {
      yield put({
        type: MAIN_CHECK_NEW_GOALS_ERROR,
        error: 'Unknown Error',
      });
    }
  } catch (error) {
    console.log('error :', error);
    yield put({
      type: MAIN_CHECK_NEW_GOALS_ERROR,
      error: "Can't get new goals.",
    });

    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: false,
    });
  }
}

// Unused
function* handleGetMyGoals() {
  try {
    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: true,
    });

    const { status, data } = yield call(getMyGoals);

    if (status === 200) {
      yield put({
        type: MAIN_GET_MY_GOALS_SUCCESS,
        myGoals: data,
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });
    } else {
      yield put({
        type: MAIN_GET_MY_GOALS_ERROR,
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
      type: MAIN_GET_MY_GOALS_ERROR,
      error: "Can't get goals.",
    });

    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: false,
    });
  }
}

// Unused
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

// Unused
function* handleGetComments(action) {
  const { goalId } = action;

  try {
    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: true,
    });

    const { status, data } = yield call(getComments, { goalId });

    if (status === 200) {
      yield put({
        type: MAIN_GET_COMMENTS_SUCCESS,
        comments: data,
        goalId,
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });
    } else {
      yield put({
        type: MAIN_GET_COMMENTS_ERROR,
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
      type: MAIN_GET_COMMENTS_ERROR,
      error: "Can't get goals.",
    });

    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: false,
    });
  }
}

// Unused
function* handleGetMyComments() {
  try {
    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: true,
    });

    const { status, data } = yield call(getMyComments);

    if (status === 200) {
      yield put({
        type: MAIN_GET_MY_COMMENTS_SUCCESS,
        myComments: data,
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });
    } else {
      yield put({
        type: MAIN_GET_MY_COMMENTS_ERROR,
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
      type: MAIN_GET_MY_COMMENTS_ERROR,
      error: "Can't get goals.",
    });

    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: false,
    });
  }
}

// Unused
function* handleGetAllComments() {
  try {
    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: true,
    });

    const { status, data } = yield call(getAllComments);

    if (status === 200) {
      yield put({
        type: MAIN_GET_ALL_COMMENTS_SUCCESS,
        allComments: data,
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });
    } else {
      yield put({
        type: MAIN_GET_ALL_COMMENTS_ERROR,
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
      type: MAIN_GET_ALL_COMMENTS_ERROR,
      error: "Can't get goals.",
    });

    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: false,
    });
  }
}

// Unused
function* handleAddComment(action) {
  const { comment } = action;

  try {
    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: true,
    });

    const { status } = yield call(addComment, { comment });

    if (status === 201) {
      yield put({
        type: MAIN_ADD_COMMENT_SUCCESS,
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });

      yield put({
        type: MAIN_GET_COMMENTS_REQUEST,
        goalId: comment.goal,
      });
    } else {
      yield put({
        type: MAIN_ADD_COMMENT_ERROR,
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
      type: MAIN_ADD_COMMENT_ERROR,
      error: "Can't add a goal.",
    });

    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: false,
    });
  }
}

// Unused
function* handleReportGoal(action) {
  const { goal, reporter } = action;

  try {
    yield put({
      type: MAIN_CHANGE_LOADING_STATE,
      isLoading: true,
    });

    const { status } = yield call(reportGoal, { goal, reporter });

    if (status === 201) {
      yield put({
        type: MAIN_REPORT_GOAL_SUCCESS,
      });

      yield put({
        type: MAIN_CHANGE_LOADING_STATE,
        isLoading: false,
      });

      yield put({
        type: MAIN_GET_GOALS_REQUEST,
      });
    } else {
      yield put({
        type: MAIN_REPORT_GOAL_ERROR,
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
      type: MAIN_REPORT_GOAL_ERROR,
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
  takeLatest(MAIN_GET_MY_GOALS_REQUEST, handleGetMyGoals),
  takeLatest(MAIN_CHECK_NEW_GOALS_REQUEST, handleCheckNewGoals),
  takeLatest(MAIN_ADD_GOAL_REQUEST, handleAddGoal),
  takeLatest(MAIN_GET_COMMENTS_REQUEST, handleGetComments),
  takeLatest(MAIN_GET_MY_COMMENTS_REQUEST, handleGetMyComments),
  takeLatest(MAIN_GET_ALL_COMMENTS_REQUEST, handleGetAllComments),
  takeLatest(MAIN_ADD_COMMENT_REQUEST, handleAddComment),
  takeLatest(MAIN_REPORT_GOAL_REQUEST, handleReportGoal),
]);
