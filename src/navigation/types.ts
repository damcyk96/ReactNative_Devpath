import {Habit} from './../store/habits/types';
import {Todo} from './../store/todos/types';
export type AppStackProps = {
  EditTodo: {todo: Todo};
  Todos: undefined;
  Home: undefined;
  AddTodo: undefined;
  EditHabit: {habit: Habit};
};
