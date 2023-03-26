
const mongoose = require("mongoose") 

const userSchema = mongoose.Schema({
    email:String,
    pass:String,
  location:String,
  age:Number
}) 
//userModel is constructor function
const userModel=mongoose.model("user",userSchema) 

module.exports={userModel}