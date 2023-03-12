
const express = require("express") 

const morgan = require("morgan") 
const app=express() 
//app.use(morgon("tiny"))
app.use(morgan("common")) 

app.get("/",(req,res)=>{
    res.send("get")
}) 

app.listen(8080,()=>{
console.log("server start")
})