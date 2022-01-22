import {SafeAreaView} from 'react-native';
import React from 'react';
import HabitsList from '../../components/HabitsList';

const HabitsScreen = () => {
  return (
    <SafeAreaView>
      <HabitsList />
    </SafeAreaView>
  );
};

export default HabitsScreen;
