const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const absenceSchema = new Schema( //rit houni? omek ma tabda esm variable b majuscule absenceSchema kelma thenia w kol tabda b majuscule kahaw
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
