// import Footer from "./Footer"
// import Sqr from "./Sqr"
// import Add from "./Add"
// import { Cube } from "./cube"
// import { User } from "./User"
// import { Fayzan } from "./Fayzan"
// import { Hook } from "./Hook"
// import GithubUser from "./GithubUser"

import { ComponentA } from "./ComponentA"
import { ComponentB } from "./ComponentB"
import { ComponentC } from "./ComponentC"


function App() {
const classname = "techpatshala" 

  return (
    <>
    {/* <GithubUser /> */}
    {/* <Hook/>
    <Fayzan/>
   <Cube/>
   <User/>
   <Footer/>
   <Sqr num={5}/>
   <Sqr num ={6}/>
   <Sqr num={7}/>
   <Add  num1={2} num2={4}/>
     hello world  */}
      <ComponentA props = {classname}/>
     {/* <ComponentB/> 
     <ComponentC/> */}
    
    </>
  )
}

export default App
