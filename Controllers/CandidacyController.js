const candidacyService = require("../services/candidacyService");

async function addCandidacy(req, res, next) {
  try {
    const candidacy = await candidacyService.CreateCandidacy(req, res, next);
    res.status(201).json(candidacy);
  } catch (error) {
    res.send(error);
  }
}

async function getAllCandidacys(req, res, next) {
  try {
    const candidacys = await candidacyService.FindAllCandidacys(req, res, next);
    res.json(candidacys);
  } catch (error) {
    res.send("error");
  }
}
async function getMyCandidacys(req, res, next) {
  try {
    const candidacys = await candidacyService.FindMyCandidacys(req, res, next);
    res.json(candidacys);
  } catch (error) {
    res.send("error");
  }
}
async function getSingleCandidacy(req, res, next) {
  try {
    const candidacy = await candidacyService.FindSingleCandidacy(
      req,
      res,
      next
    );
    res.json(candidacy);
  } catch (error) {
    res.send(error.message);
  }
}

async function updateCandidacy(req, res, next) {
  try {
    const candidacy = await candidacyService.UpdateCandidacy(req, res, next);
    res.json(candidacy);
  } catch (error) {
    res.send("error");
  }
}

async function deleteCandidacy(req, res, next) {
  try {
    const candidacy = await candidacyService.DeleteCandidacy(req, res, next);
    res.json(candidacy);
  } catch (error) {
    res.send("error");
  }
}

module.exports = {
  addCandidacy,
  getAllCandidacys,
  getSingleCandidacy,
  updateCandidacy,
  deleteCandidacy,
  getMyCandidacys,
};
