const mongoose = require("mongoose") 
require("dotenv").config()
const connection = async()=>{
    try{
    await mongoose.connect("mongodb+srv://bhavya:bhavya@cluster0.kin5ecd.mongodb.net/moviedb?retryWrites=true&w=majority")
    console.log(`connected to db server running @ ${process.env.port}`)
    } 
    catch(err){
        console.log(err)
    }
}   

module.exports={connection}