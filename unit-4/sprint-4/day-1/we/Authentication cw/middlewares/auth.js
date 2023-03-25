const jwt=require("jsonwebtoken") 
require("dotenv").config() 
const auth =(req,res,next)=>{
    const token= req.headers.authorization.split(" ")[1];
    jwt.verify(token,process.env.KEY,(err,decoded)=>{
        if(err) 
        res.status(200).send({error:err.message}) 
        else{
            req.body.userID=decoded.userID 
            next() 
        }
    })
}

module.exports={auth} 