const technicalTestService = require("../services/technicalTestService");

async function addTechTest(req, res, next) {
  try {
    const technicalTest = await technicalTestService.CreateTechnicalTest(
      req,
      res,
      next
    );
    res.status(201).json(technicalTest);
  } catch (error) {
    res.send(error);
  }
}

async function getAllTechTest(req, res, next) {
  try {
    const technicalTests = await technicalTestService.FindAllTechnicalTests(
      req,
      res,
      next
    );
    res.json(technicalTests);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleTechTest(req, res, next) {
  try {
    const technicalTest = await technicalTestService.FindSingleTechnicalTest(
      req,
      res,
      next
    );
    res.json(technicalTest);
  } catch (error) {
    res.send(error.message);
  }
}

async function updateTechTest(req, res, next) {
  try {
    /*console.log(req.params.techTestId);
    console.log(req.body);*/
    const technicalTest = await technicalTestService.UpdateTechnicalTest(
      req,
      res,
      next
    );
    res.json(technicalTest);
  } catch (error) {
    res.send("error");
  }
}

async function deleteTechTest(req, res, next) {
  try {
    const technicalTest = await technicalTestService.DeleteTechnicalTest(
      req,
      res,
      next
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
