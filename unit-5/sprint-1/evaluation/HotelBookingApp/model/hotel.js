//It should have guest_name, checkin_date, checkout_date, room_type, room_number etc.   

const mongoose = require("mongoose") 

const hotelschema = new mongoose.Schema({
    guest_name:{
        type:String,
        required:true,
    },
    checkin_date :{
        type:Date,
        required:true,
    } ,
    checkout_date:{
        type:Date,
        required:true,
    }, 
    room_type:{
        type:String,
        required:true,
    },
    room_number:{
        type:Number,
        required:true,
    }
}) 

const hotelmodel = mongoose.model("booking",hotelschema)  

module.exports={
    hotelmodel
}