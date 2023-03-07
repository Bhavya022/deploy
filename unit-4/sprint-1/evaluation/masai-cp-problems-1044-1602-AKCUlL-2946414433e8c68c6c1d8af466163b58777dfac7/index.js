const http = require("http");
const fs = require("fs");
const os = require("os");
const dns = require("node:dns");
const cowsay = require("cowsay");

let userCnt = 0; //To count the number of users 
const URL= "www.masaischool.com "
const Address= "3.7.198.157 "
const Family = "IPv4" 
const dateobj = new Date()  
const mon =["Jan","Feb","Mar"] 
const date =(`0${dateobj.getDate()}`) 
const month = dateobj.getMonth()
const year = dateobj.getFullYear() 
const hrs=dateobj.getHours() 
const min = dateobj.getMinutes() 
const sec= dateobj.getSeconds()   
const name = mon[month]


//" make the server function and export";

  //Handling the home route, send an h1 tag
 
  //counting the number of users and writing the initial number in the logs.txt along with the time stamp
 
 var server= http.createServer((req,res)=>{
      if(req.url=="/"){ 
       res.setHeader("Content-type","text/html")
        res.end("<h1>HOME PAGE</h1>")
      } 
      else if(req.url=="/count"){
        let data = fs.readFileSync("./data.json","utf-8") 
       // console.log(data) 
        for(let i=0;i<data.length;i++){
          userCnt+=i 
        } 
        console.log(userCnt,data.length)  
        //The inital user count is 10 at Thu Mar 02 2023 19:03:30 GMT+0530 (India Standard Time) 
        //The inital user count is 25 at Mon ${name} ${date} ${year} ${hrs}:${min}:${sec+1} GMT-0800 (Pacific Standard Time)
        fs.writeFile("./logs.txt",`The inital user count is 25 at ${Date()}\n`,(err)=>{
          if(err){
            res.end("Send the complete err as response")
          } 
          else{
            res.end("The user count has been updated in the logs file")
          }
        })
      }  
      else if(req.url=="/update"){
        const obj={
          id:1,
         first_name:os.userInfo().username,
         last_name:os.userInfo().username,
         email:"b@gmail.com", 
         gender:"Female"

        } 
        let data=JSON.parse(fs.readFileSync("./data.json","utf-8")) 
        data.push(obj)
       // console.log(data) 
        //data.push(obj) 
        fs.writeFile("./data.json",JSON.stringify(data))
      } 
      if(req.url=="/users"){
        let data=JSON.parse(fs.readFileSync("./data.json","utf-8",(err,data)=>{
          if(err){
            res.end("Send the complete err as response")
          } 
          else{
            res.end("The data has been updated, go and check the data file")
          }
        })) 
        res.setHeader("Content-type","text/html") 
        res.write("Following are the users present in database:")
        for(let i=0;i<data.length;i++){
         // console.log(data[i].first_name)  
          let name=data[i].first_name
          
          res.write(`<li>${data[i].first_name}</li>`)
        } 
        res.end()
      } 
      else if(req.url=="/address"){
        dns.lookup(URL,(err,Address,Family)=>{
          fs.appendFile("logs.txt","\nURL: masaischool.com IP Address: 3.7.198.157 and Family is IPv4",(err)=>{
            if(err){
              console.log(err)
            } 
            else{
           console.log(fs.readFileSync("logs.txt","utf8"))
            }
          })
        })
      }
    }) 

  
  //updating the user database
 
    //should append updated number of users in logs.txt along with the time stamp

  //get the first names of all the users from the json file and send as a response in list format

  //to get the website url from terminal and write its ip address and family in logs.txt
 
  // using the cowsay external module
  



// Do not listen to the server just export(default) it

module.exports=server