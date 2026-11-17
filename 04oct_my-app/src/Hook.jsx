import React, {useState,useEffect,useCallback, memo} from "react";


const RefreshButtton = memo(({onRefresh})=>{
    console.log('RefreshButton rendered');
    return <button onClick={onRefresh}>Refresh</button>
    
})
export const Hook = () => {
  
    const[users,setUsers] = useState([])
    const[search,setSearch]= useState('')


    const fetchUsers = useCallback(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
              .then(data => setUsers(data.map(user =>({id:user.id , name: user.name}))))
     },[])
    
    useEffect(() => {
    fetchUsers()
  }, [fetchUsers])
     return(
     <>
      <input value={search} onChange={e => setSearch(e.target.value)}
      placeholder="type here"/>
       
       <RefreshButtton onRefresh={fetchUsers}/>
        <ul>
            {users
  .filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
  .map(user => (
    <li key={user.id}>{user.id}. {user.name}</li>
  ))}
        </ul>
     </>
     )
}