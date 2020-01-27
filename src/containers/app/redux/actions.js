import * as actions from './constants';

export const getGoals = () => ({
  type: actions.APP_GET_GOALS_REQUEST,
});

export const addGoal = (goal) => ({
  type: actions.APP_ADD_GOAL_REQUEST,
  goal,
});

export const updateGoal = (goal) => ({
  type: actions.APP_UPDATE_GOAL_REQUEST,
  goal,
});

export const deleteGoal = (goalId) => ({
  type: actions.APP_DELETE_GOAL_REQUEST,
  goalId,
});

export const getTasks = (goalId) => ({
  type: actions.APP_GET_TASKS_REQUEST,
  goalId,
});

export const addTask = (task) => ({
  type: actions.APP_ADD_TASK_REQUEST,
  task,
});

export const deleteTask = (taskId) => ({
  type: actions.APP_DELETE_TASK_REQUEST,
  taskId,
});

export const updateTask = (task) => ({
  type: actions.APP_UPDATE_TASK_REQUEST,
  task,
});

export const getRewards = () => ({
  type: actions.APP_GET_REWARDS_REQUEST,
});

export const addReward = (reward) => ({
  type: actions.APP_ADD_REWARD_REQUEST,
  reward,
});

export const getHabits = () => ({
  type: actions.APP_GET_HABITS_REQUEST,
});

export const addHabit = (habit) => ({
  type: actions.APP_ADD_HABIT_REQUEST,
  habit,
});

export const logout = () => ({
  type: actions.APP_LOGOUT,
});
