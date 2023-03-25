const express=require("express") 
const {connection}=require("./db")
const app=express()  
const {auth}=require("./middlewares/auth")
app.use(express.json())   
const {userRouter}=require("./routes/user.route")
app.use("/user",userRouter) 
app.use(auth) 
//registration
app.post("/register",(req,res)=>{
    res.send("Registration has been done")
})
//login 
app.post("/login",(req,res)=>{
  res.send("Login Done!")
})




app.listen(4300,async()=>{
    try{

    await connection
    console.log("server is running @ 4300")
    }catch(err){ 
        console.log("cannot connect to db")
        console.log(err)
    }
})
