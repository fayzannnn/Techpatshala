dress = new Promise ((res , rej) => {
    console.log("dress preparation started.....");
    setTimeout(()=>{
    res( "dress is ready come an pick it up " );
    },8000)
})


dress.then(res => {
    console.log(res);
    
})

wine = new Promise((res ,rej)=>{
    console.log("wine is preparing......");
    setTimeout(()=>{
        res("red wine is prepared")
    },3000)
 })   
wine.then(res=>{
    console.log(res);
    
})


cake = new Promise((res, rej)=>{
    console.log("cake is preparing...");
    setTimeout(()=>{
        res("cake is preapred ....")
    },4000)
    
})

cake.then(res=>{
    console.log(res);
    
})


fetch("https://api.github.com/users")
.then(res=>res.json())
.then(userlist =>{console.table(userlist);
})


async function getUsers() {
    res = await fetch("https://api.github.com/users")
    data = await res.json()
    console.table(data[0])
}

getUsers();