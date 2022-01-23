import {
  ADD_HABIT,
  DELETE_HABIT,
  EDIT_HABIT,
  TOGGLE_HABIT,
  HabitActionTypes,
  Habit,
  // GET_HABITS_BY_DATE,
} from './types';

export const addHabit = (habit: Habit): HabitActionTypes => ({
  type: ADD_HABIT,
  payload: habit,
});

export const editHabit = (habit: Habit): HabitActionTypes => ({
  type: EDIT_HABIT,
  payload: habit,
});

// export const getHabitsByDate = (date: Date): HabitActionTypes => ({
//   type: GET_HABITS_BY_DATE,
//   payload: date,
// });

export const deleteHabit = (id: number): HabitActionTypes => ({
  type: DELETE_HABIT,
  payload: id,
});

export const toggleHabit = (id: number): HabitActionTypes => ({
  type: TOGGLE_HABIT,
  payload: id,
});
