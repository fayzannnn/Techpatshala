import React from 'react'

export const Fruits = () => {

    const fruits = ["apple", "banana", "chiku"]

  return (
    <div>
        Fruits

        <ul>
            <li>{fruits[0]}</li>
            <li>{fruits[1]}</li>
            <li>{fruits[2]}</li>
        </ul>

        <ul>
            {fruits.map(x => <li key={x}><h2>{x}</h2></li>)}
            {/* [<li>apple</li>, <li>banana</li>, <li>chiku</li>] */}
        </ul>

        <ul>
            {[<li>apple</li>, <li>banana</li>, <li>chiku</li>, <li>orange</li>]}
        </ul>

    </div>
  )
}
