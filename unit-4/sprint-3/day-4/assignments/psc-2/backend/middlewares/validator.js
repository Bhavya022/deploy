const validator=(req,res,next)=>{
    if(req.user.role!=="Admin"){
  return res.send("Authorization failed")
    } 
    next()
}  
