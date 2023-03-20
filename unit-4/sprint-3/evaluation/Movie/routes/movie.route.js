const express=require("express") 
//post,get,patch,del 
const moviemodel=require("../models/movie.model")
const{movie_get,movie_post,movie_patch,movie_delete}=require("../controller/movie.controller") 

const movieRoute = express.Router() 
//pagination limiting the data and display in terms of pages and send to res
movieRoute.get("/",async(req,res)=>{
    let {query,sort,page}=req.query 
    console.log(query) 
    let val=sort=="asc"?1:-1 
    let limit=2 
    let skip=(+page-1)*limit 
    
     let data = await moviemodel.find().sort({[query]:val}).skip(skip).limit(limit)
    res.send(data)
}) 
movieRoute.patch("/",movie_patch) 
movieRoute.post("/",async(req,res)=>{
    console.log(req.body) 
    try{
        const new_movie=new moviemodel(req.body) 
        await new_movie.save() 
        res.status(200).send({msg:"movie addded successfully"}) 
          } 
          catch(err){ 
              
              console.log(err) 
              res.send({err:err.message})
          }
}) 
movieRoute.delete("/",movie_delete)  

module.exports={movieRoute}