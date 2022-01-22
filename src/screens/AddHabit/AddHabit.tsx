import React, {useCallback} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Habit} from '../../store/habits/types';
import {addHabit} from '../../store/habits/actions';
import HabitForm from '../../components/HabitForm';

const AddHabit = () => {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (formData: Habit) => {
      dispatch(addHabit(formData));
      goBack();
    },
    [dispatch, goBack],
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <HabitForm onSubmit={onSubmit} buttonText="Add habit" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddHabit;
