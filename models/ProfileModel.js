const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema( //22  les informations hedhom moush deja majoudin fel user?
  {
    name: { type: String, required: true },
    first_name: { type: String, required: true },
    address: { type: String, required: true },
    date_of_birth: { type: String, required: true },
    position: { type: String, required: true },
    image: { type: Buffer, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("profile", profileSchema);
