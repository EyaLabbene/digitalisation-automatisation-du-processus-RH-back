var express = require("express");
var app = express();
app.use("/user", require("./userRoute"));

module.exports = app;
