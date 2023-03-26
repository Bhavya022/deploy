
const mongoose = require("mongoose") 

const notesSchema = mongoose.Schema({
    title:String,
    body:String,
  sub:String, 
  userID:String
},{
    versionKey:false
}) 
//userModel is constructor function
const NotesModel=mongoose.model("note",notesSchema) 

module.exports={NotesModel}