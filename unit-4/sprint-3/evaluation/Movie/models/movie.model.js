const mongoose = require("mongoose") 

// {
//     "movie_name": "Jeepers Creepers 2",
//     "genre": "Horror",
//     "director": "Ealasaid",
//     "rating": 3.8,
//     "year_of_release": 2002
//    }  

const movieSchema=new mongoose.Schema({
    movie_name:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    } ,
    director:{
        type:String,
        required:true
    } ,
    rating:{
        type:Number,
        required:true
    }  ,
    release:{
        type:Number,
        required:true
    } 

},{
    versionKey:false
}) 

const moviemodel=mongoose.model("movie",movieSchema) 
module.exports={moviemodel}