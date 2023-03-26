const express=require("express") 
//const {userModel}=require("../model/user.model")
const app=express() 
const {connection}=require("./db")
app.use(express.json())  
const {userRouter}=require("./routes/user.routes")
const {notesRouter}=require("./routes/notes.routes")
const {auth}=require("./middleware/auth") 
require("dotenv").config()  
app.use(auth)
app.use("/user",userRouter) 
app.use("/notes",notesRouter) 
app.post("/register",async(req,res)=>{ 
    // logic 
})

app.post("/login",async(req,res)=>{ 
    
})



app.listen(process.env.port,async()=>{ 
    try{
 await connection 
 console.log("connected to db")
    } 
    catch(err){
        console.log(err)
    }
    console.log("server is running @ 4100")
})