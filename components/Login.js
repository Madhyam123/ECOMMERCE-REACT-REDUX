import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
    const {user, loginWithRedirect ,isAuthenticated, logout} = useAuth0();
  return (
    <div>
        <header >
                {isAuthenticated && (
                    <div style={{display:"flex",justifyContent:"left",alignItems:"center",}}>
                        <img style={{borderRadius:"50px"}} src={user.picture} alt={user.name} />
                        <h3 style={{paddingLeft:"12px"}}>Hello {user.name}</h3>
                        <p style={{paddingLeft:"12px"}}>{user.email}</p>
                    </div>
                    )}
                {isAuthenticated ? (
                    <button onClick={(e)=>logout()}>Logout</button>
                    ) : (
                    <button onClick={(e)=>loginWithRedirect()}>
                        Login 
                    </button>
                )}
        </header>
    </div>
  )
}

export default Login