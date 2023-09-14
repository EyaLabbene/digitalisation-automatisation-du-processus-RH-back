const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userTestSchema = new Schema(
  {
    techTest: { type: mongoose.Schema.Types.ObjectId, ref: "techTest" },
    userTestee: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    mark: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("userTest", userTestSchema);
