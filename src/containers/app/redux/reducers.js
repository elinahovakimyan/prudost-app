import * as actions from './constants';

const initialState = {
  goals: [],
  rewards: [],
  isLoading: false,
  errors: {
    Goals: null,
    AddGoal: null,
    Rewards: null,
    AddReward: null,
  },
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MAIN_GET_GOALS_SUCCESS:
      return { ...state, goals: action.goals, errors: { Goals: null } };
    case actions.MAIN_GET_GOALS_ERROR:
      return { ...state, errors: { Goals: action.error } };
    case actions.MAIN_ADD_GOAL_SUCCESS:
      return { ...state, errors: { AddGoal: null } };
    case actions.MAIN_ADD_GOAL_ERROR:
      return { ...state, errors: { AddGoal: action.error } };
    case actions.MAIN_GET_REWARDS_SUCCESS:
      return { ...state, rewards: action.rewards, errors: { Rewards: null } };
    case actions.MAIN_GET_REWARDS_ERROR:
      return { ...state, errors: { Rewards: action.error } };
    case actions.MAIN_ADD_REWARD_SUCCESS:
      return { ...state, errors: { AddReward: null } };
    case actions.MAIN_ADD_REWARD_ERROR:
      return { ...state, errors: { AddReward: action.error } };
    case actions.MAIN_CHANGE_LOADING_STATE:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};
