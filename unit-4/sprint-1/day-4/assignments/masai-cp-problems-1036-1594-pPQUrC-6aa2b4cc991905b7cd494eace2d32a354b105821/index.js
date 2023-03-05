const http = require("http");
const fs = require("fs");
const PORT = 7700


const  server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.setHeader("Content-type","text/html") 
        res.end("<a><li></li></a>")
    } 
    else{
        res.end("404 Not Found")
    }
})
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

// export your server 
module.exports=server
