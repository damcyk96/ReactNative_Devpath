import React, {useCallback} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TodoForm from '../../components/TodoForm';
import {Todo} from '../../store/todos/types';
import {addTodo} from '../../store/todos/actions';
import {useDispatch} from 'react-redux';

const AddTodo = () => {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (formData: Todo) => {
      dispatch(addTodo(formData));
      goBack();
    },
    [dispatch, goBack],
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <TodoForm onSubmit={onSubmit} buttonText="Add todo" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddTodo;
