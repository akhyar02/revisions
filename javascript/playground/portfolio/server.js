const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer();

server.on("request", (_req, res) => {
  res.setHeader("Content-Type", "text/html");

  const stream = fs
    .createReadStream(path.resolve(__dirname, "index.html"))
    .pipe(res);

  stream.on("error", (err) => {
    res.setHeader("Content-Type", "text/plain");
    res.end(err.message);
  });
});

server.listen(1337);
