const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interviewSchema = new Schema(
  {
    interviewer: { type: String, required: true },
    interviewee: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("interview", interviewSchema);
