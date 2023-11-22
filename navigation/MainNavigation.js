import React from 'react';

import MainScreen from '../screens/MainScreen';
import SecondaryScreen from '../screens/SecondaryScreen';
import ThirdScreen from '../screens/ThirdScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MainScreen'
        component={MainScreen}
      />
      <Stack.Screen
        name='SecondaryScreen'
        component={SecondaryScreen}
      />
      <Stack.Screen
        name='ThirdScreen'
        component={ThirdScreen}
      />
    </Stack.Navigator>
  )
}

function MainNavigation () {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  )
}

export default MainNavigation;