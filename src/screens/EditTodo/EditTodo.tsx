import React, {useCallback} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {useDispatch} from 'react-redux';
import TodoForm from '../../components/TodoForm';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackProps} from '../../navigation/types';
import {Todo} from '../../store/todos/types';
import {editTodo} from '../../store/todos/actions';
import {useDispatch} from 'react-redux';

type Props = NativeStackScreenProps<AppStackProps, 'EditTodo'>;

const EditTodo = ({route}: Props) => {
  const {goBack} = useNavigation();
  const {params} = route;
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (formData: Todo) => {
      dispatch(editTodo(formData));
      goBack();
    },
    [dispatch, goBack],
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <TodoForm
          onSubmit={onSubmit}
          buttonText="Edit todo"
          defaultValues={params.todo}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditTodo;
