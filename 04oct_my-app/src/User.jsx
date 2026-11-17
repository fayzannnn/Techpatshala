import React, { useEffect, useState } from 'react'

 export const User = () => {

    const [users,setUsers] = useState()
       
     useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then(data => setUsers(data.map(user =>({id:user.id , name: user.name}))))
     },[])

  return (
    <>
    <div>Users</div>
    <div>{JSON.stringify(users)}</div>
    </>
  )
}


