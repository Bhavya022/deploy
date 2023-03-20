const express=require("express") 
//post,get,patch,del 
const moviemodel=require("../models/movie.model")
const{movie_get,movie_post,movie_patch,movie_delete}=require("../controller/movie.controller") 
const{fieldanalyzer,record}=require("../middlewares/validator")
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
movieRoute.patch("/:_id",record,async(req,res)=>{
    try{ 
        console.log(req.body)
const update_movie=await moviemodel.findByIdAndUpdate(req.params._id,req.body,{new:true});
console.log(update_movie) 
if(!update_movie){
    res.status(400).send({msg:"movie not Found"})
} 
else{
    res.send({msg:"movie updated successfully"})
}
    } 
    catch(err){
  res.status(500).send({err:err.message})
    }
    }) 
movieRoute.post("/",fieldanalyzer,async(req,res)=>{
    console.log(req.body) 
    try{
        const new_movie=new moviemodel(req.body) 
        await new_movie.save() 
        res.status(200).send({msg:"movie addded successfully"})  
        
          } 
          catch(err){ 
              
              console.log(err) 
              res.send({
                "err": "Few fields are missing, cannot process the request"
                }
                )
          }
}) 
movieRoute.delete("/:deleteID",record,async(req,res)=>{
    try{
       const deleted_movie= await moviemodel.findByIdAndDelete(req.params.deleteID) 
        console.log(deleted_movie)  
        if(!deleted_movie){
            res.status(404).send({msg:"movie not found"})
        } 
        else{
            res.status(200).send({msg:"movie deleted successfully"})
        }
    } 
    catch(err){
     res.status(500).send({err:err.message})
    }
    })  

module.exports={movieRoute}