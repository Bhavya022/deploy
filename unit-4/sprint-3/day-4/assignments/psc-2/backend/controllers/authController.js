const User=require("../models/userModel") 
//give big random no
const bcrypt=require("bcrypt")
//yes@123-->jhgyghhjncjknjknbhdbhj
const register=async(req,res)=>{
 //destructuring
 
 const {username,email,dob,role,location,password}=req.body
   
    try{
 const userPresent=await User.findOne({email}) 
 if(userPresent){
    res.send({message:"User is Already"})
 } 
 const hashPassword=await bcrypt.hash(password,12) 
 
 const newUser=new User({
    username,email,dob,role,location,password:hashPassword
 })  
 const saveUser=await newUser.save() //newUser.create() 
 res.send("done",saveUser)
    }
    catch(err){
        res.status(500).end(err)
    }
} 
const login=async(req,res)=>{
    const {username,password} = req.body 
    try{
        const userPresent= await User.findOne({email}) 
        if(!userPresent){
            res.send({message:"User did not registered yet"})
        } 
        const validpass=await bcrypt.compare(password.userPresent.password) 
        if(!validpass){
            res.send("password Invalid")
        } 
        else{
        const token =jwt.sign({userId:userPresent._id,email},"superman",{expiresIn:""}) 
      res.send(token,userPresent.email)
        }
    } catch(err){
        console.log(err)
    }
} 
function logout(req,res){
    res.clearCookie('token') 
    
}
module.exports={
    register
}