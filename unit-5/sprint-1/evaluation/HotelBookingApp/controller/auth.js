const {usermodel} = require("../model/User") 
const bcrypt = require("bcrypt")  

const  jwt = require("jsonwebtoken")  


 const register = async(req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10) 
        const hash = bcrypt.hashSync(req.body.password,salt) 

        const newUser = new usermodel({
            ...req.body,
            password:hash,
        }) 
        res.status(200).send("User registered")
    }catch(err){
        console.log(err) 
    }
}  

const login = async(req,res,next)=>{ 
    try{
    const user = await usermodel.findOne({username:req.body.username}) 
    if(!user){
        res.status(400).send("not found") 
    } 
    const ispassword = await bcrypt.compare(req.body.password,user.password) 
    if(!ispassword){
        res.status(400).send("password not found")
    } 
    const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.jwt) 
    const {password,isAdmin,...otherdetails}=user._doc 
    res.cookie("access_token",token,{httpOnly:true,}).status(200).json({details:{...otherdetails},isAdmin,access_token:token})
    } catch(err){
        console.log(err) 
    }

}
module.exports={register,login}