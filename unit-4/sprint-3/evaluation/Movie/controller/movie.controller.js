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
        console.log(req.body)
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
const movie_delete=async()=>{
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
}

module.exports={movie_get,movie_post,movie_patch,movie_delete}
