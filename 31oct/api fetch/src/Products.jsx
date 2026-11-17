import React, { useEffect, useState } from 'react'

const Products = () => {

    const [products,setProducts]= useState([])

useEffect (()=>{
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProducts(data))
,[]}
)

  return (
   <table>
    <thead>
        <tr>
            <th>id</th>
             <th>title</th>
              <th>category</th>
               <th>price</th>
               <th>action</th>
        </tr>
    </thead>
    <tbody>
        {products.map((p)=>(
            <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.category}</td>
                <td>{p.price}</td>
                <td><button>view</button></td>
            </tr>
        ))}
    </tbody>
   </table>
  )
}

export default Products
