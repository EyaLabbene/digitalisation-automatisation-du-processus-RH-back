const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidacySchema = new Schema(
  {
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    poste: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "poste",
    },
    cv: {
      type: Buffer,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("candidacy", candidacySchema);
