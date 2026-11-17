import React from 'react'

export const Employees = () => {

    const emps = [{name:"Chaitali", salary: 25000},
        {name: "Shailesh", salary: 45000},
        {name: "Sonia", salary: 35000},
        {name: "Sakshi", salary: 40000}
    ]

  return (
    <div>
        <table>
            <tr>
                <th>name</th>
                <th>salary</th>
            </tr>    
            <tbody>
                {emps.map(x => {
                    return (
                    <tr key={x.name}>
                        <td>{x.name}</td>
                        <td>{x.salary}</td>
                    </tr>
                    )}
                )}
            </tbody>
        </table>        
    </div>
  )
}
