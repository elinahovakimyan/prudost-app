import * as actions from './constants';

export const getGoals = () => ({
  type: actions.MAIN_GET_GOALS_REQUEST,
});

export const addGoal = (goal) => ({
  type: actions.MAIN_ADD_GOAL_REQUEST,
  goal,
});

export const getRewards = () => ({
  type: actions.MAIN_GET_REWARDS_REQUEST,
});

export const addReward = (reward) => ({
  type: actions.MAIN_ADD_REWARD_REQUEST,
  reward,
});

export const getHabits = () => ({
  type: actions.MAIN_GET_HABITS_REQUEST,
});

export const addHabit = (habit) => ({
  type: actions.MAIN_ADD_HABIT_REQUEST,
  habit,
});
