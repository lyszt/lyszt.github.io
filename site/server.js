const fs = require("fs");
const path = require("path");

port = 8080;
require("http")
  .createServer((request, response) => {
    if (request.url === "/") {
      response.setHeader("Content-type", "text/html");
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.statusCode = 200;
      response.end(require("fs").readFileSync("index.html", "utf8"));
    }
    else if (request.url.match(".css$")) {
      const cssPath = path.join(__dirname, request.url);
      const fileStream = fs.createReadStream(cssPath, "UTF-8");
      response.writeHead(200, { "Content-Type": "text/css" });
      fileStream.pipe(response);
    }
  })
  .listen(port);
