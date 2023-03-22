const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResultatSchema = new Schema(
  {
    réponse: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("résultat", ResultatSchema);
