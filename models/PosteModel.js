const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const posteSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: Buffer, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("poste", posteSchema);
