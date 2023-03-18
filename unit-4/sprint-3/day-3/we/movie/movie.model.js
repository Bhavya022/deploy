const mongoose = require("mongoose") 

const movieSchema = mongoose.Schema({
    name:String,
    rating:Number,
    year:Number
}) 

const MovieModel=mongoose.model("movie",movieSchema) 
module.exports={MovieModel}