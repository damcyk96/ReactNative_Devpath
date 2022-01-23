import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  Todo,
  TodoActionTypes,
} from './types';

const initialState: Todo[] = [];

const todosReducer = (
  state = initialState,
  action: TodoActionTypes,
): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          completed: false,
        },
      ];
    case EDIT_TODO:
      const foundedTodo = state.find(todo => todo.id === action.payload.id);
      const foundedIndex = state.findIndex(
        todo => todo.id === action.payload.id,
      );
      console.log(foundedIndex, 'dupa');
      if (foundedTodo) {
        console.log(foundedTodo.text, action.payload.text);
        foundedTodo.text = action.payload.text;
        state.splice(foundedIndex, 1, foundedTodo);
        console.log(state);
      }
      return state;
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    default:
      return state;
  }
};

export default todosReducer;
