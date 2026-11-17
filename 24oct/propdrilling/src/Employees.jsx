import React from 'react'

 export const Employees = () => {

    const emps=[{name:"fayzan", Salary:"30000"},
        {name:"nagesh", Salary:"37000"},
        {name:"chaitali", Salary:"36000"},
        {name:"shreya", Salary:"35000"},
    ]
  return (
    <div>
        <table>
                <tr>
                    <th>name</th>
                    <th>Salary</th>

                </tr>
                <tbody>
                    {emps.map(x =>{return(
                        <tr key={x.name}>
                            <td>{x.name}</td>
                            <td>{x.Salary}</td>
                        </tr>
                    )})}
                </tbody>
        </table>
      
    </div>
  )
}


