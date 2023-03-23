const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const technicalTestSchema = new Schema(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("techTest", technicalTestSchema);