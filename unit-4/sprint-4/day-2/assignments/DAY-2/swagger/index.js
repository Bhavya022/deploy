const express=require("express") 
const { default: mongoose } = require("mongoose")
const app=express.Router() 

app.listen(8080,async()=>{
    try{
await mongoose.connect(" mongodb://127.0.0.1:27017/learn_swagger") 
console.log("connected to db")
    }
    catch(err){
console.log(err) 
    }
    console.log("server running")
})