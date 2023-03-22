const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResultSchema = new Schema(
  {
    response: { type: String, required: true }, //22 omrek ma testamel accent f hajet haka yjiboulek machekel ba3d
  },
  { timestamps: true }
);

module.exports = mongoose.model("result", ResultSchema);
