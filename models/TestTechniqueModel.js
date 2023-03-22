const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestTechniqueSchema = new Schema(
  {
    title: { type: String, required: true }, //22 salah hedhi
  },
  { timestamps: true }
);

module.exports = mongoose.model("testTech", TestTechniqueSchema);
