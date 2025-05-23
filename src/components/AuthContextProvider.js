import React,{ useState} from 'react'
import AuthContext from "./AuthContext";

function AuthContextProvider({children}) {
    let [auth,setAuth]=useState(false)
  return (
    <AuthContext.Provider value={[auth,setAuth]}>
        {children}
        </AuthContext.Provider>
  )
}

export default AuthContextProvider