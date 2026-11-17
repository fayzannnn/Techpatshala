import React, { useEffect, useState } from 'react'

const GithubUser = () => {


    const [user, setUser] = useState({})
    const [login, setLogin] = useState(1)

    const [cnt, setCount] = useState(0)

    // setInterval(() => {
    //     var local_counter = cnt;
    //     local_counter++;
    //     setCount(local_counter)
    // }, 5000)

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })
    }, [login, cnt])

  return (
    
    <div>
        <button onClick={() => setLogin(1)}>User 1</button>
        <button onClick={() => setLogin(3)}>User 3</button>
        <button onClick={() => setLogin(4)}>User 4</button>
      <table border={1}>
        <tr>
            <td>id</td>
            <td>{user?.id}</td>
        </tr>
        <tr>
            <td>login</td>
            <td>{user?.login}</td>
        </tr>
        <tr>
            <td>Avatar</td>
            <td><img src={user?.avatar_url} width={"100px"}/></td>
        </tr>
      </table>
    </div>
  )
}

export default GithubUser
