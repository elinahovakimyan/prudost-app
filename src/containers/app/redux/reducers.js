import * as actions from './constants';

const initialState = {
  goals: [],
  categories: [],
  allTasks: [],
  tasks: {},
  profile: {},
  rewards: [],
  isLoading: false,
  errors: {
    Profile: null,
    Categories: null,
    Goals: null,
    AddGoal: null,
    Tasks: null,
    AddTask: null,
    UpdateTask: null,
    Rewards: null,
    AddReward: null,
    Habits: null,
    AddHabit: null,
  },
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.APP_GET_PROFILE_SUCCESS:
      return { ...state, profile: action.payload, errors: { Profile: null } };
    case actions.APP_GET_PROFILE_ERROR:
      return { ...state, errors: { Profile: action.error } };
    case actions.APP_UPDATE_PROFILE_SUCCESS:
      return { ...state, profile: action.payload, errors: { Profile: null } };
    case actions.APP_UPDATE_PROFILE_ERROR:
      return { ...state, errors: { Profile: action.error } };
    case actions.APP_GET_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, errors: { Categories: null } };
    case actions.APP_GET_CATEGORIES_ERROR:
      return { ...state, errors: { Categories: action.error } };
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
    case actions.APP_GET_ALL_TASKS_SUCCESS:
      return { ...state, allTasks: action.payload, errors: { Tasks: null } };
    case actions.APP_GET_ALL_TASKS_ERROR:
      return { ...state, errors: { Tasks: action.error } };
    case actions.APP_ADD_GOAL_ERROR:
      return { ...state, errors: { AddGoal: action.error } };
    case actions.APP_ADD_TASK_SUCCESS:
      return { ...state, errors: { AddTask: null } };
    case actions.APP_ADD_TASK_ERROR:
      return { ...state, errors: { AddTask: action.error } };
    case actions.APP_UPDATE_TASK_SUCCESS:
      return { ...state, errors: { UpdateTask: null } };
    case actions.APP_UPDATE_TASK_ERROR:
      return { ...state, errors: { UpdateTask: action.error } };
    case actions.APP_GET_REWARDS_SUCCESS:
      return { ...state, rewards: action.payload, errors: { Rewards: null } };
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
