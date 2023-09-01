const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingSchema = new Schema(
  {
    date: { type: Date, required: true },
    employee: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    start_time: { type: Date, required: true },
    end_time: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("meeting", meetingSchema);
