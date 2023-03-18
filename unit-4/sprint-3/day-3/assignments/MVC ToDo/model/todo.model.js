const mongoose = require("mongoose") 

const todoSchema = mongoose.Schema({
    name:String,
    Age:Number,
    DOBYear:Number
}) 

const todoModel=mongoose.model("todo",todoSchema) 
module.exports={todoModel}