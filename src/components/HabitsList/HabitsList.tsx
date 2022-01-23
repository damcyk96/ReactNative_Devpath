import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import React, {useState} from 'react';
import {
  selectCompletedHabitsByDate,
  selectHabitIdsByDate,
} from '../../store/habits/selectors';
import HabitItem from './HabitItem';
import DateTimePicker from '@react-native-community/datetimepicker';
import {RootState} from '../../store/types';
import {Text} from 'react-native-paper';
import Card from '../Card';

const HabitsList: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const habitIds = useSelector((state: RootState) =>
    selectHabitIdsByDate(state, date),
  );
  const completedHabits = useSelector((state: RootState) =>
    selectCompletedHabitsByDate(state, date),
  );
  console.log(completedHabits.length);
  const onChange = (event, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View>
      <Card>
        <Text>Liczba kompletnych zadan: {completedHabits.length}</Text>
      </Card>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="date"
        is24Hour={true}
        display="spinner"
        onChange={onChange}
      />
      <FlatList
        data={habitIds}
        keyExtractor={id => id}
        renderItem={({item}) => <HabitItem id={item} />}
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    width: '100%',
  },
});

export default HabitsList;
