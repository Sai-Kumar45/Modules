var http = require("http");
var server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/json" });
  res.end("server is working!");
});

const port = 5000;
server.listen(port, () => {
  console.log(`server is running Local: http://localhost:${port}`);
});
