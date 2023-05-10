import React,{useContext} from 'react'
import { StatusBar } from 'expo-status-bar';
import AuthStackNavigator from './screens/auth/AuthStack';
import HomeTabNav from './screens/main/HomeTabNav';
import { NavigationContainer } from '@react-navigation/native';
import UserContext from './context/userContext';


export default function Main() {

  const {authOK} = useContext(UserContext)

  return (

    <NavigationContainer >
        {authOK ? <HomeTabNav /> : <AuthStackNavigator />}
        <StatusBar style="auto" />
    </NavigationContainer>

  )
}