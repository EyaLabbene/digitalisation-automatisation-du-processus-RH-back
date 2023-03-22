const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntretienSchema = new Schema(
  {
    date_début: { type: String, required: true },
    date_fin: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("entretien", EntretienSchema);
