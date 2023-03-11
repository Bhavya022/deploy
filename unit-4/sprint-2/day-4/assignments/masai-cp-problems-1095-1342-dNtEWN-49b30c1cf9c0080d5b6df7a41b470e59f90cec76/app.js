// your code goes here 
const express = require("express")  

const app = express() 

app.get("/multiply",(req,res)=>{
    let {a,b} = req.query;
    console.log(a,b)
    
   if(a==undefined && b==undefined){
    res.status(400).json({error:'Both "a" and "b" are required parameters'})
  }  
  if(isNaN(a) && typeof +b=="number"){
    res.status(400).json({error:'"a" is not a valid number'})
}  
if(isNaN(b) && typeof +a=="number"){
    res.status(400).json({error:'"b" is not a valid number'})
} 
   if(typeof +a=="number" && typeof +b=="number"){
         res.json({product:+a*+b})
     } 
    
})

module.exports=app