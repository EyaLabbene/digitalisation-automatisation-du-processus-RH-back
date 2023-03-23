const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaveSchema = new Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
      // refConditions: {
      //     $or: [
      //         { deleted: { $exists: false } },
      //         { deleted: { $exists: true, $eq: false } },
      //     ],
      // },
    },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    cause: { type: String, required: true },
    answer: {
      type: String,
      enum: ["accepted", "waiting", "refused"],
      default: "waiting",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("leave", leaveSchema);
