
const express = require("express")  
const app = express()  
app.use(express.json())
const middleware=(req,res,next)=>{ 
    const {id,name,rating,cast}=req.body
    if(!id||!name||!rating||!cast){
     return res.status(400).send({error:"value not defined"})   
    } 
    if(typeof id!="number" || !Array.isArray(cast) || cast.every((elem)=>typeof elem===String)){
        return res.status(400).send({error:"hsd"}) 
        next() 
    } 
    console.log(req.body)  
    next()
} 

app.post("/",middleware,(req,res)=>{ 
    console.log(req.body) 
    console.log(typeof req.body)
    res.send("start")
}) 

app.listen(7000,()=>{
    console.log("server listen")
})