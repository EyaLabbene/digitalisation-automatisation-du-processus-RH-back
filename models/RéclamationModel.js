const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReclamationSchema = new Schema(
  {
    objet: { type: String, required: true },
    cause: { type: String, required: true }, //22 n9oulou objet w message khir dhaharli
  },
  { timestamps: true }
);

module.exports = mongoose.model("réclamation", ReclamationSchema);
