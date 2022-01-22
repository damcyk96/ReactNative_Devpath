import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Settings, TodosScreen} from '../../screens';
import {screenNames} from '../screenNames';
import HabitsScreen from '../../screens/HabitsScreen';

const Tab = createBottomTabNavigator();

const iconNames = {
  [screenNames.Todos]: 'ios-list',
  [screenNames.Settings]: 'ios-settings',
  [screenNames.Habits]: 'ios-beer',
};

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        const iconName = Object.entries(iconNames).find(
          icon => icon[0] === route.name,
        );

        return (
          <Ionicons
            name={iconName ? iconName[1] : 'ios-help'}
            size={size}
            color={color}
          />
        );
      },
    })}>
    <Tab.Screen
      name={screenNames.Habits}
      component={HabitsScreen}
      options={{
        headerShown: false,
      }}
    />
    <Tab.Screen
      name={screenNames.Todos}
      component={TodosScreen}
      options={{
        headerShown: false,
      }}
    />
    <Tab.Screen
      name={screenNames.Settings}
      component={Settings}
      options={{headerShown: false}}
    />
  </Tab.Navigator>
);

export default MainTabs;
