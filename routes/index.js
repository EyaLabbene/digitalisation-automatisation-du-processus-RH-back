var express = require("express");
var app = express();
// houni sala7t l export
app.use("/user", require("./userRoute"));
app.use("/testTech", require("./testTechniqueRoute"));
app.use("/reunion", require("./reunionRoute"));
app.use("/résultat", require("./résultatRoute"));
app.use("/réclamation", require("./réclamationRoute"));
app.use("/projet", require("./projetRoute"));
app.use("/profil", require("./profilRoute"));
app.use("/poste", require("./posteRoute"));
app.use("/entretien", require("./entretienRoute"));
app.use("/congé", require("./congéRoute"));
app.use("/absence", require("./absenceRoute"));

module.exports = app;
