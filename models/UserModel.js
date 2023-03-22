const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema( //22 soit tarjem kol chay francais soit kol chay anglais w mel mostahsen kol chay anglais
  {
    nom: { type: String, required: true },
    Prenom: { type: String, required: true },
    role: { type: String, required: true },
    adresse: { type: String, required: true },
    dateNaissance: { type: Date },
    Username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);
UserSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

module.exports = mongoose.model("user", UserSchema);
