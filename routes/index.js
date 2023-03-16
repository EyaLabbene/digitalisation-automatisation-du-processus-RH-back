var express = require("express");
var router = express.Router();

var app = express();

app.use(
  "/user",
  async (req, res, next) => {
    console.log("wselt houni");
    next();
  },
  require("./userRoute")
);

module.exports = router;
