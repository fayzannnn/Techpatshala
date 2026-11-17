import { createContext, useState } from "react"
import { A } from "./A"
import { Fruits } from "./Fruits"
import { Employees } from "./Employees";

export const MyContext = createContext()
export const UserContext = createContext();

function App() {

  //export this value using context api provider
  const [name, setName] = useState("shailesh")
  const [user, setUser] = useState({name:"Chaitali", email:"chaitali@gmail.com"})

  return (
    <>
    <Employees/>
      {/* <Fruits /> */}
    </>
    // <MyContext.Provider value={name}>
    //   <UserContext.Provider value={user}>
    // hello from react
    // <A />
    // </UserContext.Provider>
    // </MyContext.Provider>
  )
}

export default App
