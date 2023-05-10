import React from 'react'
import { UserProvider } from './context/userContext';
import Main from './Main';

export default function App() {

  return (
    <UserProvider>
      <Main />
    </UserProvider>
  )
}