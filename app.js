const express = require("express");
const app = express();
const os = require("os");

const hostname = os.hostname();

app.get("/", (req, res) => {
  res.send(`Hello from ${hostname}`);
});

module.exports = app;
