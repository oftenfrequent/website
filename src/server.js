const port = 5500;
const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.resolve("build")));

app.get("/*", function (req, res, next) {
  res.sendFile(path.resolve("build/index.html"));
});

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
