// const greeting = [1,2,3,4,5,6,7,8,9]

// for(const greet of greeting){
// console.log(`each char:${greet}`)};

arr4 = [1,2,3,4,5]
function sum(...numbers) {
    let total = 0
    for(i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    return total;
}
console.log("Sum:", sum(...arr4));