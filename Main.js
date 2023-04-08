import React from 'react'
import { StatusBar } from 'expo-status-bar';
import AuthStackNavigator from './screens/auth/AuthStack';
import HomeTabNav from './screens/main/HomeTabNav';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default function Main() {

    const authOK = useSelector(state=>state.user.authOK)
    console.log(authOK);

  return (
    <NavigationContainer >
        {authOK ? <HomeTabNav /> : <AuthStackNavigator />}
        <StatusBar style="auto" />
    </NavigationContainer>
  )
}