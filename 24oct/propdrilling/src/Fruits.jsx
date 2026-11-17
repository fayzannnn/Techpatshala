import React from 'react'

 export const Fruits = () => {

    const fruits = ["apple", "mango","banana","orange"]
  return (
    <div>
        Fruits
      <ul>
        {fruits.map(x=> <li key={x}><h2>{x}</h2></li>)}
      </ul>
    </div>
  )
}

export default Fruits
