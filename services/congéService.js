const Congé =require('../models/CongéModel')

async function CreateCongé(congéData) {
    try {
      const congé = new Congé(congéData);
      const savedCongé = await congé.save();
      return savedCongé;
    } catch (error) {
      throw new Error('Error creating congé: ' + error.message);
    }
  }
  async function FindAllCongés() {
    try {
      const congés = await Congé.find();
      return congés;
    } catch (error) {
      throw new Error('Error finding all congés: ' + error.message);
    }
  }
async function FindSingleCongé(congéId, congéData) {
    try {
      const congé = await Congé.findById(congéId, congéData, { new: true });
      if (!congé) {
        throw new Error('congé not found');
      }
      return congé;
    } catch (error) {
      throw new Error('Error finding  congé: ' + error.message);
    }
  }
/*const Updatecongé =async(req,res)=>{

    res.send('update')
}*/
/*const Deletecongé =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateCongé(congéId, congéData) {
    try {
      const congé = await Congé.findByIdAndUpdate(congéId, congéData, { new: true });
      if (!congé) {
        throw new Error('congé not found');
      }
      return congé;
    } catch (error) {
      throw new Error('Error updating congé: ' + error.message);
    }
  }
  async function DeleteCongé(congéId) {
    try {
      const congé = await Congé.findByIdAndDelete(congéId);
      if (!congé) {
        throw new Error('congé not found');
      }
      return congé;
    } catch (error) {
      throw new Error('Error deleting congé: ' + error.message);
    }
  }
module.exports={
   CreateCongé,
    FindAllCongés,
    FindSingleCongé,
    UpdateCongé,
    DeleteCongé
}