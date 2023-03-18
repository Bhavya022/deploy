const mongoose=require("mongoose") 

const userSchema=new mongoose.Schema({
 username:{
    type:String,
    required:true,
    unique:true
 },
 email:{
    type:String,
    required:true,
 },
 DOB:{
 type:Date,
 required:true
 },
role:{
    type:String,
    enum:['Admin','Explorer'],
    required:true
},
location:{
  type:String,
  required:true 
},
password:{
    type:String,
    required:true 
}

    // -username ==> Input Field
    //    -email ==> Input Field
    //    -DOB ==> Input Field
    //    -Role ==> Dropdown Menu (Admin, Explorer)
    //    -location ==> Input Field
    //    -password ==> Input Field (Type: Password)
    //    -confirm password ==> Input Field (Type: Password)


}) 