import React, { useContext } from 'react'
import C from './C'
import { MyContext } from './App'



 function B(){

    const name = useContext(MyContext)
  return (
    <div>
       B component : hello from A
       
     <div>  my name is {name} </div>
      <C/>
    </div>
  )
}
export default B


