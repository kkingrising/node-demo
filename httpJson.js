var http = require("http");

var onRequest = function(request, response) {
  console.log("Request received");
  response.writeHead(200, { "Content-Type": "application/json" });
  var obj = {
    name: "xu",
    age: "24"
  };
  response.end(JSON.stringify(obj));
};

var server = http.createServer(onRequest);

server.listen(3000, "127.0.0.1");
console.log("Server started on localhost port 3000");
