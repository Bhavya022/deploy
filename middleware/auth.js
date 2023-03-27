const jwt=require("jsonwebtoken") 

const auth=(req,res,next)=>{
//logic 
const token=req.headers.authorization
if(token){
    const decoded=jwt.verify(token,"masai")
    if(decoded){ 
        console.log(decoded)
        next()
    }  
    else{
    res.status(400).send("please login first")     
    }   
} 
else{
    res.status(400).send("please login first")     
    } 
} 



module.exports={auth}
