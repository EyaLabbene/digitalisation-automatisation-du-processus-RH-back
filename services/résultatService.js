const Résultat = require("../models/RésultatModel");

async function CreateRésultat(résultatData) {
  try {
    const résultat = new Résultat(résultatData);
    const savedRésultat = await résultat.save();
    return savedRésultat;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating résultat: " + error.message);
  }
}
async function FindAllRésultats() {
  try {
    const résultats = await Résultat.find();
    return résultats;
  } catch (error) {
    console.log(error);
    throw new Error("Error finding all résultats: " + error.message);
  }
}
async function FindSingleRésultat(résultatId, résultatData) {
  try {
    const résultat = await Résultat.findById(résultatId, résultatData, {
      new: true,
    });
    if (!résultat) {
      throw new Error("résultat not found");
    }
    return résultat;
  } catch (error) {
    throw new Error("Error finding  résultat: " + error.message);
  }
}
/*const Updaterésultat =async(req,res)=>{

    res.send('update')
}*/
/*const Deleterésultat =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateRésultat(résultatId, résultatData) {
  try {
    const résultat = await Résultat.findByIdAndUpdate(
      résultatId,
      résultatData,
      { new: true }
    );
    if (!résultat) {
      throw new Error("résultat not found");
    }
    return résultat;
  } catch (error) {
    throw new Error("Error updating résultat: " + error.message);
  }
}
async function DeleteRésultat(résultatId) {
  try {
    const résultat = await Résultat.findByIdAndDelete(résultatId);
    if (!résultat) {
      throw new Error("résultat not found");
    }
    return résultat;
  } catch (error) {
    throw new Error("Error deleting résultat: " + error.message);
  }
}
module.exports = {
  CreateRésultat,
  FindAllRésultats,
  FindSingleRésultat,
  UpdateRésultat,
  DeleteRésultat,
};
