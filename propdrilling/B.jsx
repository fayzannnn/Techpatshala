import React, { useContext } from 'react'
//import MyContext
import { MyContext } from './App'
import { C } from './C'


export const B = () => {

    const name = useContext(MyContext)

  return (
    <div>
        <div>hello from b</div>
        Value of name is {name}
        <C />
    </div>
  )
}
