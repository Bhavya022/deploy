
const mongoose=require("mongoose") 

const connection=async()=>{
await mongoose.connect("mongodb+srv://bhavya:bhavya@cluster0.kin5ecd.mongodb.net/nxm101b24?retryWrites=true&w=majority") 
console.log("connected to db")
} 
module.exports={connection} 