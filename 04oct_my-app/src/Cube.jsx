import React from 'react'
import { useState } from 'react'

 export const Cube = () => {
    
    const[num , setNum]= useState(1)
    const [result , setResult] = useState(1)

  return (
    <div>
    <input type='text' value={num} onChange={(e)=>setNum(e.target.value)} />    
      <button onClick={()=>setResult(num*num*num)}>Cube</button>
      <h1>Cube of {num} is {result}</h1>
    </div>
  )
}


