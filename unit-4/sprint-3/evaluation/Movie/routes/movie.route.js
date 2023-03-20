const express=require("express") 
//post,get,patch,del 

const{movie_get,movie_post,movie_patch,movie_delete}=require("../controller/movie.controller") 

const movieRoute = express.Router() 

movieRoute.get("/",movie_get) 
movieRoute.patch("/update",movie_patch) 
movieRoute.post("/post",movie_post) 
movieRoute.delete("/delete",movie_delete)  

module.exports={movieRoute}