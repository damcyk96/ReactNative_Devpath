import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  TodoActionTypes,
  Todo,
} from './types';

export const addTodo = (todo: Todo): TodoActionTypes => ({
  type: ADD_TODO,
  payload: todo,
});

export const editTodo = (todo: Todo): TodoActionTypes => ({
  type: EDIT_TODO,
  payload: todo,
});

export const deleteTodo = (id: number): TodoActionTypes => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleTodo = (id: number): TodoActionTypes => ({
  type: TOGGLE_TODO,
  payload: id,
});
