import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {screenNames} from '../screenNames';
import EditTodo from '../../screens/EditTodo';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator initialRouteName={screenNames.Settings}>
    <Stack.Screen name={screenNames.EditTodo} component={EditTodo} />
  </Stack.Navigator>
);

export default AppStack;
