import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthInit from './screens/auth/AuthInit';
export default function App() {
  return (
    <>
      <AuthInit />
      <StatusBar style="auto" />
    </>
  );
}
