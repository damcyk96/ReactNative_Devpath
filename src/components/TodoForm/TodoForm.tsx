import React, {useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Todo} from '../../store/todos/types';

type Props = {
  buttonText: string;
  defaultValues?: Todo;
  onSubmit?: (formData: Todo) => void;
};

const schema = yup.object().shape({
  text: yup.string().required().min(5, 'must be longer than 5'),
});

const TodoForm = ({buttonText, defaultValues, onSubmit}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<Todo>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: defaultValues || {
      text: '',
    },
  });

  const handleOnSubmit = useCallback(
    (formData: Todo) => {
      onSubmit?.(formData);
    },
    [onSubmit],
  );

  return (
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

export default TodoForm;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  formRow: {
    paddingVertical: 8 * 0.5,
  },
});
