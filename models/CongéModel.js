const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CongeSchema = new Schema(
  {
    date_début: { type: Date, required: true }, //22 accent le w f esm fichier zeda nahih
    date_fin: { type: Date, required: true },
    cause: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("congé", CongeSchema);
