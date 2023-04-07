import { StatusBar } from 'expo-status-bar';
import AuthStackNavigator from './screens/auth/AuthStack';
import HomeTabNav from './screens/main/HomeTabNav';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {

  const [authOK , setAuthOK] = useState(true)

  return (
    <NavigationContainer >
      {authOK ? <HomeTabNav /> : <AuthStackNavigator/>}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
