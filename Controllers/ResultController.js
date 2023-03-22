const resultService = require("../services/resultService");

async function addResult(req, res, next) {
  try {
    const result = await resultService.CreateResult(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.send(error);
  }
}

async function getAllResults(req, res, next) {
  try {
    const results = await resultService.FindAllResults();
    res.json(results);
  } catch (error) {
    res.send("error");
  }
}

async function getSingleResult(req, res, next) {
  try {
    const result = await resultService.FindSingleResult(req.params.resultId);
    res.json(result);
  } catch (error) {
    res.send("error");
  }
}

async function updateResult(req, res, next) {
  try {
    const result = await resultService.UpdateResult(
      req.params.resultId,
      req.body
    );
    res.json(result);
  } catch (error) {
    res.send("error");
  }
}

async function deleteResult(req, res, next) {
  try {
    const result = await resultService.DeleteResult(req.params.resultId);
    res.json(result);
  } catch (error) {
    res.send("error");
  }
}

module.exports = {
  addResult,
  getAllResults,
  getSingleResult,
  updateResult,
  deleteResult,
};
