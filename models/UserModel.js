const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    last_name: { type: String, required: true },
    first_name: { type: String, required: true },
    role: { type: String, required: true },
    address: { type: String, required: true },
    date_of_birth: { type: Date },
    Username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

module.exports = mongoose.model("user", userSchema);
