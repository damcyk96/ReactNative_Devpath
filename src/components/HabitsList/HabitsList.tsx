import {FlatList, StyleSheet} from 'react-native';
import {shallowEqual, useSelector} from 'react-redux';

import React from 'react';
import {selectHabitIds} from '../../store/habits/selectors';
import HabitItem from './HabitItem';

const HabitsList: React.FC = () => {
  const habitIds = useSelector(selectHabitIds, shallowEqual);
  console.log(habitIds);
  return (
    <>
      <FlatList
        data={habitIds}
        keyExtractor={id => id.toString()}
        renderItem={({item}) => <HabitItem id={item} />}
        style={styles.container}
      />
    </>
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
