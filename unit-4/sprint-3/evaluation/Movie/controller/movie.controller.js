const {moviemodel} = require("../models/movie.model") 

//get 
const movie_get=async(req,res)=>{
    const movie_data=await moviemodel.find() 
    res.send(movie_data)
}  
//post
const movie_post=async(req,res)=>{
    try{
  const new_movie=new moviemodel(req.body) 
  await new_movie.save() 
  res.status(200).send({msg:"movie addded successfully"}) 
    } 
    catch(err){ 
        
        console.log(err) 
        res.send({err:err.message})
    }
} 

//patch 
const movie_patch=async(req,res)=>{
    try{
const update_movie=await moviemodel.findByIdAndUpdate(req.params.updateID,req.body,{new:true});
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
} 

//delete 
