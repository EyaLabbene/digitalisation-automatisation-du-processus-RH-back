const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
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
    title: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("project", projectSchema);
