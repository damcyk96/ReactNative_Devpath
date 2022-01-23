import dayjs from 'dayjs';
import {RootState} from '../types';
import {Habit} from './types';

export const selectHabits = (state: RootState): Habit[] => state.habits;

export const selectHabitIds = (state: RootState): (number | undefined)[] =>
  state.habits.map(habit => habit.id);

export const selectCompletedHabitIds = (
  state: RootState,
): (number | undefined)[] =>
  state.habits.map(habit => {
    if (habit.completed) {
      return habit.id;
    }
  });

export const selectHabitById = (
  state: RootState,
  id: number,
): Habit | undefined => state.habits.find(habit => habit.id === id);

export const selectHabitIdsByDate = (
  state: RootState,
  date: Date,
): number | undefined => {
  const {habits} = state;
  return habits
    .filter(
      habit =>
        dayjs(habit.date).format('DD/MM/YYYY') ===
        dayjs(date).format('DD/MM/YYYY'),
    )
    .map(habit => habit.id);
};

export const selectCompletedHabitsByDate = (
  state: RootState,
  date: Date,
): number | undefined => {
  const {habits} = state;
  return habits
    .filter(
      habit =>
        dayjs(habit.date).format('DD/MM/YYYY') ===
          dayjs(date).format('DD/MM/YYYY') && habit.completed,
    )
    .map(habit => habit.id);
};
