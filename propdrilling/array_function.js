var nums = [1, 3, 5, 7, 9]

let nums_sqr = nums.map(x => x * x)

console.log(nums);
console.log(nums_sqr);

const emps = [
    {name: "Sonia", salary: 30000},
    {name: "Shailesh", salary: 40000},
    {name: "Chaitali", salary: 25000}
]

const emps_salary_structure = emps.map(e => {

    var total_salary = e.salary * 12
    var tax = total_salary * 0.10;

    return {
        name: e.name,
        salary: e.salary,
        tax: tax,
        net_salary: total_salary - tax
    }
})

console.table(emps)
console.table(emps_salary_structure)
