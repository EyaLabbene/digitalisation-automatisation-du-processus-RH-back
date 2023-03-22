const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfilSchema = new Schema(
  {
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    adresse: { type: String, required: true },
    date_naissance: { type: String, required: true },
    poste: { type: String, required: true },
    image: { type: Buffer, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("profil", ProfilSchema);
