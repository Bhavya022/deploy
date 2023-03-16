const express = require("express")
const fs = require("fs"); 

const validator = express.Router()
// make the validator function and export it.
validator.use((req,res,next)=>{
    const {ID,Name,Rating,Description,Genre,Cast} = req.body 
    if(!ID||!Name ||!Rating||!Description||!Genre||!Cast){
        res.status(400).send("invalid request body.")
    }
    
    if(typeof ID=="number" && typeof Name=="string" && typeof Rating=="number" && typeof Description=="string" && typeof Genre=="string" && Array.isArray(Cast) && Cast.every(ele=>
        typeof ele=="string") && !Name.match(/[0-9]/g)) { 
            fs.appendFileSync("./res.txt","ID is a number\n")  
            fs.appendFileSync("./res.txt","Name is a string\n")  
            fs.appendFileSync("./res.txt","Description is a string\n") 
            fs.appendFileSync("./res.txt","Rating is a number\n") 
            fs.appendFileSync("./res.txt","Genre is a string\n") 
            fs.appendFileSync("./res.txt","Cast is a array of string\n")
            

            res.status(200).send("data received")
        } 
        else{
            fs.appendFileSync("./res.txt","bad request.some data is incorrect.\n")
            res.status(400).send("bad request.some data is incorrect.") 
           
        } 
        next() 
}) 

// module.exports = validatorfunction;
module.exports=validator