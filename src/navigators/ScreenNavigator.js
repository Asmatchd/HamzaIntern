import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SignUp} from '../screens/signUp';
import {Basics, Basics1} from '../screens/basics';
import {SignIn} from '../screens/signIn';
import {Dashboard, Settings} from '../screens/dashboard';
import {Details, List} from '../screens/list';
import {Splash} from '../screens/splash';
import {DrawerNavigator} from './DrawerNavigator';
import {TabNavigator} from './TabNavigator';
import {HomeTabNavigator} from './HomeTabNavigator';
import {Profile} from '../screens/profile';

const Stack = createStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
         */}
        <Stack.Screen
          name="HomeTabNavigator"
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
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
