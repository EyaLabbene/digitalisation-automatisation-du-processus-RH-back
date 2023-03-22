const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComplaintSchema = new Schema(
  {
    object: { type: String, required: true },
    message: { type: String, required: true }, //22 n9oulou objet w message khir dhaharli
  },
  { timestamps: true }
);

module.exports = mongoose.model("complaint", ComplaintSchema); //22 kifkif houni tnajem tehleklek barsha hajet l accent
