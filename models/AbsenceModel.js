const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const absenceSchema = new Schema(
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
    justification: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("absence", absenceSchema);
