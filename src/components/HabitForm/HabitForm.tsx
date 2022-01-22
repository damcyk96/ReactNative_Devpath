import React, {useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Habit} from '../../store/habits/types';

type Props = {
  buttonText: string;
  defaultValues?: Habit;
  onSubmit?: (formData: Habit) => void;
};

const schema = yup.object().shape({
  text: yup.string().required().min(5, 'must be longer than 5'),
  difficulty: yup.number().min(0, 'minimum is 0').max(5, 'max is 5'),
  date: yup.date(),
});

const HabitForm = ({buttonText, defaultValues, onSubmit}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<Habit>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: defaultValues || {
      date: new Date(),
      difficulty: 0,
      text: '',
    },
  });

  const handleOnSubmit = useCallback(
    (formData: Habit) => {
      onSubmit?.(formData);
    },
    [onSubmit],
  );

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.formRow}>
          <Controller
            control={control}
            name="text"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                mode="outlined"
                label="text"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.text}
              />
            )}
          />
        </View>
        <View style={styles.formRow}>
          <Controller
            control={control}
            name="difficulty"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                mode="outlined"
                label="difficulty"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.difficulty}
                keyboardType="number-pad"
              />
            )}
          />
        </View>
        <View style={styles.formRow}>
          <Controller
            control={control}
            name="date"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                mode="outlined"
                label="date"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.date}
              />
            )}
          />
        </View>
      </View>
      <View style={styles.formRow}>
        <Button
          mode="contained"
          onPress={handleSubmit(handleOnSubmit)}
          disabled={!isValid}>
          {buttonText}
        </Button>
      </View>
    </View>
  );
};

export default HabitForm;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  formRow: {
    paddingVertical: 8 * 0.5,
  },
});
