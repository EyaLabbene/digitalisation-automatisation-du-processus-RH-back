const Poste = require("../models/PosteModel");

async function CreatePoste(posteData) {
  try {
    const poste = new Poste(posteData);
    const savedPoste = await poste.save();
    return savedPoste;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating poste: " + error.message);
  }
}
async function FindAllPostes() {
  try {
    const postes = await Poste.find();
    return postes;
  } catch (error) {
    console.log(error);
    throw new Error("Error finding all postes: " + error.message);
  }
}
async function FindSinglePoste(posteId, posteData) {
  try {
    const poste = await Poste.findById(posteId, posteData, { new: true });
    if (!poste) {
      throw new Error("poste not found");
    }
    return poste;
  } catch (error) {
    throw new Error("Error finding  poste: " + error.message);
  }
}
/*const Updateposte =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteposte =async(req,res)=>{
    res.send('delete')

}*/

async function UpdatePoste(posteId, posteData) {
  try {
    const poste = await Poste.findByIdAndUpdate(posteId, posteData, {
      new: true,
    });
    if (!poste) {
      throw new Error("poste not found");
    }
    return poste;
  } catch (error) {
    throw new Error("Error updating poste: " + error.message);
  }
}
async function DeletePoste(posteId) {
  try {
    const poste = await Poste.findByIdAndDelete(posteId);
    if (!poste) {
      throw new Error("poste not found");
    }
    return poste;
  } catch (error) {
    throw new Error("Error deleting poste: " + error.message);
  }
}
module.exports = {
  CreatePoste,
  FindAllPostes,
  FindSinglePoste,
  UpdatePoste,
  DeletePoste,
};
