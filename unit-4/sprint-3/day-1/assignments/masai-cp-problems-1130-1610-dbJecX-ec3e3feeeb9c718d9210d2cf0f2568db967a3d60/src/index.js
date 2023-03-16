//  import required modules from nodejs and build the server 
const express = require("express") 
const fs = require("fs") 
const validator = require("../src/middlewares/validator")
const app = express()  
app.use(express.json())
app.use(validator)
app.post("/",(req,res)=>{

})
// export the server
module.exports=app 
