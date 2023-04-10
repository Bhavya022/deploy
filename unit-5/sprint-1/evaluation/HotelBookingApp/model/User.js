const mongoose = require("mongoose") 
const userschema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    Mobile:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }, 
    rating:{
    type:Number,
    min:0,
    max:5, 
    },
},{
    timestamps:true
})  

const usermodel = new mongoose.model("User",userschema) 
module.exports= {usermodel}  