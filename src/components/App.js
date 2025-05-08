
import React, { useState } from "react";
import './../styles/App.css';
import AuthContext from "./AuthContext";
import Authorization from "./Authorization";


const App = () => {
  let [auth,setAuth]=useState(false)
  return (
    <div>
        <AuthContext.Provider value={[auth,setAuth]} >
          <Authorization/>
        </AuthContext.Provider>
    </div>
  )
}

export default App
