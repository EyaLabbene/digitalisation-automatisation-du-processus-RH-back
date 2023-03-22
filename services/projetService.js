const Projet = require("../models/ProjetModel");

async function CreateProjet(projetData) {
  try {
    const projet = new Projet(projetData);
    const savedProjet = await projet.save();
    return savedProjet;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating projet: " + error.message);
  }
}
async function FindAllProjets() {
  try {
    const projets = await Projet.find();
    return projets;
  } catch (error) {
    console.log(error);
    throw new Error("Error finding all projets: " + error.message);
  }
}
async function FindSingleProjet(projetId, projetData) {
  try {
    const projet = await Projet.findById(projetId, projetData, { new: true });
    if (!projet) {
      throw new Error("projet not found");
    }
    return projet;
  } catch (error) {
    throw new Error("Error finding  projet: " + error.message);
  }
}
/*const Updateprojet =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteprojet =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateProjet(projetId, projetData) {
  try {
    const projet = await Projet.findByIdAndUpdate(projetId, projetData, {
      new: true,
    });
    if (!projet) {
      throw new Error("projet not found");
    }
    return projet;
  } catch (error) {
    throw new Error("Error updating projet: " + error.message);
  }
}
async function DeleteProjet(projetId) {
  try {
    const projet = await Projet.findByIdAndDelete(projetId);
    if (!projet) {
      throw new Error("projet not found");
    }
    return projet;
  } catch (error) {
    throw new Error("Error deleting projet: " + error.message);
  }
}
module.exports = {
  CreateProjet,
  FindAllProjets,
  FindSingleProjet,
  UpdateProjet,
  DeleteProjet,
};
