import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {List} from '../screens/list';
import {Basics} from '../screens/basics';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'grey',
        showLabel: false,
        tabStyle: {
          backgroundColor: 'orange',
        },
      }}>
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Basics"
        component={Basics}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-options" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
