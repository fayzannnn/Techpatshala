nums = [1,2,4,5,6,7,8]
even_arr = nums.filter(x => x % 2 == 0);
console.log(even_arr);


sum_arr = nums.reduce((total , x)=> total + x)
console.log("sum of all: " + sum_arr);
