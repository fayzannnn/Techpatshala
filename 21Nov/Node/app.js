
const express = require("express")
const app = express()

app.use(express.json())

app.get("/",(req,res) => {
    res.send("hello world ")
})

app.get("/test",(kuchbhi, kuchbhi2)=>{
    kuchbhi2.send("hello form test function")
})

app.get("/calc",(req,res) => {
     var x = req.body.num1;
     var y = req.body.num2

    res.send(x + y)
})
app.post("/calc",(req,res) => {
     var x = req.body.num1;
     var y = req.body.num2

    res.send(x-y)
})
app.put("/calc",(req,res) => {
     var x = req.body.num1;
     var y = req.body.num2

    res.send(x*y)
})
app.delete("/calc",(req,res) => {
     var x = req.body.num1;
     var y = req.body.num2

    res.send(x/y)
})

app.listen (3000,()=>{
    console.log("server started on port 3000");
    
})