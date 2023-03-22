const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InterviewSchema = new Schema(
  {
    start_date: { type: Date, required: true }, //22 accent le kima 9otlek fel fichier lekher
    end_date: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("interview", InterviewSchema);
