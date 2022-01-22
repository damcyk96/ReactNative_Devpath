import {Habit} from './habits/types';
import {Filter} from './filters/types';
import {Todo} from './todos/types';

export interface RootState {
  todos: Todo[];
  filter: Filter;
  habits: Habit[];
}
