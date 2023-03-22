const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LeaveSchema = new Schema(
  {
    start_date: { type: Date, required: true }, //22 accent le w f esm fichier zeda nahih
    end_date: { type: Date, required: true },
    cause: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("leave", LeaveSchema);
