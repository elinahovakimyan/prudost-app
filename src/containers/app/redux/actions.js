import * as actions from './constants';

export const getGoals = () => ({
  type: actions.MAIN_GET_GOALS_REQUEST,
});

export const checkNewGoals = (lastGoalId) => ({
  type: actions.MAIN_CHECK_NEW_GOALS_REQUEST,
  lastGoalId,
});

export const emptyNewGoals = () => ({
  type: actions.MAIN_EMPTY_NEW_GOALS,
});

export const getMyGoals = () => ({
  type: actions.MAIN_GET_MY_GOALS_REQUEST,
});

export const addGoal = (goal) => ({
  type: actions.MAIN_ADD_GOAL_REQUEST,
  goal,
});

export const getComments = (goalId) => ({
  type: actions.MAIN_GET_COMMENTS_REQUEST,
  goalId,
});

export const getMyComments = () => ({
  type: actions.MAIN_GET_MY_COMMENTS_REQUEST,
});

export const getAllComments = () => ({
  type: actions.MAIN_GET_ALL_COMMENTS_REQUEST,
});

export const addComment = (comment) => ({
  type: actions.MAIN_ADD_COMMENT_REQUEST,
  comment,
});

export const reportGoal = ({ goal, reporter }) => ({
  type: actions.MAIN_REPORT_GOAL_REQUEST,
  goal,
  reporter,
});
