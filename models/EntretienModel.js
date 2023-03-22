const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntretienSchema = new Schema(
  {
    date_début: { type: String, required: true }, //22 accent le kima 9otlek fel fichier lekher
    date_fin: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("entretien", EntretienSchema);
