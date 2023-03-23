const TechnicalTest = require("../models/TechnicalTestModel");

async function CreateTechnicalTest(technicalTestData) {
  try {
    const technicalTest = new TechnicalTest(technicalTestData);
    const savedTechnicalTest = await technicalTest.save();
    return savedTechnicalTest;
  } catch (error) {
    throw new Error("Error creating TechnicalTest: " + error.message);
  }
}
async function FindAllTechnicalTests() {
  try {
    const technicalTests = await TechnicalTest.find();
    return technicalTests;
  } catch (error) {
    throw new Error("Error finding all TechnicalTests: " + error.message);
  }
}
async function FindSingleTechnicalTest(technicalTestId, technicalTestData) {
  try {
    const TechnicalTest = await TechnicalTest.findById(
      technicalTestId,
      technicalTestData,
      { new: true }
    );
    if (!technicalTest) {
      throw new Error("TechnicalTest not found");
    }
    return technicalTest;
  } catch (error) {
    throw new Error("Error finding  TechnicalTest: " + error.message);
  }
}
/*const UpdateTechnicalTest =async(req,res)=>{

    res.send('update')
}*/
/*const DeleteTechnicalTest =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateTechnicalTest(technicalTestId, technicalTestData) {
  try {
    const technicalTest = await TechnicalTest.findByIdAndUpdate(
      technicalTestId,
      technicalTestData,
      { new: true }
    );
    if (!technicalTest) {
      throw new Error("TechnicalTest not found");
    }
    return technicalTest;
  } catch (error) {
    throw new Error("Error updating TechnicalTest: " + error.message);
  }
}
async function DeleteTechnicalTest(technicalTestId) {
  try {
    const technicalTest = await TechnicalTest.findByIdAndDelete(
      technicalTestId
    );
    if (!technicalTest) {
      throw new Error("TechnicalTest not found");
    }
    return technicalTest;
  } catch (error) {
    throw new Error("Error deleting TechnicalTest: " + error.message);
  }
}
module.exports = {
  CreateTechnicalTest,
  FindAllTechnicalTests,
  FindSingleTechnicalTest,
  UpdateTechnicalTest,
  DeleteTechnicalTest,
};
