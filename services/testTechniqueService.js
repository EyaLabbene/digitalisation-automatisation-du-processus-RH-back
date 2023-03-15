const TestTechnique =require('../models/TestTechniqueModel')

async function CreateTestTechnique(testTechniqueData) {
    try {
      const testTechnique = new TestTechnique(testTechniqueData);
      const savedTestTechnique = await testTechnique.save();
      return savedTestTechnique;
    } catch (error) {
      throw new Error('Error creating TestTechnique: ' + error.message);
    }
  }
  async function FindAllTestTechniques() {
    try {
      const testTechniques = await TestTechnique.find();
      return testTechniques;
    } catch (error) {
      throw new Error('Error finding all TestTechniques: ' + error.message);
    }
  }
async function FindSingleTestTechnique(testTechniqueId, testTechniqueData) {
    try {
      const TestTechnique = await TestTechnique.findById(testTechniqueId, testTechniqueData, { new: true });
      if (!testTechnique) {
        throw new Error('TestTechnique not found');
      }
      return testTechnique;
    } catch (error) {
      throw new Error('Error finding  TestTechnique: ' + error.message);
    }
  }
/*const UpdateTestTechnique =async(req,res)=>{

    res.send('update')
}*/
/*const DeleteTestTechnique =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateTestTechnique(testTechniqueId, testTechniqueData) {
    try {
      const testTechnique = await TestTechnique.findByIdAndUpdate(testTechniqueId, testTechniqueData, { new: true });
      if (!testTechnique) {
        throw new Error('TestTechnique not found');
      }
      return testTechnique;
    } catch (error) {
      throw new Error('Error updating TestTechnique: ' + error.message);
    }
  }
  async function DeleteTestTechnique(testTechniqueId) {
    try {
      const testTechnique = await TestTechnique.findByIdAndDelete(testTechniqueId);
      if (!testTechnique) {
        throw new Error('TestTechnique not found');
      }
      return testTechnique;
    } catch (error) {
      throw new Error('Error deleting TestTechnique: ' + error.message);
    }
  }
module.exports={
    CreateTestTechnique,
    FindAllTestTechniques,
    FindSingleTestTechnique,
    UpdateTestTechnique,
    DeleteTestTechnique
}