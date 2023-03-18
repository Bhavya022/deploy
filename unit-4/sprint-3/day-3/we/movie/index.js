const express = require("express") 
const mongoose = require("mongoose") 
var cors= require("cors")  

const {movieRouter}=require('./movie.route') 
const {connecttodb}=require('./db') 

const app=express() 
app.use(cors())  
app.use(express.json())  

app.use("/movies",movieRouter)  

app.listen(8700,()=>{
    console.log("server started")
})