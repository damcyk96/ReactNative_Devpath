import {
  ADD_HABIT,
  DELETE_HABIT,
  EDIT_HABIT,
  Habit,
  HabitActionTypes,
  TOGGLE_HABIT,
} from './types';

const initialState: Habit[] = [];

const habitsReducer = (
  state = initialState,
  action: HabitActionTypes,
): Habit[] => {
  switch (action.type) {
    case ADD_HABIT:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          completed: false,
          date: action.payload.date,
          difficulty: action.payload.difficulty,
        },
      ];
    case EDIT_HABIT:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: action.payload.completed,
          date: action.payload.date,
          difficulty: action.payload.difficulty,
        },
      ];
    case DELETE_HABIT:
      return state.filter(todo => todo.id !== action.payload);
    case TOGGLE_HABIT:
      return state.map(habit => {
        if (habit.id !== action.payload) {
          return habit;
        }
        return {
          ...habit,
          completed: !habit.completed,
        };
      });
    default:
      return state;
  }
};

export default habitsReducer;
