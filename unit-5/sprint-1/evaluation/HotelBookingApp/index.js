const express = require("express") 
const mongoose = require("mongoose") 
const cookieParser = require("cookie-parser") 
const cors = require("cors") 
const dotenv = require("dotenv") 
const app=express()  
dotenv.config()  
const {router}= require("./routes/auth") 
//database connection 
const db = async()=>{
    try{
    await mongoose.connect(process.env.mongo_url) 
    console.log("Connected to DB")
    } 
    catch(err){
     console.log(err)
    }
}
//middlewares 
app.use(cors()) 
app.use(cookieParser()) 
app.use(express.json())  
app.use("/booking",router)

app.listen(5000,()=>{ 
    db() 
    console.log("server start on port 5000")
})
