import {RootState} from '../types';
import {Habit} from './types';

export const selectHabits = (state: RootState): Habit[] => state.habits;

export const selectHabitIds = (state: RootState): (number | undefined)[] =>
  state.habits.map(habit => habit.id);

export const selectHabitById = (
  state: RootState,
  id: number,
): Habit | undefined => state.habits.find(habit => habit.id === id);
