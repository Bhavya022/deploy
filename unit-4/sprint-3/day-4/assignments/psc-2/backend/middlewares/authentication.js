const jwt=require('jsonwebtoken') 
const authenti=(req,res,next)=>{
    const token=req.header('authToken') 
    if(!token){

    } 
    try{
        const decoded=jwt.verify(token,"superman") 
        req.user=decoded 
        next()
    } 
    catch(err){
        res.send(err)
    }
}