const express = require("express") 
const mongoose = require("mongoose") 
var cors= require("cors")  

const {router}=require('./Router/todo.router') 
const {connection}=require('./db') 

const app=express() 
app.use(cors())  
app.use(express.json())  

app.use("/todo",router)  

app.listen(8750,()=>{ 
    connection() 
    console.log("server started")
})