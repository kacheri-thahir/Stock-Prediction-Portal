import React, { createContext, useState } from 'react'

const AuthContext = createContext() 

const AuthProvider = ({children}) => {

    const [isLoggedin,setisLoggedin] = useState(
        !!localStorage.getItem('accessToken')
    )

  return (
    <AuthContext.Provider value={{isLoggedin,setisLoggedin}} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext};