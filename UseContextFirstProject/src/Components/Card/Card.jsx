import React from 'react'
import UserContext from '../../Context/UserContext'
import { useContext } from 'react'

function Card() {
    const {user} = useContext(UserContext)
    if (!user) return <div>please Login</div>
    return <div>Welcome {user.username} <br /> Password {user.password}</div>
}

export default Card
