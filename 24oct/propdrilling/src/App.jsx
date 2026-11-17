import { createContext, useContext, useState } from "react";
import A from "./A";
import { Employees } from "./Employees";
import Fruits from "./Fruits";




 export const MyContext = createContext()
 export const UserContext = createContext()
function App() {

  const [name ,setName]= useState("fayzan");
  const[user,setUser]=useState({user:"fayzan", email:"fayzan@gmail.com"})
  

  return (
  
  
    <MyContext.Provider value={name}>
      <UserContext.Provider value={user}>
    <A/>
    <Employees/>
    <Fruits/>
    </UserContext.Provider>
    </MyContext.Provider>
  )
}

export default App
