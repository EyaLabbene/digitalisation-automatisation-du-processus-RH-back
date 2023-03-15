const Profil =require('../models/ProfilModel')

async function CreateProfil(profilData) {
    try {
      const profil = new Profil(profilData);
      const savedProfil = await profil.save();
      return savedProfil;
    } catch (error) {
      throw new Error('Error creating profil: ' + error.message);
    }
  }
  async function FindAllProfils() {
    try {
      const profils = await Profil.find();
      return profils;
    } catch (error) {
      throw new Error('Error finding all profils: ' + error.message);
    }
  }
async function FindSingleProfil(profilId, profilData) {
    try {
      const profil = await Profil.findById(profilId, profilData, { new: true });
      if (!profil) {
        throw new Error('profil not found');
      }
      return profil;
    } catch (error) {
      throw new Error('Error finding  profil: ' + error.message);
    }
  }
/*const Updateprofil =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteprofil =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateProfil(profilId, profilData) {
    try {
      const profil = await Profil.findByIdAndUpdate(profilId, profilData, { new: true });
      if (!profil) {
        throw new Error('profil not found');
      }
      return profil;
    } catch (error) {
      throw new Error('Error updating profil: ' + error.message);
    }
  }
  async function DeleteProfil(profilId) {
    try {
      const profil = await Profil.findByIdAndDelete(profilId);
      if (!profil) {
        throw new Error('profil not found');
      }
      return profil;
    } catch (error) {
      throw new Error('Error deleting profil: ' + error.message);
    }
  }
module.exports={
   CreateProfil,
    FindAllProfils,
    FindSingleProfil,
    UpdateProfil,
    DeleteProfil
}