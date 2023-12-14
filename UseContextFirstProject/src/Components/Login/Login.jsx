import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../../Context/UserContext'

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const formsubmitmethod = (e)=>{
        e.preventDefault();
        console.log(username + " " + password)
        setUser({username,password})
    }

    return (
        <>
            <h1>Login</h1>
            <input type="text"  
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder='Username' />
            <br />
            <input type="text" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password' />
            <br />
            <button onClick={formsubmitmethod}>Submit</button>
        </>
    )
}

export default Login
