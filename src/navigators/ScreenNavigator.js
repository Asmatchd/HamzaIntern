import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SignUp} from '../screens/signUp';
import {Basics, Basics1} from '../screens/basics';

const Stack = createStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Basics"
          component={Basics}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Basics1"
          component={Basics1}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
