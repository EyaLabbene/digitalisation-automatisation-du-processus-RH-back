const absenceService = require("../services/absenceService");

async function addAbsence(req, res, next) {
  try {
    const absence = await absenceService.CreateAbsence(req, res, next);
    res.status(201).json(absence);
  } catch (error) {
    next(error);
  }
}

async function getAllAbsences(req, res, next) {
  try {
    const absences = await absenceService.FindAllAbsences(req, res, next);
    res.json(absences);
  } catch (error) {
    next(error);
  }
}

async function getSingleAbsence(req, res, next) {
  try {
    const absence = await absenceService.FindSingleAbsence(req, res, next);
    res.json(absence);
  } catch (error) {
    res.send(error.message);
  }
}

async function updateAbsence(req, res, next) {
  try {
    const absence = await absenceService.UpdateAbsence(req, res, next);
    res.json(absence);
  } catch (error) {
    next(error);
  }
}

async function deleteAbsence(req, res, next) {
  try {
    const absence = await absenceService.DeleteAbsence(req, res, next);
    res.json(absence);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addAbsence,
  getAllAbsences,
  getSingleAbsence,
  updateAbsence,
  deleteAbsence,
};
