import { createStackNavigator } from '@react-navigation/stack';
import AuthInit from './AuthInit';
import 'react-native-gesture-handler';
import React from 'react'
import PhoneAuth from './PhoneAuth';

const Stack = createStackNavigator()

export default function AuthStackNavigator(){
    return(
      <Stack.Navigator
      screenOptions={{
        headerShown:false}}
      >
        <Stack.Screen name="Init" component={AuthInit} />
        <Stack.Screen name="Login" component={PhoneAuth}/>
      </Stack.Navigator>
    )
}

