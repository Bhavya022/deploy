// create the express app and export it.
const express = require("express") 
const fs = require("fs") 
const app=express()  
const path = require("path") 

app.post("/students/addstudent ",(req,res)=>{
    const data=req.body 
    let db=fs.readFileSync("./db.json","utf-8") 
    let d = JSON.parse(db) 
    d.students.push(data) 
    fs.writeFileSync("./db.json",JSON.stringify(d)) 
    res.status(200).send("Student has been added")
})  
app.post("/instructors/addinstructor ",(req,res)=>{
    const data=req.body 
    let db=fs.readFileSync("./db.json","utf-8") 
    let d = JSON.parse(db) 
    d.instructors.push(data) 
    fs.writeFileSync("./db.json",JSON.stringify(d)) 
    res.status(200).send("Instructors has been added")
}) 
app.get("/students",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8")) 
    res.json(data.students)
}) 
app.get("/instructors",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8")) 
    res.json(data.instructors)
})  
app.get("/students/:studentCode",(req,res)=>{ 
    const id = parseInt(req.params.studentCode)
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8")) 
    let pre=false
    for(let i=0;i<data.length;i++){
    if(data.students[i].studentCode===id){
        pre=true 
        res.json(data.students[i])
    }
    }
})  

app.put("/students/:studentCode",(req,res)=>{
    const id = parseInt(req.params.studentCode) 
    let n =req.body
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8")) 
    let pre=false
    for(let i=0;i<data.length;i++){
    if(data.students[i].studentCode===id){
        pre=true 
        data.students[i]=n 

    }
    } 
    if(pre){ 
        fs.writeFileSync("./db.json",JSON.stringify(data))
        res.send("Patched Student Details")
    }
})

app.put("/students/:studentCode",(req,res)=>{
    const id = parseInt(req.params.studentCode) 
    let n =req.body
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8")) 
    let pre=false
    for(let i=0;i<data.length;i++){
    if(data.students[i].studentCode===id){
        pre=true 
        data.students[i].splice(i,1) 

    }
    } 
    if(pre){ 
        fs.writeFileSync("./db.json",JSON.stringify(data))
        res.send("Patched Student Details")
    }
})

// export the app
 module.exports=app;