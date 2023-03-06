const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 7500;

const server = http.createServer((req, res) => {
  let filePath = "." + req.url;

  if (filePath === "./") {
    filePath = "./.";
  }

  //const extname = path.extname(filePath);
  let contentType = "text/html";

  // switch (extname) {
  //   case ".js":                      
  //     contentType = "text/javascript";
  //     break;
  //   case ".css":
  //     contentType = "text/css";
  //     break;
  //   case ".json":
  //     contentType = "application/json";
  //     break;
  //   case ".png":
  //     contentType = "image/png";
  //     break;
  //   case ".jpg":
  //     contentType = "image/jpg";
  //     break;
  // }

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
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;