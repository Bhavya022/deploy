

const express = require("express") 
const movieRouter = express.Router()


movieRouter.get("/",async(req,res)=>{
let {q,sort,page} = req.query 
console.log(q) 
let val=sort="asc"?1:-1 
//pagination 
let limit=5 
let skip=(+page-1)*limit 

let data = await MovieModel.find({name:{$regex:q,$options:i}}).sort({name:val}).skip(skip).limit(limit) 
res.send(data)
})  
//pagination 
//limiting the data and displaying partly in terms of pages 

//get operation 
movieRouter.post("/",async(req,res)=>{ 
    console.log(req.body)
    let newMovie = new MovieModel(req.body) 
    await newMovie.save() 
    res.send("Movie added")
}) 

module.exports={movieRouter}