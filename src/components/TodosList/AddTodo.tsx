import React from 'react';
import Button from '../Button';
import Card from '../Card';
import colors from '../../config/colors';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../../navigation/screenNames';

const AddTodo: React.FC = () => {
  const {navigate} = useNavigation();

  return (
    <Card title="Add New Todo">
      <Button
        title="Add Todo"
        color={colors.blue}
        onPress={() => {
          navigate(screenNames.AddTodo);
        }}
      />
    </Card>
  );
};

export default AddTodo;
