const express=require("express") 
const {userModel}=require("../model/user.model")
const userRouter=express.Router() 
const jwt=require("jsonwebtoken") 
const bcrypt=require("bcrypt") 
userRouter.post("/register",async(req,res)=>{ 
  const {email,pass,location,age}=req.body
  try{ 
    bcrypt.hash(pass,5, async(err, hash)=> {
      // Store hash in your password DB. 
      const user = new userModel({email,pass:hash,location,age}) 
      await user.save() 
      res.status(200).send("Registration successfully") 
  });
  } 
  catch(err){
    res.status(400).send({"msg":err.message})
  }
    //res.send("Registration has been done")
})
userRouter.post("/login",async(req,res)=>{ 
   const {email,pass}=req.body 
    try{
        const user=await userModel.find({email:email,pass:pass}) 
        console.log(user) 
        user.length>0?bcrypt.compare(pass,user[0].pass, function(err, result) {
          // result == true                                                   //payload         //secret key
          res.status(200).send({"msg":"Login Successfully","token":jwt.sign({userID:user._id}, 'masai',{expiresIn:'1h'}) })
      }):res.status(400).send({"mag":"LOgin Failed"})  
      } 
      catch(err){
        res.status(400).send({"msg":err.message})
      }                                           
})
 userRouter.get("/",(req,res)=>{
    res.status(200).send("")
 })
userRouter.get("/details",(req,res)=>{
const {token}=req.query 
jwt.verify(token, 'bruce', function(err, decoded) { 
     //exp: Math.floor(Date.now() / 1000) + (60 * 60),
    decoded?res.status(200).send("user details"):res.status(400).send({"msg":"restricted"})
  });
})   
userRouter.get("/product",(req,res)=>{
    const {token}=req.query 
jwt.verify(token, 'bruce', function(err, decoded) { 
    decoded?res.status(200).send("user details"):res.status(400).send({"msg":"restricted"})
  });
    })  

module.exports={userRouter}