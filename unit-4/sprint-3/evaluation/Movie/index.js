const express = require("express") 
const {connection}=require("./configs/db") 
require("dotenv").config() 
const app=express() 

app.listen(process.env.port,()=>{ 
    connection()
    console.log("server start")
})