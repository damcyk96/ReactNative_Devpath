import {SafeAreaView} from 'react-native';
import React from 'react';
import HabitsList from '../../components/HabitsList';
import AddHabit from '../../components/HabitsList/AddHabit';
const HabitsScreen = () => {
  return (
    <SafeAreaView>
      <AddHabit />
      <HabitsList />
    </SafeAreaView>
  );
};

export default HabitsScreen;
