import * as actions from './constants';

const initialState = {
  goals: [],
  newGoals: [],
  comments: [],
  myGoals: [],
  myComments: [],
  allComments: [],
  isLoading: false,
  errors: {
    NewGoal: null,
    Goals: null,
    NewGoals: null,
    Comments: null,
    MyGoals: null,
    MyComments: null,
    AllComments: null,
  },
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MAIN_GET_GOALS_SUCCESS:
      return { ...state, goals: action.goals, errors: { Goals: null } };
    case actions.MAIN_GET_GOALS_ERROR:
      return { ...state, errors: { Goals: action.error } };
    case actions.MAIN_CHECK_NEW_GOALS_SUCCESS:
      return { ...state, newGoals: action.newGoals, errors: { NewGoals: null } };
    case actions.MAIN_CHECK_NEW_GOALS_ERROR:
      return { ...state, errors: { NewGoals: action.error } };
    case actions.MAIN_EMPTY_NEW_GOALS:
      return { ...state, newGoals: [] };
    case actions.MAIN_GET_MY_GOALS_SUCCESS:
      return { ...state, myGoals: action.myGoals, errors: { MyGoals: null } };
    case actions.MAIN_GET_MY_GOALS_ERROR:
      return { ...state, errors: { MyGoals: action.error } };
    case actions.MAIN_ADD_GOAL_SUCCESS:
      return { ...state, errors: { NewGoal: null } };
    case actions.MAIN_ADD_GOAL_ERROR:
      return { ...state, errors: { NewGoal: action.error } };
    case actions.MAIN_GET_MY_COMMENTS_SUCCESS:
      return { ...state, myComments: action.myComments, errors: { MyComments: null } };
    case actions.MAIN_GET_MY_COMMENTS_ERROR:
      return { ...state, errors: { MyComments: action.error } };
    case actions.MAIN_GET_ALL_COMMENTS_SUCCESS:
      return { ...state, allComments: action.allComments, errors: { AllComments: null } };
    case actions.MAIN_GET_ALL_COMMENTS_ERROR:
      return { ...state, errors: { MyComments: action.error } };
    case actions.MAIN_GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: { ...state.comments, [action.goalId]: action.comments },
        errors: { Comments: null },
      };
    case actions.MAIN_GET_COMMENTS_ERROR:
      return { ...state, errors: { Comments: action.error } };
    case actions.MAIN_ADD_COMMENT_ERROR:
      return { ...state, errors: { Comments: action.error } };
    case actions.MAIN_CHANGE_LOADING_STATE:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};
