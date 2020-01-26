import * as actions from './constants';

const initialState = {
  goals: [],
  tasks: {},
  rewards: [],
  isLoading: false,
  errors: {
    Goals: null,
    AddGoal: null,
    Tasks: null,
    AddTask: null,
    Rewards: null,
    AddReward: null,
    Habits: null,
    AddHabit: null,
  },
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.APP_GET_GOALS_SUCCESS:
      return { ...state, goals: action.payload, errors: { Goals: null } };
    case actions.APP_GET_GOALS_ERROR:
      return { ...state, errors: { Goals: action.error } };
    case actions.APP_GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: { ...state.tasks, [action.dataId]: action.payload },
        errors: { Tasks: null },
      };
    case actions.APP_GET_TASKS_ERROR:
      return { ...state, errors: { Tasks: action.error } };
    case actions.APP_ADD_GOAL_SUCCESS:
      return { ...state, errors: { AddGoal: null } };
    case actions.APP_ADD_GOAL_ERROR:
      return { ...state, errors: { AddGoal: action.error } };
    case actions.APP_ADD_TASK_SUCCESS:
      return { ...state, errors: { AddTask: null } };
    case actions.APP_ADD_TASK_ERROR:
      return { ...state, errors: { AddTask: action.error } };
    case actions.APP_GET_REWARDS_SUCCESS:
      return { ...state, rewards: action.rewards, errors: { Rewards: null } };
    case actions.APP_GET_REWARDS_ERROR:
      return { ...state, errors: { Rewards: action.error } };
    case actions.APP_ADD_REWARD_SUCCESS:
      return { ...state, errors: { AddReward: null } };
    case actions.APP_ADD_REWARD_ERROR:
      return { ...state, errors: { AddReward: action.error } };
    case actions.APP_GET_HABITS_SUCCESS:
      return { ...state, habits: action.habits, errors: { Habits: null } };
    case actions.APP_GET_HABITS_ERROR:
      return { ...state, errors: { Habits: action.error } };
    case actions.APP_ADD_HABIT_SUCCESS:
      return { ...state, errors: { AddHabit: null } };
    case actions.APP_ADD_HABIT_ERROR:
      return { ...state, errors: { AddHabit: action.error } };
    case actions.APP_CHANGE_LOADING_STATE:
      return { ...state, isLoading: action.isLoading };
    case actions.APP_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
