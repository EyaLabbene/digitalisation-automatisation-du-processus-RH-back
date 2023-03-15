const Réclamation =require('../models/RéclamationModel')

async function CreateRéclamation(réclamationData) {
    try {
      const réclamation = new Réclamation(réclamationData);
      const savedRéclamation = await réclamation.save();
      return savedRéclamation;
    } catch (error) {
      throw new Error('Error creating réclamation: ' + error.message);
    }
  }
  async function FindAllRéclamations() {
    try {
      const réclamations = await Réclamation.find();
      return réclamations;
    } catch (error) {
      throw new Error('Error finding all réclamations: ' + error.message);
    }
  }
async function FindSingleRéclamation(réclamationId, réclamationData) {
    try {
      const réclamation = await Réclamation.findById(réclamationId, réclamationData, { new: true });
      if (!réclamation) {
        throw new Error('réclamation not found');
      }
      return réclamation;
    } catch (error) {
      throw new Error('Error finding  réclamation: ' + error.message);
    }
  }
/*const Updateréclamation =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteréclamation =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateRéclamation(réclamationId, réclamationData) {
    try {
      const réclamation = await Réclamation.findByIdAndUpdate(réclamationId, réclamationData, { new: true });
      if (!réclamation) {
        throw new Error('réclamation not found');
      }
      return réclamation;
    } catch (error) {
      throw new Error('Error updating réclamation: ' + error.message);
    }
  }
  async function DeleteRéclamation(réclamationId) {
    try {
      const réclamation = await Réclamation.findByIdAndDelete(réclamationId);
      if (!réclamation) {
        throw new Error('réclamation not found');
      }
      return réclamation;
    } catch (error) {
      throw new Error('Error deleting réclamation: ' + error.message);
    }
  }
module.exports={
   CreateRéclamation,
    FindAllRéclamations,
    FindSingleRéclamation,
    UpdateRéclamation,
    DeleteRéclamation
}