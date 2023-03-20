const mongoose = require("mongoose") 

// {
//     "movie_name": "Jeepers Creepers 2",
//     "genre": "Horror",
//     "director": "Ealasaid",
//     "rating": 3.8,
//     "year_of_release": 2002
//    }  

const movieSchema=new mongoose.Schema({
    movie_name:String,
    genre:String,
    director:String,
    rating:Number,
    release:Number

}
) 

const moviemodel=mongoose.model("movie",movieSchema) 
module.exports={moviemodel}