import React, { useContext } from 'react'
import { UserContext } from './App'

function C() {

    const User = useContext(UserContext)
  return (
    <div>
      C component  : hello from B

      emailId:{User.email}

    </div>
  )
}

export default C
