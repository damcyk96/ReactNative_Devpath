export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export interface Todo {
  id?: number;
  text: string;
  completed?: boolean;
}

export interface TodoFormData {
  text: string;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

interface EditTodoAction {
  type: typeof EDIT_TODO;
  payload: string;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

export type TodoActionTypes =
  | AddTodoAction
  | EditTodoAction
  | DeleteTodoAction
  | ToggleTodoAction;
