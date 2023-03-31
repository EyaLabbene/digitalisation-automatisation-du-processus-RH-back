var express = require("express");
var app = express();

app.use("/user", require("./userRoute"));
app.use("/techTest", require("./technicalTestRoute"));
app.use("/meeting", require("./meetingRoute"));

app.use("/complaint", require("./complaintRoute"));
app.use("/project", require("./projectRoute"));
app.use("/profile", require("./profileRoute"));
app.use("/poste", require("./posteRoute"));
app.use("/questionResponse", require("./questionResponseRoute"));
app.use("/interview", require("./interviewRoute"));
app.use("/leave", require("./leaveRoute"));
app.use("/absence", require("./absenceRoute"));

module.exports = app;
