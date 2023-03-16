var express = require("express");
var app = express();
// houni sala7t l export
app.use("/user", require("./userRoute"));

module.exports = app;
