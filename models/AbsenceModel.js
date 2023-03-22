const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AbsenceSchema = new Schema(
  {
    nom_employee: { type: String, required: true }, //22 nekhdmouhesh haka hedhi fasakha w to nwarik kifeh naamlouha besh naamlou virtual link binet el absence w employé appartir mel id tansesh l esm ynajem yetawed ama id dima unique
    justification: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("absence", AbsenceSchema);
