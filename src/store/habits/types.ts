export const ADD_HABIT = 'ADD_HABIT';
export const EDIT_HABIT = 'EDIT _HABIT';
export const DELETE_HABIT = 'DELETE_HABIT';
export const TOGGLE_HABIT = 'TOGGLE_HABIT';
export const GET_HABITS_BY_DATE = 'GET_HABITS_BY_DATE';

export type Habit = {
  id?: number;
  text: string;
  completed?: boolean;
  difficulty: number;
  date: Date;
};

interface AddHabitAction {
  type: typeof ADD_HABIT;
  payload: Habit;
}

interface EditHabitAction {
  type: typeof EDIT_HABIT;
  payload: Habit;
}

interface DeleteHabitAction {
  type: typeof DELETE_HABIT;
  payload: number;
}

interface ToggleHabitAction {
  type: typeof TOGGLE_HABIT;
  payload: number;
}
interface GetHabitsByDayAction {
  type: typeof GET_HABITS_BY_DATE;
  payload: Date;
}

export type HabitActionTypes =
  | AddHabitAction
  | DeleteHabitAction
  | EditHabitAction
  | ToggleHabitAction
  | GetHabitsByDayAction;
