const testTechniqueService = require("../services/testTechniqueService");

async function addTestTech(req, res, next) {
  try {
    const testTechnique = await testTechniqueService.CreateTestTechnique(
      req.body
    );
    res.status(201).json(testTechnique);
  } catch (error) {
    res.send(error);
  }
}

async function getAllTestTech(req, res, next) {
  try {
    const testTechniques = await testTechniqueService.FindAllTestTechniques();
    res.json(testTechniques);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleTestTech(req, res, next) {
  try {
    const testTechnique = await testTechniqueService.FindSingleTestTechnique(
      req.params.testTechniqueId
    );
    res.json(testTechnique);
  } catch (error) {
    res.send("error");
  }
}

async function updateTestTech(req, res, next) {
  try {
    const testTechnique = await testTechniqueService.UpdateTestTechnique(
      req.params.testTechniqueId,
      req.body
    );
    res.json(testTechnique);
  } catch (error) {
    res.send("error");
  }
}

async function deleteTestTech(req, res, next) {
  try {
    const testTechnique = await testTechniqueService.DeletetestTechnique(
      req.params.testTechniqueId
    );
    res.json(testTechnique);
  } catch (error) {
    res.send("error");
  }
}
module.exports = {
  addTestTech,
  getSingleTestTech,
  getAllTestTech,
  updateTestTech,
  deleteTestTech,
};
