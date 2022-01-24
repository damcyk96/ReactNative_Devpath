import {Store, combineReducers, createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {RootState} from './types';
import filterReducer from './filters/reducer';
import todosReducer from './todos/reducer';
import habitsReducer from './habits/reducer';

const rootReducer = combineReducers<RootState>({
  todos: todosReducer,
  filter: filterReducer,
  habits: habitsReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//@ts-ignore
const middlewares = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const configureStore = (): Store => {
  //@ts-ignore
  return createStore(persistedReducer, applyMiddleware(...middlewares));
};

export default configureStore;
