const express=require("express") 
const mongoose = require("mongoose") 
const cors=require("cors")
const app = express() 
//middleware express.json help to parse data to json.
app.use(express.json())  
app.use(cors()) //cors middleware
const authRoute=require("./routes/authRouter")
const connection=async()=>{
    try{
 await mongoose.console("mongodb+srv://bhavya:bhavya@cluster0.kin5ecd.mongodb.net/pscdata?retryWrites=true&w=majority") 
 
    }catch(err){
        console.log(err)
    }
} 
app.use("/auth",authRoute)
app.listen(8900,()=>{
    connection() 
    console.log("server started 8900")
})