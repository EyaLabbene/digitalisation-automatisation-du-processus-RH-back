const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionsSchema = new Schema(
  {
    question: { type: String, required: true },
    answer_one: { type: String, required: true },
    answer_two: { type: String, required: true },
    answer_three: { type: String, required: true },
    good_answer: { type: String, required: true },
    mark: { type: Number, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("questionResponse", questionsSchema);
