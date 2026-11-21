const express = require("express")
 const app = express()

 app.use(express.json())

const employees = [
  {
    "id": 101,
    "name": "Aarav Sharma",
    "department": "Engineering",
    "salary": 65000
  },
  {
    "id": 102,
    "name": "Priya Patel",
    "department": "Engineering",
    "salary": 72000
  },
  {
    "id": 103,
    "name": "Rohan Mehta",
    "department": "Marketing",
    "salary": 48000
  },
  {
    "id": 104,
    "name": "Sneha Iyer",
    "department": "HR",
    "salary": 52000
  },
  {
    "id": 105,
    "name": "Vikram Singh",
    "department": "Engineering",
    "salary": 85000
  },
  {
    "id": 106,
    "name": "Ananya Desai",
    "department": "Marketing",
    "salary": 51000
  },
  {
    "id": 107,
    "name": "Karan Verma",
    "department": "Finance",
    "salary": 60000
  },
  {
    "id": 108,
    "name": "Neha Kulkarni",
    "department": "HR",
    "salary": 47000
  },
  {
    "id": 109,
    "name": "Imran Khan",
    "department": "Finance",
    "salary": 68000
  },
  {
    "id": 110,
    "name": "Divya Nair",
    "department": "Engineering",
    "salary": 78000
  }
]
 

 app.get("/",(req,res) => {
    res.send(employees)
})
app.get("/:id", (req, res) => { 
    const id = Number(req.params.id)
    const employee = employees.find((emp) => emp.id === id)

    if (!employee) {
        return res.send({ message: "employee not found" })
    }
    res.send(employee)
})

app.post("/",(req,res)=>{
    const{name,department,salary}=req.body
    const newEmployee = {
        id:employees.length ? employees[employees.length - 1].id +1 : 101 ,
    name,
department,
salary:Number(salary),
}
employees.push(newEmployee)
res.send(newEmployee)
})

app.listen(4000,() => {
    console.log("server started on port 4000");
    
})
