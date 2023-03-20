const {check,validationResult}= require("express-validator") 
require("dotenv").config()
const bodyparser=require("body-parser") 
const express = require("express") 
const path=require("path") 
const app=express() 
const fs=require("fs")
var PORT =process.env.port 

const fieldanalyzer=(req,res,next)=>{
    const {movie_name,
        genre,
        director,
        rating,
        year_of_release}=req.body  
        if(!movie_name && !genre && !director && !rating && !year_of_release){
            return res.send({
                "err": "Few fields are missing, cannot process the request"
                })
        } 
        else{
            next() 
        }
} 

const record = (req,res,next)=>{
    const data = new Date() 
    if(req.method=="PATCH"){
        const msg=`The movie with id:${req.params.id} has been updated | ${date}./n` 
        fs.appendFileSync("./record.txt",msg) 
        res.send("record updated")
    } 
    else if(req.method=="DELETE"){
        const msg=`The movie with id:${req.params.id} has been deleted | ${date}./n` 
        fs.appendFileSync("./record.txt",msg) 
        res.send("record deleted")
    }  
    else{
        next() 
    }
} 
module.exports={fieldanalyzer,record} 