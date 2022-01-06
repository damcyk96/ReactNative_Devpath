import {FlatList, StyleSheet, View} from 'react-native';
import {shallowEqual, useSelector} from 'react-redux';

import {Filter} from '../store/filters/types';
import FilterButton from './FilterButton';
import React from 'react';
import TodoItem from './TodoItem';
import {selectFilteredTodoIds} from '../store/todos/selectors';
import colors from '../config/colors';

const TodosList: React.FC = () => {
  const todoIds = useSelector(selectFilteredTodoIds, shallowEqual);

  return (
    <>
      <View style={styles.filterContainer}>
        <FilterButton filter={Filter.All} color={colors.medium} />
        <FilterButton filter={Filter.Incomplete} color={colors.red} />
        <FilterButton filter={Filter.Complete} color={colors.green} />
      </View>
      <FlatList
        data={todoIds}
        keyExtractor={id => id.toString()}
        renderItem={({item}) => <TodoItem id={item} />}
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

export default TodosList;
