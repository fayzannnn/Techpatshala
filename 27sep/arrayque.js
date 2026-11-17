const employees = [
{ id: 1, name: "Amit Sharma", department: "HR", salary: 35000 },
{ id: 2, name: "Priya Verma", department: "IT", salary: 50000 },
{ id: 3, name: "Ravi Kumar", department: "Finance", salary: 60000 },
{ id: 4, name: "Neha Singh", department: "IT", salary: 55000 },
{ id: 5, name: "Vikram Patel", department: "HR", salary: 40000 },
{ id: 6, name: "Anjali Mehta", department: "Marketing", salary: 45000 },
{ id: 7, name: "Suresh Reddy", department: "Finance", salary: 70000 },
{ id: 8, name: "Kiran Nair", department: "IT", salary: 48000 },
{ id: 9, name: "Pooja Joshi", department: "Marketing", salary: 42000 },
{ id: 10, name: "Arjun Desai", department: "Finance", salary: 65000 }
];

// const itEmployees = employees.filter((employee) => employee.department === "IT");
// console.log("IT department employees:", itEmployees);

// const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
// console.log("Total salary of employees:", totalSalary);



// const employeeName = employees.forEach((items)=>{
//     console.log(items.name);})

//  const highestSalaryEmployee = employees.reduce((max, employee) => {
//    return employee.salary > max.salary ? employee : max;
//  }, employees[0]);

// console.log("Employee with highest salary:", highestSalaryEmployee.name);
//  console.log("Highest salary:", highestSalaryEmployee.salary);



//  const highestSalary = employees.reduce((max, employee) => {
//      return employee.salary > max.salary ? employee : max;
//  }, employees[0]);

//     console.log(highestSalary.name);
//      console.log(highestSalary.salary);
    
    
//      const greterSalary = employees.filter((items)=>{
//         return items.salary > 50000
//      })
//      console.log(greterSalary);
     



//      const updatedHREmployees = employees.map((employee) => {
//   if (employee.department === "HR") {
//     return {
//       ...employee,
//       salary: employee.salary * 1.10
//     };
//   }
//   return employee;
// });

// console.log("Updated HR employees:");
// updatedHREmployees.forEach((employee) => {
//   if (employee.department === "HR") {
//     console.log(employee.name, employee.salary);
//   }
// });




 const sortedBySalaryAsc = [...employees].sort((a, b) => a.salary - b.salary);

// console.log("Employees sorted by salary in ascending order:");
// sortedBySalaryAsc.forEach((employee) => {
//   console.log(`${employee.name}: ${employee.salary}`);
// });




const itEmployees = employees.filter((employee) => employee.department === "Finance");
 console.log("IT department employees:", itEmployees);

 const avgSalary = itEmployees.reduce((sum , employee)=> sum + employee.salary,0);
 console.log(avgSalary/itEmployees.length);
 