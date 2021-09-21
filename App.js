import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

import Note from './src/pages/Note/'
import NewNote from './src/pages/NewNote/';
import Details from './src/pages/Details/';
import Login from './src/pages/Login/'
import NewUser from './src/pages/NewUser/'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouterName="Login">
      <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="NewUser"
          component={NewUser}
          options={{
            headerShown: false,
          }}
        />


        <Stack.Screen
          name="Note"
          component={Note}
          options={{
            headerTintColor: "#3171F7",
            headerLeft: null
          }}
        />

        <Stack.Screen
          name="New Note"
          component={NewNote}
          options={{
            headerTintColor: "#3171F7"
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#3171F7"
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
