const Entretien =require('../models/EntretienModel')

async function CreateEntretien(entretienData) {
    try {
      const entretien = new Entretien(entretienData);
      const savedEntretien = await entretien.save();
      return savedEntretien;
    } catch (error) {
      throw new Error('Error creating entretien: ' + error.message);
    }
  }
  async function FindAllEntretiens() {
    try {
      const entretiens = await Entretien.find();
      return entretiens;
    } catch (error) {
      throw new Error('Error finding all entretiens: ' + error.message);
    }
  }
async function FindSingleEntretien(entretienId, entretienData) {
    try {
      const entretien = await Entretien.findById(entretienId, entretienData, { new: true });
      if (!entretien) {
        throw new Error('entretien not found');
      }
      return entretien;
    } catch (error) {
      throw new Error('Error finding  entretien: ' + error.message);
    }
  }
/*const Updateentretien =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteentretien =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateEntretien(entretienId, entretienData) {
    try {
      const entretien = await Entretien.findByIdAndUpdate(entretienId, entretienData, { new: true });
      if (!entretien) {
        throw new Error('entretien not found');
      }
      return entretien;
    } catch (error) {
      throw new Error('Error updating entretien: ' + error.message);
    }
  }
  async function DeleteEntretien(entretienId) {
    try {
      const entretien = await Entretien.findByIdAndDelete(entretienId);
      if (!entretien) {
        throw new Error('entretien not found');
      }
      return entretien;
    } catch (error) {
      throw new Error('Error deleting entretien: ' + error.message);
    }
  }
module.exports={
   CreateEntretien,
    FindAllEntretiens,
    FindSingleEntretien,
    UpdateEntretien,
    DeleteEntretien
}