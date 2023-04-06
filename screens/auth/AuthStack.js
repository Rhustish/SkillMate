import { createStackNavigator } from '@react-navigation/stack';
import AuthInit from './AuthInit';
import 'react-native-gesture-handler';
import React from 'react'

const Stack = createStackNavigator()

export default function AuthStackNavigator(){
    return(
      <Stack.Navigator
      screenOptions={{
        headerShown:false}}
      >
        <Stack.Screen name="Init" component={AuthInit} />
      </Stack.Navigator>
    )
}

