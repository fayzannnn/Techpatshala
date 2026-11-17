import React, { useContext, useState } from 'react'
import { BudgetContext } from './App'

function Setbudget() {

   const {budget,setBudget} = useContext(BudgetContext)

   const [amount,setAmount] = useState("")

   const handleSubmit = (e)=>{
    e.preventDefault()
   

   if(amount ===""||Number(amount)<=0){
    alert("please enter a valid amount")
    return;
   }

    setBudget(Number(amount));
    setAmount("");
   }

  return (
    <div>
        <h2> add budget </h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='budget'>Budget amount </label>
            <input type='number' id='buget' placeholder='enter your budget' value={amount}
            onChange={(e)=>setAmount(e.target.value)}/>

            <button type='submit'>add budget</button>
        </form>
        <h3>Your Budget:{budget}</h3>
      
    </div>
  )
}

export default Setbudget
