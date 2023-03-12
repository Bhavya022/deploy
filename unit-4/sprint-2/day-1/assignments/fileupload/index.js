
const express = require("express") 
const app =express() 
const nodemon = require("nodemon") 
const multer = require("multer")   

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
       //const uniqueSuffix = Date.now()+'-'+Math.round() 
     cb(null,file.originalname)
    }
})  

const upload = multer({storage:storage})
app.post("/",upload.single('avatar'),(req,res)=>{
    res.send("uploaded") 
    console.log(req.file) 
})  
function doit(x,y){
    return x?x+y:y
}
app.listen(8000,()=>{
    console.log("hello")
}) 

