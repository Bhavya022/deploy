
const {todoModel}=require('../model/todo.model')
const express = require("express") 
const router = express.Router()


router.get("/",async(req,res)=>{
let {q,sort,page} = req.query 
console.log(q) 
let val=sort=="asc"?1:-1 
//pagination 
let limit=3 
let skip=(+page-1)*limit 
//const data = await MovieModel.find({name:{$regex:q,$options:"i"}})
let data = await todoModel.find().sort({[q]:val}).skip(skip).limit(limit) 
res.send(data)
})  
//pagination 
//limiting the data and displaying partly in terms of pages 

//get operation 
router.post("/",async(req,res)=>{ 
    console.log(req.body)
    let newTodo = new todoModel(req.body) 
    await newTodo.save() 
    res.send(" added")
}) 

module.exports={router} 