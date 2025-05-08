import React, { useContext } from 'react'
import AuthContext from './AuthContext'

function Authorization() {
    let [auth,setAuth]=useContext(AuthContext)
    function handleAuth(e){
        setAuth(e.target.checked)
    }
  return (
    <div>
        <h1>Click on the checkbox to get authenticated</h1>
        {
            auth ? (<p>You are now authenticated,you can proceed</p>)
            :(
                <p>You are not authenticated</p>
            )
        }
        <input type="checkbox" onChange={handleAuth}   />
        <label>I am not a robot</label>
    </div>
  )
}

export default Authorization