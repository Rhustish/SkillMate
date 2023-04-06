import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthInit from './AuthInit';
import 'react-native-gesture-handler';
import React from 'react'

const Stack = createStackNavigator()

function AuthStackNavigator(){
    return(
        <Stack.Screen name="Init" component={AuthInit} />

    )
}

export default function AuthStack() {
  return (
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
  )
}