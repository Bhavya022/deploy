//  import required modules from nodejs  
const http = require("http")
const fs=require("fs")
// create the server 
const server = http.createServer((req,res)=>{
    let filePath = "." + req.url;
    let contentType = "text/html";
    if (filePath === "./") {
      filePath = "./.";
    } 
    if (req.url === "/") {
        fs.readdir(".", function (err, files) {
          let fileHtml = "";
          files.forEach(function (file) {
            fileHtml += `<li><a href="${file}">${file}</a></li>`;
          });
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(`
          <html>
            <head>
              <title>File Server</title>
            </head>
            <body>
              <ul>
                ${fileHtml}
              </ul>
            </body>
          </html>
          `);
          res.end();
        });
      } else {
        fs.stat(filePath, (err, stats) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.write("404 Not Found");
            res.end();
            return;
          }
    
          if (stats.isFile()) {
            fs.readFile(filePath, function (err, data) {
              if (err) {
                res.writeHead(500);
                res.end(`Error loading file ${filePath}`);
                return;
              }
              res.writeHead(200, { "Content-Type": contentType });
              res.end(data);
            });
          } else {
            fs.readdir(filePath, function (err, files) {
              let fileHtml = "";
              files.forEach(function (file) {
                fileHtml += `<li><a href="${filePath}/${file}">${file}</a></li>`;
              });
              res.writeHead(200, { "Content-Type": "text/html" });
              res.write(`
              <html>
                <head>
                  <title>File Server</title>
                </head>
                <body>
                  <ul>
                    ${fileHtml}
                  </ul>
                </body>
              </html>
              `);
              res.end();
            });
          }
        });
      }
    
})




// export the server 
module.exports=server
