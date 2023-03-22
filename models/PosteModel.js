const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PosteSchema = new Schema(
  {
    Titre: { type: String, required: true },
    image: { type: Buffer, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("poste", PosteSchema);
