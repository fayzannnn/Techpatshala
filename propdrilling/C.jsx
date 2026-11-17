import React, { useContext } from 'react'

import {UserContext} from './App'

export const C = () => {

    const user = useContext(UserContext)

  return (
    <div>
    
        C
        EmailID: {user.email}
    </div>
  )
}
