const technicalTestService = require("../services/technicalTestService");

async function addTechTest(req, res, next) {
  try {
    const technicalTest = await technicalTestService.CreateTechnicalTest(
      req.body
    );
    res.status(201).json(technicalTest);
  } catch (error) {
    res.send(error);
  }
}

async function getAllTechTest(req, res, next) {
  try {
    const technicalTests = await technicalTestService.FindAllTechnicalTests();
    res.json(technicalTests);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleTechTest(req, res, next) {
  try {
    const technicalTest = await technicalTestService.FindSingleTechnicalTest(
      req.params.technicalTestId
    );
    res.json(technicalTest);
  } catch (error) {
    res.send("error");
  }
}

async function updateTechTest(req, res, next) {
  try {
    const technicalTest = await technicalTestService.UpdateTechnicalTest(
      req.params.technicalTestId,
      req.body
    );
    res.json(technicalTest);
  } catch (error) {
    res.send("error");
  }
}

async function deleteTechTest(req, res, next) {
  try {
    const technicalTest = await technicalTestService.DeleteTechnicalTest(
      req.params.technicalTestId
    );
    res.json(technicalTest);
  } catch (error) {
    res.send("error");
  }
}
module.exports = {
  addTechTest,
  getSingleTechTest,
  getAllTechTest,
  updateTechTest,
  deleteTechTest,
};