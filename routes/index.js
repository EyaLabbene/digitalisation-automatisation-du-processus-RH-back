var express = require("express");
var app = express();
const userController = require("../Controllers/UserController");
const {
  authenticateToken,
} = require("../middlewares/authentificationMiddleware");

app.use("/user", require("./userRoute"));
app.use("/authentification", require("./authentificationRoute"));

app.use("/techTest", require("./technicalTestRoute"));
app.use("/meeting", require("./meetingRoute"));

app.use("/complaint", require("./complaintRoute"));
app.use("/project", require("./projectRoute"));
app.use("/profile", require("./profileRoute"));
app.use("/candidacy", require("./candidacyRoute"));
app.use("/poste", require("./posteRoute"));
app.use("/questionResponse", require("./questionResponseRoute"));
app.use("/interview", require("./interviewRoute"));
app.use("/userTest", require("./userTestRoute"));
app.use("/leave", require("./leaveRoute"));
app.use("/absence", require("./absenceRoute"));

module.exports = app;
