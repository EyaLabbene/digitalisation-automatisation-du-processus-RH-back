const TechnicalTest = require("../models/TechnicalTestModel");

async function CreateTechnicalTest(req, res, next) {
  try {
    const technicalTest = new TechnicalTest(req.body);
    const savedTechnicalTest = await technicalTest.save();
    return savedTechnicalTest;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function FindAllTechnicalTests(req, res, next) {
  try {
    const technicalTests = await TechnicalTest.find().populate([
      { path: "questions" },
    ]);
    return technicalTests;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function FindSingleTechnicalTest(req, res, next) {
  try {
    const currentTechnicalTest = await TechnicalTest.findById(
      req.params.techTestId
    );
    if (!currentTechnicalTest) {
      res.status(404);
    }
    return currentTechnicalTest;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
/*const UpdateTechnicalTest =async(req,res)=>{

    res.send('update')
}*/
/*const DeleteTechnicalTest =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateTechnicalTest(req, res, next) {
  try {
    const technicalTest = await TechnicalTest.findByIdAndUpdate(
      req.params.techTestId,
      req.body,
      { new: true }
    );
    if (!technicalTest) {
      res.status(404);
    }
    return technicalTest;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function DeleteTechnicalTest(req, res, next) {
  try {
    const technicalTest = await TechnicalTest.findByIdAndDelete(
      req.params.techTestId
    );
    if (!technicalTest) {
      res.status(404);
    }
    return technicalTest;
  } catch (error) {
    res.status(500).send(error.message);
  }
}
module.exports = {
  CreateTechnicalTest,
  FindAllTechnicalTests,
  FindSingleTechnicalTest,
  UpdateTechnicalTest,
  DeleteTechnicalTest,
};
