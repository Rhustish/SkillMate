import React from 'react'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [uid, setUid] = React.useState(null)
  const [authOK, setAuthOK] = React.useState(true);

  const updateuid = newValue => {
    setUid(newValue)
  }
  const updateAuthStatus = newValue =>{
    setAuthOK(newValue)
  }

  return (
    <UserContext.Provider value={{authOK, updateAuthStatus, uid, updateuid}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
