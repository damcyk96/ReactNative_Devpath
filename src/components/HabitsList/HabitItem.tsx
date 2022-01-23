import {StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import AppText from '../AppText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {RootState} from '../../store/types';
import colors from '../../config/colors';
import {screenNames} from '../../navigation/screenNames';
import {deleteHabit, toggleHabit} from '../../store/habits/actions';
import {selectHabitById} from '../../store/habits/selectors';
import dayjs from 'dayjs';

interface HabitItemProps {
  id: number;
}

const TodoItem: React.FC<HabitItemProps> = ({id}) => {
  const {navigate} = useNavigation();

  const habit = useSelector((state: RootState) => selectHabitById(state, id));
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteHabit(id));
  const handleToggle = () => dispatch(toggleHabit(id));
  return habit ? (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={handleToggle}
        style={[
          styles.container,
          habit.completed && {backgroundColor: colors.medium},
        ]}>
        {habit.completed && (
          <MaterialCommunityIcons
            color={colors.green}
            name="check"
            size={25}
            style={styles.complete}
          />
        )}

        <AppText style={styles.text}>
          {habit.text}, {dayjs(habit.date).format('DD/MM/YYYY')},
          {habit.difficulty}
        </AppText>
        <MaterialCommunityIcons
          color={colors.blue}
          name="file-edit"
          onPress={() => {
            return navigate(screenNames.EditHabit, {habit: habit});
          }}
          size={25}
          style={styles.edit}
        />
        <MaterialCommunityIcons
          color={colors.red}
          name="delete-alert"
          onPress={handleDelete}
          size={25}
          style={styles.delete}
        />
      </TouchableOpacity>
    </>
  ) : null;
};

const styles = StyleSheet.create({
  complete: {
    paddingRight: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 20,
    width: '100%',
  },
  delete: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  edit: {
    position: 'absolute',
    right: 60,
    top: 20,
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 25,
    // fontFamily: 'DancingScript-Regular',
  },
});

export default TodoItem;
