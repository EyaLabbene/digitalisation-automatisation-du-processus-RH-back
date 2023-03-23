const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const complaintSchema = new Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
      /*refConditions: {
				$or: [
					{ deleted: { $exists: false } },
					{ deleted: { $exists: true, $eq: false } },
				],
			},*/
    },
    object: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("complaint", complaintSchema);
