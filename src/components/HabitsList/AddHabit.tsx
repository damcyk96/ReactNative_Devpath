import React from 'react';
import Button from '../Button';
import Card from '../Card';
import colors from '../../config/colors';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../../navigation/screenNames';

const AddHabit: React.FC = () => {
  const {navigate} = useNavigation();

  return (
    <Card title="Add New Habit">
      <Button
        title="Add Habit"
        color={colors.blue}
        onPress={() => {
          navigate(screenNames.AddHabit);
        }}
      />
    </Card>
  );
};

export default AddHabit;
