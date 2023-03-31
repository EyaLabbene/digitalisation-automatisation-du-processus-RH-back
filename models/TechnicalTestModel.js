const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const technicalTestSchema = new Schema(
  {
    questions: [mongoose.Schema.Types.ObjectId],
    title: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("techTest", technicalTestSchema);
