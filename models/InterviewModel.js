const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interviewSchema = new Schema(
  {
    date: { type: Date, required: true },
    interviewer: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    interviewee: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    result_case: {
      type: String,
      enum: ["accepted", "waiting", "refused"],
      default: "waiting",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("interview", interviewSchema);
