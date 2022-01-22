import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {screenNames} from '../screenNames';
import {AddTodo, EditTodo} from '../../screens';
import MainTabs from '../MainTabs';
import AddHabit from '../../screens/AddHabit';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tabs"
      component={MainTabs}
      options={{headerShown: false}}
    />
    {/* MAIN STACK */}
    <Stack.Screen name={screenNames.EditTodo} component={EditTodo} />
    <Stack.Screen name={screenNames.AddTodo} component={AddTodo} />
    <Stack.Screen name={screenNames.AddHabit} component={AddHabit} />
  </Stack.Navigator>
);

export default AppStack;
