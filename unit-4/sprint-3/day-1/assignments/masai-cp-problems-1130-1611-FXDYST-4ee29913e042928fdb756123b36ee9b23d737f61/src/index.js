// import required modules
// const express = require("express") 
// const morgan = require("morgan")  
// const fs=require("fs")
// const app=express() 
// app.use(morgan("common")) 
// app.use(morgan("tiny")) 
 //app.get("/",(req,res)=>{ 
  //  const access_log = fs.readFileSync("src/access.log", "utf-8");
//     console.log(access_log)
//     res.status(200).send({message: "welcome to server" })
// }) 
// app.get("/get-users",(req,res)=>{ 
//     const access_log = fs.readFileSync("src/access.log", "utf-8");
//     console.log(access_log)
//     res.status(200).send({
//         message: "here is the list of all users"
//         })
// }) 
var express = require('express')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')

var app = express()

//log only 4xx and 5xx responses to console
// app.use(morgan('dev', {
//   skip: function (req, res) { return res.statusCode < 400 }
// }))

// log all requests to access.log
 var accessstream= fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })


app.use(morgan(
  ":method :status :res[content-length] :response-time ms :date[web] :http-version :url\n",
  {
    stream:accessstream
  }
))
// create a rotating write stream 
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// // setup the logger
// app.use(morgan('combined', { stream: accessLogStream }))
 app.get("/",(req,res)=>{ 
   const access_log = fs.readFileSync("src/access.log", "utf-8");
    console.log(access_log)
    res.status(200).send({message: "welcome to server" })
}) 

app.get('/get-users',(req,res)=>{
    res.status(200).send({
        message: "here is the list of all users"
        })
}) 
app.post('/add-user',(req,res)=>{
  res.status(201).send({
    "message": "user added successfully"
    })
}) 
app.put("/user/:id",(req,res)=>{
  res.status(201).send({
    message: `user ${req.params.id} updated successfylly`
    })
})  //done
app.delete("/user/:id",(req,res)=>{
  res.status(200).send({
    message: `user ${req.params.id} deleted successfylly`
    })
})
app.listen(8880,()=>{
console.log("server start")
})
// export the server
module.exports = app;
