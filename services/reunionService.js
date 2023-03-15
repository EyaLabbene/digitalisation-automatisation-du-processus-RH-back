const Reunion =require('../models/ReunionModel')

async function CreateReunion(reunionData) {
    try {
      const reunion = new Reunion(reunionData);
      const savedReunion = await reunion.save();
      return savedReunion;
    } catch (error) {
      throw new Error('Error creating reunion: ' + error.message);
    }
  }
  async function FindAllReunions() {
    try {
      const reunions = await Reunion.find();
      return reunions;
    } catch (error) {
      throw new Error('Error finding all reunions: ' + error.message);
    }
  }
async function FindSingleReunion(reunionId, reunionData) {
    try {
      const reunion = await Reunion.findById(reunionId, reunionData, { new: true });
      if (!reunion) {
        throw new Error('reunion not found');
      }
      return reunion;
    } catch (error) {
      throw new Error('Error finding  reunion: ' + error.message);
    }
  }
/*const Updatereunion =async(req,res)=>{

    res.send('update')
}*/
/*const Deletereunion =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateReunion(reunionId, reunionData) {
    try {
      const reunion = await Reunion.findByIdAndUpdate(reunionId, reunionData, { new: true });
      if (!reunion) {
        throw new Error('reunion not found');
      }
      return reunion;
    } catch (error) {
      throw new Error('Error updating reunion: ' + error.message);
    }
  }
  async function DeleteReunion(reunionId) {
    try {
      const reunion = await Reunion.findByIdAndDelete(reunionId);
      if (!reunion) {
        throw new Error('reunion not found');
      }
      return reunion;
    } catch (error) {
      throw new Error('Error deleting reunion: ' + error.message);
    }
  }
module.exports={
   CreateReunion,
    FindAllReunions,
    FindSingleReunion,
    UpdateReunion,
    DeleteReunion
}

