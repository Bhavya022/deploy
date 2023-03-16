// import required modules
const express = require("express") 
const multer = require("multer") 
const app=express() 

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
app.post("/upload",upload.single('avatar'),(req,res)=>{
    res.status(200).send({
        message: "file uploaded successfully"
     }) 
    console.log(req.file)  //
})  
app.get("/",(req,res)=>{
    res.status(200).send({
        message: "welcome to server"
     })
})
function doit(x,y){
    return x?x+y:y
}
app.listen(8000,()=>{
    console.log("hello")
}) 


// export the server
module.exports = app;
