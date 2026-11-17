// const arr = [1,2,3,4,35,6,7,8]

// // console.log(arr[5]);

// // console.log(arr.length);


// // console.log(arr.length - 1);



// nums =[1,2,3,4,5,6,7,8,9 ]
// // console.log(nums.length);

// // console.log(arr[0]);

// for (i=0;i<nums.length;i++){
//     // console.log(nums[i]);
    
// }






// // const myarr = [1,2,3,4,5,6]

// // const sum = myarr.reduce((total,number) => total + number,0)

// // console.log(sum);


// const myObj = {
//     name:"fayzan",
//     age: 22,
//     address:{
//         city:"mumbai",
//         state: "maharashtra"
//     }
// }
// // console.log(myObj.address.city);
// // console.log(myObj.address.state);


// const rec = [{name:"ram", salary : 23000    },
//     { name:"shyamm", salary : 34000},
//     { name:"ravi", salary:50000}]

//     // console.log(rec[2]);
//     // console.log(rec[2].salary);
    

//     const recc ={name:"fayzan",hobbies:["gaming","traveling","fitness"]}

//     // console.log(recc.hobbies[2]);
    


const emps = [{
    name:"fayzan",
    salary:25000
    },
    {
        name:"nagesh",
        salary:27000
    },
    {
        name:"ram", 
        salary:26000
    },
    {
        name:"shyamm",
        salary:30000
    },
    {
        name:"ghyann",
        salary:22000
    }
]

 Sum = 0;

for(i=0;i<emps.length;i++){
    console.log(`${emps[i].name}`)
      Sum = Sum + emps[i].name;
}

// console.log(`total salary ${Sum}`);

// avgSal = Sum/emps.length;
// console.log(`average salary ${avgSal}`);
    